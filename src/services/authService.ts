import { Platform } from 'react-native';
import { LoginResponse } from "../types/auth";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL || 'http://localhost:3000';

export class AuthService {
    // 구글 토큰으로 서버 로그인
    static async loginWithGoogle(idToken: string): Promise<LoginResponse> {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/google`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    idToken,
                    platform: Platform.OS === 'ios' ? 'ios' : 'android',
                }),
            });

            if (!response.ok) {
                throw new Error(`서버 오류: ${response.status}`);
            }

            const data = await response.json();
            
            // 서버 응답 형식에 맞게 변환
            const loginResponse: LoginResponse = {
                user: data.user || {
                    id: '',
                    email: '',
                    name: '',
                    createdAt: new Date().toISOString(),
                    updatedAt: new Date().toISOString(),
                },
                accessToken: data.access_token,
                refreshToken: data.refresh_token || '', // 서버에서 제공하지 않으면 빈 문자열
            };

            return loginResponse;
        } catch (error) {
            console.error('Google 로그인 실패:', error);
            throw new Error('로그인에 실패했습니다. 다시 시도해주세요.');
        }
    }

    // 토큰 갱신
    static async refreshToken(refreshToken: string): Promise<{ accessToken: string }> {
        try {
            const response = await fetch(`${API_BASE_URL}/auth/refresh`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ refreshToken }),
            });

            if (!response.ok) {
                throw new Error('토큰 갱신 실패');
            }

            return await response.json();
        } catch (error) {
            console.error('토큰 갱신 실패:', error);
            throw error;
        }
    }

    // 로그아웃
    static async logout(accessToken: string): Promise<void> {
        try {
            await fetch(`${API_BASE_URL}/auth/logout`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
            });
        } catch (error) {
            console.error('로그아웃 실패:', error);
        }
    }
}
