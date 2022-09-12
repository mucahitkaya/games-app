import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserLogin from "./screens/UserLogin";
import GamesList from "./screens/GamesList";
import FindTwin from "./screens/FindTwin";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#BBE7FF" },
          }}
        >
          <Stack.Screen name="UserLogin" component={UserLogin} options={{}} />
          <Stack.Screen
            name="GamesList"
            component={GamesList}
            options={{
              title: "Games List",
            }}
          />
          <Stack.Screen
            name="FindTwin"
            component={FindTwin}
            options={{
              title: "Find The Twin Game",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
