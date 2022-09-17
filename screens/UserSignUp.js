import { useState } from "react";
import AuthContent from "../auth/AuthContent";
import Loading from "../components/Loading";
import { createUser } from "../util/auth";

function UserSignUp() {
  const [isAuthenticating, setısAuthenticating] = useState(false);

  async function submitHandler({ email, password }) {
    setısAuthenticating(true);
    await createUser(email, password);
    setısAuthenticating(false);
  }

  if (isAuthenticating) {
    return <Loading message="aaaaaaa aaa aaa" />;
  }
  return <AuthContent onAuthenticate={submitHandler} />;
}

export default UserSignUp;
