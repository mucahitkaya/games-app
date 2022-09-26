import { View, Text, StyleSheet } from "react-native";

function Task(props) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.usernameContainer}>
        <Text style={styles.inputBox}>{props.todo}</Text>
      </View>
    </View>
  );
}
export default Task;

const styles = StyleSheet.create({
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 10,
  },
  usernameContainer: {
    alignItems: "center",
    marginBottom: 15,
  },

  inputBox: {
    width: 210,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#000000",
    textAlign: "center",
    fontSize: 14,
    fontWeight: "400",
  },
});
