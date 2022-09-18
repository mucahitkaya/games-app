import { useContext, useState } from "react";
import { Alert } from "react-native";
import AuthContent from "../auth/AuthContent";
import Loading from "../components/Loading";
import { createUser } from "../util/auth";

function UserSignUp() {
  const authCtx = useContext(UserDatas);

  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function submitHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await createUser(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      Alert.alert("Dudueee cmoon", "Try Again!!!!");
    }
    setIsAuthenticating(false);
  }

  if (isAuthenticating) {
    return <Loading message="aaaaaaa aaa aaa" />;
  }
  // there is a function in AuthContent so we bind this submit handler with onauthenticate
  return <AuthContent onAuthenticate={submitHandler} />;
}

export default UserSignUp;
