import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
  AppState,
} from "react-native";
import { UserDatas } from "../context/userData";
import { storeUserData } from "../http";

function UserLogin({ navigation }) {
  const { users, setUsers } = useContext(UserDatas);

  //This supposed to be run when user focused that page
  // useEffect(() => {
  //   AppState.addEventListener("focus", setTime(getTime()));
  // }, []);

  //Sends props when buton is clicked
  function pressHandler() {
    // navigation.navigate("GamesList", {
    //   userName: users.userName,
    //   currentTime: time,
    // });
    //ABOVE CODE is sends prop
    navigation.navigate("GamesList");
    storeUserData(users);
  }
  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingsText}>Hoşgeldiniz</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.inputLabel}>Username:</Text>
          <TextInput
            style={styles.inputBox}
            maxLength={30}
            placeholder={"Type your username.."}
            onChangeText={(text) =>
              setUsers((prevUsers) => {
                return {
                  ...prevUsers,
                  userName: text,
                };
              })
            }
          ></TextInput>
        </View>
        <View style={styles.usernameContainer}>
          <Text style={styles.inputLabel}>Password:</Text>
          <TextInput
            style={styles.inputBox}
            maxLength={8}
            onChangeText={(text) =>
              setUsers((prevUsers) => {
                return {
                  ...prevUsers,
                  password: text,
                };
              })
            }
            placeholder={"Type your password.."}
          ></TextInput>
        </View>
      </View>
      <View style={styles.loginContainer}>
        <Pressable
          style={({ pressed }) =>
            pressed
              ? [styles.loginButton, styles.pressed]
              : [styles.loginButton]
          }
          onPress={pressHandler}
        >
          <Text style={styles.buttonText}>LOGİN</Text>
        </Pressable>
      </View>
    </View>
  );
}
export default UserLogin;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "space-around",
    flexDirection: "column",
  },
  greetingsContainer: { marginTop: 40 },
  greetingsText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  usernameContainer: {
    alignItems: "center",
    marginBottom: 15,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
  },
  inputBox: {
    width: 210,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
  },
  loginContainer: {
    alignItems: "center",
  },
  loginButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#BBE7FF",
    elevation: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.6,
  },
});
