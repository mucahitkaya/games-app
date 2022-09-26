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
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingsText}>Hoşgeldiniz</Text>
      </View>
      <View style={styles.gameTypeContainer}>
        <View style={styles.loginContainer}>
          <Pressable
            style={({ pressed }) =>
              pressed
                ? [styles.loginButton, styles.pressed]
                : [styles.loginButton]
            }
            // onPress={pressHandler}
          >
            <Text style={styles.buttonText}>LOGİN</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
export default FindTwin;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    // flexDirection: "column",
  },
  greetingsContainer: {
    marginVertical: 30,
  },
  greetingsText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
  },
  loginContainer: {
    alignItems: "center",
  },
  loginButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 110,
    height: 40,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#BBE7FF",
    elevation: 5,
  },
  pressed: {
    opacity: 0.6,
  },
  buttonText: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "600",
  },
});
