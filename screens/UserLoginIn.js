import { useContext, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { UserDatas } from "../context/userData";
import Loading from "../components/Loading";
import { login } from "../util/auth";
import AuthContent from "../auth/AuthContent";

function UserLoginIn() {
  //Getting global datas from context
  const authCtx = useContext(UserDatas);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  //Login handling async
  //email&password depends on the onAuthenticate(they comes from there)
  async function loginHandler({ email, password }) {
    setIsAuthenticating(true);

    try {
      //Login imported from auth &
      //does send email&passwpord data to function which is in the auth file
      //and waits for token that returns
      const token = await login(email, password);

      //When the token came we saved it via state in userData file
      authCtx.authenticate(token);
    } catch (error) {
      // Alert.alert(error.message);
      console.log(error.message);
    }
    setIsAuthenticating(false);
  }

  //if authenticating process will takes while then this component will be
  // rendered till authenticate is done
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
