import { View, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Loading({ message }) {
  return (
    <View>
      <Text>{message}</Text>
      <AntDesign name="loading1" size={24} color="black" />
    </View>
  );
}
