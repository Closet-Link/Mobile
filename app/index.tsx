import React, { useEffect } from 'react';
import { ActivityIndicator, Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./components/Text";
import colors from "./styles/colors";

// 이미지 import
import GoogleIcon from '../assets/images/icons/google.svg';
import closetIllustration from '../assets/images/illustrations/closet_illustration.png';

import { useAuth } from '../src/contexts/AuthContext';
import { useGoogleSignIn } from '../src/hooks/useGoogleSignIn';
import Home from './home';

export default function Index() {
  const { configureGoogleSignIn, signIn, loading: googleLoading, error } = useGoogleSignIn();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    configureGoogleSignIn();
  }, []);

  const handleGoogleSignIn = async () => {
    const user = await signIn();
    if (user) {
      console.log('로그인 성공:', user);
    }
  };

  // 로딩 중일 때
  if (isLoading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={colors.primary1} />
        <Text variant="body1" color={colors.textSecondary} style={styles.loadingText}>
          잠시만 기다려주세요...
        </Text>
      </SafeAreaView>
    );
  }

  // 인증된 사용자라면 홈 화면 표시
  if (isAuthenticated) {
    return <Home />;
  }

  // 미인증 사용자라면 로그인 화면 표시
  return (
    <SafeAreaView style={styles.container}>
      <Image source={closetIllustration} style={styles.illustration}/>

      <Text variant="title1" color={colors.textPrimary} style={styles.title}>
        {'당신의 옷장\n누군가의 스타일이 되다'}
      </Text>

      {error && (
        <Text variant="body2" color={colors.errorRed} style={styles.errorText}>
          {error}
        </Text>
      )}

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.googleButton} 
          onPress={handleGoogleSignIn} 
          disabled={googleLoading}
        >
          <GoogleIcon width={20} height={20} style={styles.googleIcon} />
          <Text variant="body1" color={colors.textPrimary} style={styles.buttonText}>
            {googleLoading ? '로그인 중...' : '구글로 시작하기'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => { console.log("둘러보기") }}>
          <Text variant="body1" color={colors.textPrimary}>
            둘러보기
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray1,
  },
  loadingText: {
    marginTop: 16,
  },
  illustration: {
    width: 192,
    height: 192,
    marginBottom: 80,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
  },
  errorText: {
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 24,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 24,
    gap: 12,
    alignItems: 'center',
  },
  button: {
    width: '80%',
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleButton: {
    width: '80%',
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.white,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  buttonText: {
    textAlign: 'center',
  },
}); 