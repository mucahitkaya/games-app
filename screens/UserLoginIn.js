import { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import AuthContent from "../auth/AuthContent";
import Loading from "../components/Loading";
import { login } from "../util/auth";

function UserLoginIn() {
  const authCtx = useContext(AuthContent);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authhenticate(token);
    } catch (error) {
      Alert.alert("Authentication Failed", "Check Credentials");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <Loading message="You are logging in" />;
  }

  return (
    <>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingsText}>Hoşgeldiniz</Text>
      </View>
      <AuthContent isLogin onAuthenticate={loginHandler} />
    </>
  );
}
export default UserLoginIn;

const styles = StyleSheet.create({
  greetingsContainer: {
    marginVertical: 40,
  },
  greetingsText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "700",
  },
});
// const { users, setUsers } = useContext(UserDatas);

// //This supposed to be run when user focused that page
// // useEffect(() => {
// //   AppState.addEventListener("focus", setTime(getTime()));
// // }, []);

// //Sends props when buton is clicked
// function pressHandler() {
//   // navigation.navigate("GamesList", {
//   //   userName: users.userName,
//   //   currentTime: time,
//   // });
//   //ABOVE CODE is sends prop
//   navigation.navigate("AuthForm");
//   storeUserData(users);
// }

// inputContainer: {
//   display: "flex",
//   flexDirection: "column",
//   alignItems: "center",
// },
// usernameContainer: {
//   alignItems: "center",
//   marginBottom: 15,
// },
// inputLabel: {
//   fontSize: 16,
//   fontWeight: "600",
//   textAlign: "center",
//   marginBottom: 10,
// },
// inputBox: {
//   width: 210,
//   height: 50,
//   borderWidth: 1,
//   borderRadius: 20,
//   borderColor: "#000000",
//   textAlign: "center",
//   fontSize: 14,
//   fontWeight: "400",
// },
