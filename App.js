import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import UserLogin from "./screens/UserLogin";
import GamesList from "./screens/GamesList";

export default function App() {
  return (
    <View style={styles.container}>
      <GamesList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});
