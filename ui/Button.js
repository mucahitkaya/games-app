import { View, Text, StyleSheet, Pressable } from "react-native";

function Button({ children, onPress }) {
  return (
    <View style={styles.loginContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [styles.loginButton, styles.pressed] : [styles.loginButton]
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default Button;

const styles = StyleSheet.create({
  loginContainer: {
    alignItems: "center",
  },
  loginButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 50,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#BBE7FF",
    elevation: 5,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.6,
  },
});
