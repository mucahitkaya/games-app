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
    marginBottom: 10,
  },
  usernameContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    paddingLeft: 16,
    width: 345,
    height: 35,
    borderWidth: 1,
    borderRadius: 15,
  },
  inputBox: {
    color: "#2F7676",
    fontSize: 24,
    fontWeight: "400",
  },
});
