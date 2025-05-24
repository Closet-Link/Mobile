import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../src/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.gray1,
    paddingHorizontal: spacing.xxl,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  userInfo: {
    alignItems: 'center',
    marginVertical: spacing.xxxl,
  },
  userName: {
    marginBottom: spacing.sm,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.xl,
  },
  welcomeText: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
  logoutButton: {
    backgroundColor: colors.primary1,
    borderRadius: 24,
    paddingVertical: spacing.lg,
    alignItems: 'center',
    marginBottom: spacing.xxxl,
  },
});