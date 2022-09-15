import { View, Text, StyleSheet } from "react-native";
import AuthForm from "../auth/AuthForm";

function UserLoginIn({}) {
  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingsText}>Hoşgeldiniz</Text>
      </View>
      <AuthForm isLogin />
    </View>
  );
}
export default UserLoginIn;

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