export type ColorVariant = 
  | 'primary1'
  | 'primary2'
  | 'gray1'
  | 'gray2'
  | 'gray3'
  | 'textPrimary'
  | 'textSecondary'
  | 'accentGreen'
  | 'errorRed';

const colors: Record<ColorVariant, string> = {
  primary1: '#CDAA7D',    // 강조 요소
  primary2: '#B89566',    // 호버, 클릭 시 컬러
  gray1: '#F5F4F2',      // 전체 배경색
  gray2: '#E0DED9',      // 카드, 입력창 등 배경
  gray3: '#AFAAA3',      // 테두리, 디바이더 등
  textPrimary: '#2E2E2E', // 본문 주요 텍스트
  textSecondary: '#7A7A7A', // 서브 텍스트
  accentGreen: '#6DA58F',  // 긍정적 상태 표시
  errorRed: '#CC5C5C',    // 오류 메시지
};

export default colors;