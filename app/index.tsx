import { router } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '../src/components';
import { useAuth } from '../src/contexts/AuthContext';
import { colors, spacing } from '../src/theme';

export default function Index() {
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.replace('/(tabs)');
      } else {
        router.replace('/(auth)/login');
      }
    }
  }, [isAuthenticated, isLoading]);

  // 로딩 화면
  return (
    <SafeAreaView style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.gray1,
    }}>
      <ActivityIndicator size="large" color={colors.primary1} />
      <Text 
        variant="body1" 
        color="textSecondary" 
        style={{ marginTop: spacing.lg }}
      >
        잠시만 기다려주세요...
      </Text>
    </SafeAreaView>
  );
} 