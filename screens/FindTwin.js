import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { UserDatas } from "../context/userData";

function FindTwin() {
  const { users } = useContext(UserDatas);

  return (
    <View>
      <View>
        <Pressable>
          <Text>{users.userName}</Text>
          <Text>{users.password}</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default FindTwin;
const styles = StyleSheet.create({
  container: {},
});
