import React from 'react';
import { Text as RNText, TextProps as RNTextProps, TextStyle } from 'react-native';
import useTypography from '../../src/hooks/useTypography';
import { TypographyVariant } from '../styles/typography';

interface TextProps extends RNTextProps {
  variant?: TypographyVariant;
  color?: string;
  style?: TextStyle;
}

export const Text: React.FC<TextProps> = ({
  variant = 'body1',
  color,
  style,
  children,
  ...props
}) => {
  const { getTypographyStyle } = useTypography();

  return (
    <RNText
      style={[
        getTypographyStyle(variant),
        color && { color },
        style,
      ]}
      {...props}
    >
      {children}
    </RNText>
  );
};

export default Text; 