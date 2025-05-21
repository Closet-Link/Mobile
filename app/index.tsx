import { Image, SafeAreaView, StyleSheet, TouchableOpacity, View } from "react-native";
import Text from "./components/Text";
import colors from "./styles/colors";

// 이미지 import 예시
import closetIllustration from '../assets/images/illustrations/closet_illustration.png';

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <Image 
        source={closetIllustration}
        style={styles.illustration}
      />
      <Text variant="title1" color={colors.textPrimary} style={styles.title}>
        {'당신의 옷장\n누군가의 스타일이 되다'}
      </Text>
      <View>
        <TouchableOpacity onPress={() => { console.log("시작하기") }}>
          <Text variant="body1" color={colors.textPrimary}>
            시작하기
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { console.log("둘러보기") }}>
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
    textAlign: 'center'
  },
}); 