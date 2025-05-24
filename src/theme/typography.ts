export const typography = {
  sizes: {
    title1: 28,
    title2: 24,
    subTitle1: 20,
    subTitle2: 18,
    body1: 16,
    body2: 14,
    caption: 12,
  },
  weights: {
    regular: '400' as const,
    medium: '500' as const,
    semiBold: '600' as const,
    bold: '700' as const,
  },
  lineHeights: {
    title1: 36,
    title2: 32,
    subTitle1: 28,
    subTitle2: 24,
    body1: 24,
    body2: 20,
    caption: 16,
  },
} as const;

export type TypographySize = keyof typeof typography.sizes;
export type TypographyWeight = keyof typeof typography.weights; 