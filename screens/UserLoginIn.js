import { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { UserDatas } from "../context/userData";
import Loading from "../components/Loading";
import { login } from "../util/auth";
import AuthContent from "../auth/AuthContent";

function UserLoginIn() {
  const authCtx = useContext(UserDatas);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      // Alert.alert(error.message);
      console.log(error.message);
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
