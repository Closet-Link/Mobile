import { TextStyle } from 'react-native';
import typography, { TypographyVariant } from '../../app/styles/typography';

export const useTypography = () => {
  const getTypographyStyle = (variant: TypographyVariant): TextStyle => {
    const style = typography[variant];
    return {
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      lineHeight: style.lineHeight,
      ...(style.fontWeight && { fontWeight: style.fontWeight }),
    };
  };

  return {
    getTypographyStyle,
  };
};

export default useTypography; 