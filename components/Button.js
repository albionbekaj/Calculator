import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default ({ onPress, text }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#666666",
    flex: 1,
    height: 55,
    width: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 5,
  },
  text: {
    color: "#fff",
    fontSize: 24,
  },
});
