import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import { colors, ColorVariant, typography, TypographySize } from '../../theme';

interface TextProps extends RNTextProps {
  variant?: TypographySize;
  color?: ColorVariant | string;
  style?: TextStyle;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  color = 'textPrimary',
  style,
  children,
  ...props
}) => {
  const textColor = typeof color === 'string' && color in colors ? colors[color as ColorVariant] : color;

  return (
    <RNText
      style={[
        {
          fontSize: typography.sizes[variant],
          lineHeight: typography.lineHeights[variant],
          color: textColor,
        },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text; 