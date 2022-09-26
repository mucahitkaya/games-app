import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserLoginIn from "./screens/UserLoginIn";
import UserSignUp from "./screens/UserSignUp";
import GamesList from "./screens/GamesList";
import FindTwin from "./screens/FindTwin";
import Todo from "./screens/Todo";
import EngWords from "./screens/EngWords";
import AuthForm from "./auth/AuthForm";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import UserDatasProvider from "./context/userData";
import { UserDatas } from "./context/userData";
import { useContext } from "react";
import AuthContent from "./auth/AuthContent";

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
  const authCtx = useContext(UserDatas);
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
          headerRight: () => {
            <Ionicons
              name="exit"
              size={24}
              color={"black"}
              onPress={authCtx.logout}
            />;
          },
        }}
      />
      <Stack.Screen
        name="FindTwin"
        component={FindTwin}
        options={{
          title: "Find The Twin Game",
          headerRight: ({ tintColor }) => (
            <Ionicons
              name="exit"
              size={24}
              color={"black"}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Todo"
        component={Todo}
        options={{
          title: "Create or do your Todo's",
          headerRight: ({ tintColor }) => (
            <Ionicons
              name="exit"
              size={24}
              color={"black"}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
      <Stack.Screen
        name="EngWords"
        component={EngWords}
        options={{
          title: "Create or do your Todo's",
          headerRight: ({ tintColor }) => (
            <Ionicons
              name="exit"
              size={24}
              color={"black"}
              onPress={authCtx.logout}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

function Navigation() {
  const authCtx = useContext(UserDatas);

  return (
    <NavigationContainer>
      {!authCtx.isAuthenticated && <AuthStack />}
      {authCtx.isAuthenticated && <AuthenticatedStack />}
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
