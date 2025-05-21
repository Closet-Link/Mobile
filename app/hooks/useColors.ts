import colors, { ColorVariant } from '../styles/colors';

export const useColors = () => {
  const getColor = (variant: ColorVariant): string => {
    return colors[variant];
  };

  return {
    getColor,
    colors,
  };
};

export default useColors;