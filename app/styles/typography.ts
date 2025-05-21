import { TextStyle } from 'react-native';

export type TypographyVariant = 
  | 'title1'
  | 'title2'
  | 'subTitle1'
  | 'body1'
  | 'body2'
  | 'caption';

export interface Typography {
  fontFamily: string;
  fontSize: number;
  lineHeight: number;
  fontWeight?: TextStyle['fontWeight'];
}

const typography: Record<TypographyVariant, Typography> = {
  title1: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 24,
    lineHeight: 32,
  },
  title2: {
    fontFamily: 'Pretendard-Bold',
    fontSize: 20,
    lineHeight: 28,
  },
  subTitle1: {
    fontFamily: 'Pretendard-Medium',
    fontSize: 18,
    lineHeight: 26,
  },
  body1: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 16,
    lineHeight: 24,
  },
  body2: {
    fontFamily: 'Pretendard-Regular',
    fontSize: 14,
    lineHeight: 22,
  },
  caption: {
    fontFamily: 'Pretendard-Light',
    fontSize: 12,
    lineHeight: 18,
  },
};

export default typography; 