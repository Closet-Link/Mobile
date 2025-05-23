import { GoogleSignin } from '@react-native-google-signin/google-signin';
import React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuth } from '../src/contexts/AuthContext';
import Text from './components/Text';
import colors from './styles/colors';

export default function Home() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      // 구글 로그아웃
      await GoogleSignin.signOut();
      // 앱 로그아웃
      await logout();
    } catch (error) {
      console.error('로그아웃 실패:', error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text variant="title1" color={colors.textPrimary}>
          환영합니다!
        </Text>
        {user?.profileImage && (
          <Image source={{ uri: user.profileImage }} style={styles.profileImage} />
        )}
      </View>

      <View style={styles.userInfo}>
        <Text variant="subTitle1" color={colors.textPrimary} style={styles.userName}>
          {user?.name}님
        </Text>
        <Text variant="body2" color={colors.textSecondary}>
          {user?.email}
        </Text>
      </View>

      <View style={styles.content}>
        <Text variant="body1" color={colors.textPrimary} style={styles.welcomeText}>
          ClosetLink에 오신 것을 환영합니다!
        </Text>
        <Text variant="body2" color={colors.textSecondary} style={styles.description}>
          당신의 옷장이 누군가의 스타일이 됩니다.
        </Text>
      </View>

      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text variant="body1" color={colors.white}>
          로그아웃
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray1,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    alignItems: 'center',
    marginVertical: 30,
  },
  userName: {
    marginBottom: 8,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
  logoutButton: {
    backgroundColor: colors.primary1,
    borderRadius: 24,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
}); 