import { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "./AuthForm";
import FlatButton from "../ui/FlatButton";

// two prop comes from userLoginIn isLogin and onAuthenticate
//onAuthenticate's function is in the UserLoginIn and it connects to the auth.js
function AuthContent({ isLogin, onAuthenticate }) {
  //we use navigation hook for the navigate between pages
  const navigation = useNavigation();

  // we create credentials and set them to false
  const [credentialsInvalid, setCredentialsInvalid] = useState({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  //this func. does switch berween loginin pages & signup pages thanks to button which is below
  function switchAuthModeHandler() {
    if (isLogin) {
      navigation.navigate("UserSignUp");
    } else {
      navigation.navigate("UserLoginIn");
    }
  }

  // credentials comes when authForm is submitted
  // (onSubmit) as a object
  function submitHandler(credentials) {
    // object destructuring
    let { email, confirmEmail, password, confirmPassword } = credentials;

    email = email.trim();
    password = password.trim();

    // credentials validity check
    const emailIsValid = email.includes("@");
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert("Invalid input", "Please check your entered credentials.");
      setCredentialsInvalid({
        // this sets credentials to original phazes
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    //takes onAuthenticate and now it returns these values to that func.
    onAuthenticate({ email, password });
  }

  return (
    <View style={styles.authContent}>
      <AuthForm
        // isLogin=true sended like this as a prop
        isLogin={isLogin}
        onSubmit={submitHandler}
        credentialsInvalid={credentialsInvalid}
      />
      <FlatButton onPress={switchAuthModeHandler}>
        {isLogin ? "Create a new user" : "Log in instead"}
      </FlatButton>
    </View>
  );
}

export default AuthContent;

const styles = StyleSheet.create({
  authContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },

  buttons: {
    marginTop: 8,
  },
});
