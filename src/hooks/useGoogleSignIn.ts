import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from "react";
import { useAuth } from '../contexts/AuthContext';
import { AuthService } from '../services/authService';

export const useGoogleSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const { login } = useAuth();

    const configureGoogleSignIn = () => {
        GoogleSignin.configure({
            iosClientId: process.env.EXPO_PUBLIC_GOOGLE_IOS_CLIENT_ID,
        });
    };

    const signIn = async () => {
        try {
            setLoading(true);
            setError(null);

            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();

            // userInfo.data가 null인지 체크
            if (!userInfo.data) {
                throw new Error('구글 사용자 정보를 가져올 수 없습니다.');
            }

            // 구글 토큰 추출
            const idToken = userInfo.data.idToken;
            if (!idToken) {
                throw new Error('Google 토큰을 가져올 수 없습니다.');
            }

            // 필수 사용자 정보 체크
            if (!userInfo.data.user.id || !userInfo.data.user.email || !userInfo.data.user.name) {
                throw new Error('필수 사용자 정보가 없습니다.');
            }

            // 서버로 로그인 요청
            const loginResponse = await AuthService.loginWithGoogle(idToken);

            // 인증 컨텍스트에 로그인 정보 저장
            await login(
                loginResponse.user,
                loginResponse.accessToken,
                loginResponse.refreshToken
            );

            return loginResponse.user;
        } catch (err: any) {
            switch (err.code) {
                case statusCodes.SIGN_IN_CANCELLED:
                    setError('구글 로그인이 취소되었습니다.');
                    break;
                case statusCodes.IN_PROGRESS:
                    setError('이미 로그인 중입니다.');
                    break;
                case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
                    setError('구글 플레이 서비스를 사용할 수 없습니다.');
                    break;
                default:
                    setError(err.message || '로그인 중 오류가 발생했습니다.');
            }
            return null;
        } finally {
            setLoading(false);
        }
    };

    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
        } catch (err) {
            setError('로그아웃 중 오류가 발생했습니다.');
        }
    };

    return {
        signIn,
        signOut,
        loading,
        error,
        configureGoogleSignIn,
    };
};