import { router } from 'expo-router';
import React, { useEffect } from 'react';
import { ActivityIndicator, Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '../../src/components';
import { useAuth } from '../../src/contexts/AuthContext';
import { useGoogleSignIn } from '../../src/hooks/useGoogleSignIn';
import { colors } from '../../src/theme';
import { styles } from './login.styles';

// 이미지 import
import GoogleIcon from '../../assets/images/icons/google.svg';
import closetIllustration from '../../assets/images/illustrations/closet_illustration.png';

export default function LoginScreen() {
  const { configureGoogleSignIn, signIn, loading: googleLoading, error } = useGoogleSignIn();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    configureGoogleSignIn();
  }, [configureGoogleSignIn]);

  useEffect(() => {
    if (isAuthenticated) {
      router.replace('/(tabs)');
    }
  }, [isAuthenticated]);

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
        <Text variant="body1" color="textSecondary" style={styles.loadingText}>
          잠시만 기다려주세요...
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={closetIllustration} style={styles.illustration} />

      <Text variant="title1" color="textPrimary" style={styles.title}>
        {'당신의 옷장\n누군가의 스타일이 되다'}
      </Text>

      {error && (
        <Text variant="body2" color="errorRed" style={styles.errorText}>
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
          <Text variant="body1" color="textPrimary" style={styles.buttonText}>
            {googleLoading ? '로그인 중...' : '구글로 시작하기'}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
} 