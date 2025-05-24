import { StyleSheet } from 'react-native';
import { colors, spacing } from '../../src/theme';

export const styles = StyleSheet.create({
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
    marginTop: spacing.lg,
  },
  illustration: {
    width: 192,
    height: 192,
    marginBottom: spacing.enormous,
  },
  title: {
    textAlign: 'center',
    marginBottom: spacing.huge,
  },
  errorText: {
    textAlign: 'center',
    marginBottom: spacing.xl,
    paddingHorizontal: spacing.xxl,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: spacing.xxl,
    gap: spacing.md,
    alignItems: 'center',
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
    marginRight: spacing.sm,
  },
  buttonText: {
    textAlign: 'center',
  },
}); 