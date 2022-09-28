import { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Item from "../components/Item";
import { UserDatas } from "../context/userData";
import { fetchWords, storeWordsList } from "../util/http";

export default function EngWords() {
  const newWord = useContext(UserDatas);
  const [word, setWord] = useState("");
  const [wordsList, setWordsList] = useState({});
  const [showWords, setShowWords] = useState(false);

  function wordAdd() {
    Keyboard.dismiss();
    setWordsList((currentList) => {
      return {
        ...currentList,
        word: word,
        date: new Date(),
      };
    });
    // setWordsList([...wordsList, word]);
    storeWordsList(wordsList);
  }

  function deleteWords(index) {
    let wordsCopy = [...wordsList];
    wordsCopy.splice(index, 1);
    setWordsList(wordsCopy);
  }

  function showEngWords() {
    setShowWords(!showWords);
    fetchWords();
  }
  const obj = { 1: "yeter", 2: "yaaa", 3: "asdasd" };
  let newArray = [];
  for (let element in obj) {
    console.log(obj[element]);
  }

  return (
    <View>
      <View>
        {/* {showWords &&
          wordsList.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={(index) => deleteWords(index)}
              >
                <Item item={item} />
              </TouchableOpacity>
            );
          })} */}
      </View>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={styles.writeTaskWrapper}
        >
          <TextInput
            style={styles.inputBox}
            placeholder={"Add new new Word"}
            value={word}
            onChangeText={(text) => setWord(text)}
          ></TextInput>
          <TouchableOpacity onPress={() => wordAdd()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => showEngWords()}>
            <View style={styles.addWrapper}>
              <Text style={styles.addText}>S</Text>
            </View>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  writeTaskWrapper: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  inputBox: {
    width: 240,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
    color: "#2e7676",
  },
  addWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "black",
    textAlign: "center",
  },
  addText: { fontSize: 28 },
});
