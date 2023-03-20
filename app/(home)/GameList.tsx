import { StyleSheet ,Pressable} from "react-native";
import { Text, View } from "../../components/Themed";
import { Stack ,Link} from "expo-router";

export default function TabHomeScreen() {
  return (
    <>
    {/* 当前路由修改 导航栏相关参数 */}
      {/* <Stack.Screen
        options={{
          headerTitle: "11111",
        }}
      ></Stack.Screen> */}
      <View style={styles.container}>
        <Text style={styles.title}>GameList</Text>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        <Link href="/(home)/GameList2" asChild>
             <Text>test2</Text>
            </Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
