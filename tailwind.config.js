/ ** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        "pretendard-bold": ["Pretendard-Bold"],
        "pretendard-medium": ["Pretendard-Medium"],
        "pretendard-regular": ["Pretendard-Regular"],
        "pretendard-light": ["Pretendard-Light"],
      },
      fontSize: {
        title1: ['24px', { lineHeight: '32px', fontWeight: '700' }],
        title2: ['20px', { lineHeight: '28px', fontWeight: '600' }],
        subTitle1: ['18px', { lineHeight: '26px', fontWeight: '500' }],
        body1: ['16px', { lineHeight: '24px', fontWeight: '400' }],
        body2: ['14px', { lineHeight: '22px', fontWeight: '400' }],
        caption: ['12px', { lineHeight: '18px', fontWeight: '300' }],
      },
      colors: {
        primary1: "#CDAA7D",
        primary2: "#B89566",
        gray1: "#F5F4F2",
        gray2: "#E0DED9",
        gray3: "#AFAAA3",
        textPrimary: "#2E2E2E",
        textSecondary: "#7A7A7A",
        accentGreen: "#6DA58F",
        errorRed: "#CC5C5C",

        // 다크모드 전용 컬러를 별도로 선언
        darkPrimary1: "#D5B893",
        darkPrimary2: "#A88C65",
        darkGray2: "#2A2A2A",
        darkGray3: "#8C8C8C",
        darkTextPrimary: "#F0F0F0",
        darkTextSecondary: "#AAAAAA",
        darkBackground: "#1C1C1C",
      },
    },
  },
  plugins: [],
};