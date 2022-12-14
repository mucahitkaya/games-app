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

function GameList({ navigation }) {
  // if we had send userName as prop we could take it like below
  // const userName = route.params.userName;
  const { users } = useContext(UserDatas);

  function pressHandler(id) {
    if (id === 1) {
      navigation.navigate("FindTwin");
    } else if (id === 2) {
      navigation.navigate("Todo");
    } else {
      navigation.navigate("EngWords");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <View style={styles.userImgContainer}>
          {/* <Image source={require("/assets.asdasd...")}/> */}
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText}>{users.userName}</Text>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userNameText}>{users.time}</Text>
        </View>
      </View>
      <View style={styles.gamesContainer}>
        <View>
          <Text style={styles.suggestText}>Lütfen bir oyun seçiniz</Text>
        </View>
        <Pressable onPress={() => pressHandler(1)}>
          <View style={styles.gameContainer}>
            <Text style={styles.gameText}>Find-Twin</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => pressHandler(2)}>
          <View style={styles.gameContainer}>
            <Text style={styles.gameText}>To-do's</Text>
          </View>
        </Pressable>
        <Pressable onPress={() => pressHandler(3)}>
          <View style={styles.gameContainer}>
            <Text style={styles.gameText}>EngWords</Text>
          </View>
        </Pressable>
        <Pressable>
          <View style={styles.gameContainer}>
            <Text style={styles.gameText}>Reflex Game</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
export default GameList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  userContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    position: "absolute",
    top: 60,
    left: 40,
  },
  userImgContainer: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: "#55BCF6",
  },
  userNameContainer: {
    marginLeft: 15,
  },
  userNameText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
  },
  gamesContainer: {
    alignItems: "center",
    marginHorizontal: 12,
  },
  suggestText: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 27,
  },
  gameContainer: {
    alignItems: "flex-start",
    justifyContent: "center",
    marginBottom: 27,
    paddingHorizontal: 41,
    width: 330,
    height: 50,
    borderRadius: 20,
    borderWidth: 1,
  },
  gameText: {
    fontSize: 20,
    fontWeight: "300",
    lineHeight: 24,
  },
  pressed: {
    backgroundColor: "#BBE7FF",
  },
});
