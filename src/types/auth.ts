// 구글 사용자 정보 타입
export interface GoogleUser {
    id: string;
    email: string;
    name: string;
    photo?: string | null;
    givenName?: string | null;
    familyName?: string | null;
}

// 서버 응답 사용자 정보 타입
export interface User {
    id: string;
    email: string;
    name: string;
    profileImage?: string;
    createdAt: string;
    updatedAt: string;
}

// 로그인 응답 타입
export interface LoginResponse {
    user: User;
    accessToken: string;
    refreshToken?: string;
}

// 인증 컨텍스트 상태 타입
export interface AuthState {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
    isLoading: boolean;
    isAuthenticated: boolean;
}