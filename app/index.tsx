import { StyleSheet, View } from "react-native";
import Text from "./components/Text";
import colors from "./styles/colors";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text variant="title1" color={colors.primary1}>
        회원가입
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.gray1,
  },
});
