import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Pressable,
} from "react-native";
// import {
//   Montserrat_300Light,
//   Montserrat_400Regular,
//   Montserrat_500Medium,
//   Montserrat_600SemiBold,
//   Montserrat_700Bold,
// } from "@expo-google-fonts/montserrat";
import { Acme_400Regular } from "@expo-google-fonts/acme";
import { useFonts } from "expo-font";
import { AppLoading } from "expo-app-loading";

function UserLogin(params) {
  let [fontsLoaded] = useFonts({
    Acme_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.greetingsContainer}>
        <Text style={styles.greetingsText}>Hoşgeldiniz</Text>
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.usernameContainer}>
          <Text style={styles.inputLabel}>Username:</Text>
          <TouchableOpacity>
            <TextInput
              style={styles.inputBox}
              placeholder={"Type your username.."}
            ></TextInput>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.denem}>
        <Pressable>
          <View style={styles.loginButton}>
            <Text style={styles.inputLabel}>LOGİN</Text>
          </View>
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
  greetingsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: " Acme_400Regular ",
  },
  greetingsText: {},
});
