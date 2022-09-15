import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserLoginIn from "./screens/UserLoginIn";
import UserSignUp from "./screens/UserSignUp";
import GamesList from "./screens/GamesList";
import FindTwin from "./screens/FindTwin";
import AuthForm from "./auth/AuthForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import { UserDatasProvider, UserDatas } from "./context/userData";

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#BBE7FF" },
      }}
    >
      <Stack.Screen name="UserLoginIn" component={UserLoginIn} />
      <Stack.Screen name="UserSignUp" component={UserSignUp} />
    </Stack.Navigator>
  );
}

function AuthenticatedStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#BBE7FF" },
      }}
    >
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
  );
}

function Navigation() {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <UserDatasProvider>
        <Navigation />
      </UserDatasProvider>
    </>
  );
}

const styles = StyleSheet.create({});
