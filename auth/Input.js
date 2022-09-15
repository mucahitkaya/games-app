import { View, Text, StyleSheet, TextInput } from "react-native";

function Input({
  label,
  keyboardType,
  secure,
  onUpdateValue,
  value,
  isInvalid,
}) {
  return (
    <View style={styles.inputContainer}>
      <View style={styles.usernameContainer}>
        <Text style={[styles.inputLabel, isInvalid && styles.inputInvalid]}>
          {label}:
        </Text>
        <TextInput
          style={[styles.inputBox, isInvalid && styles.inputInvalid]}
          autoCapitalize={false}
          secureTextEntry={secure}
          onChangeText={onUpdateValue}
          keyboardType={keyboardType}
          value={value}
          placeholder={`Type your ${label}..`}
        ></TextInput>
      </View>
    </View>
  );
}
export default Input;

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
  inputLabel: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 10,
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
  inputInvalid: {
    borderColor: "#B91010",
    color: "#B91010",
  },
});
