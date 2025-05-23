import {
    GoogleSignin,
    statusCodes,
} from '@react-native-google-signin/google-signin';
import { useState } from "react";

export const useGoogleSignIn = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

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

            return userInfo;
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
                    setError('로그인 중 오류가 발생했습니다.');
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