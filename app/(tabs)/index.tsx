import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { router } from 'expo-router';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Text } from '../../src/components';
import { useAuth } from '../../src/contexts/AuthContext';
import { styles } from './home.styles';

export default function HomeScreen() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      // 구글 로그아웃
      await GoogleSignin.signOut();
      // 앱 로그아웃
      await logout();
      // 로그인 화면으로 이동
      router.replace('/(auth)/login');
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="title1" color="textPrimary">
          환영합니다!
        </Text>
        {user?.profileImage && (
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        )}
      </View>

      <View style={styles.userInfo}>
        <Text variant="subTitle1" color="textPrimary" style={styles.userName}>
          {user?.name}님
        </Text>
        <Text variant="body2" color="textSecondary">
          {user?.email}
        </Text>
      </View>

      <View style={styles.content}>
        <Text variant="body1" color="textPrimary" style={styles.welcomeText}>
          ClosetLink에 오신 것을 환영합니다!
        </Text>
        <Text variant="body2" color="textSecondary" style={styles.description}>
          당신의 옷장이 누군가의 스타일이 됩니다.
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text variant="body1" color="white">
          로그아웃
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
} 