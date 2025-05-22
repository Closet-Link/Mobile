import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./components/Text";
import colors from "./styles/colors";

// 이미지 import 예시
import GoogleIcon from '../assets/images/icons/google.svg';
import closetIllustration from '../assets/images/illustrations/closet_illustration.png';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>

      <Image source={closetIllustration} style={styles.illustration}/>

      <Text variant="title1" color={colors.textPrimary} style={styles.title}>
        {'당신의 옷장\n누군가의 스타일이 되다'}
      </Text>

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity  style={styles.googleButton} onPress={() => { console.log("구글 로그인") }}>
          <GoogleIcon width={20} height={20} style={styles.googleIcon} />
          <Text variant="body1" color={colors.textPrimary} style={styles.buttonText}>
            구글로 시작하기
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
  illustration: {
    width: 192,
    height: 192,
    marginBottom: 80,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
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