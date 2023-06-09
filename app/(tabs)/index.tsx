import { StyleSheet ,Pressable} from "react-native";
import { Text, View } from "../../components/Themed";
import { Stack ,Link} from "expo-router";
import { useAuth } from "../../context/auth";


export default function TabHomeScreen() {
  const { signOut } = useAuth();
  return (
    <>
    {/* 当前路由修改 导航栏相关参数 */}
      <Stack.Screen
        options={{
          headerTitle: "11111",
        }}
      ></Stack.Screen>
      <View style={styles.container}>
        <Text style={styles.title}>Tab Home</Text>
        {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
        <Link href="/(home)/GameList" asChild>
             <Text>test</Text>
            </Link>


            <Text onPress={signOut}>out</Text>
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
