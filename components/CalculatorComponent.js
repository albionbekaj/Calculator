import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Row from "./Row";
import Button from "./Button";

export default CalculatorComponent = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonPress = (value) => {
    if (value === "back") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
      setResult("");
    }
  };

  const handleEqualPress = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult.toString());
      setInput(calculatedResult.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  const handleClearPress = () => {
    setInput("");
    setResult("");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.value}>{result !== "" ? result : input}</Text>
      <View>
        <Row>
          <Button text="C" onPress={() => handleClearPress()} />
          <Button text="+/-" onPress={() => console.log("+/-")} />
          <Button text="%" onPress={() => console.log("%")} />
          <Button text="/" onPress={() => handleButtonPress("/")} />
        </Row>
        <Row>
          <Button text="7" onPress={() => handleButtonPress("7")} />
          <Button text="8" onPress={() => handleButtonPress("8")} />
          <Button text="9" onPress={() => handleButtonPress("9")} />
          <Button text="x" onPress={() => handleButtonPress("*")} />
        </Row>
        <Row>
          <Button text="4" onPress={() => handleButtonPress("4")} />
          <Button text="5" onPress={() => handleButtonPress("5")} />
          <Button text="6" onPress={() => handleButtonPress("6")} />
          <Button text="-" onPress={() => handleButtonPress("-")} />
        </Row>
        <Row>
          <Button text="1" onPress={() => handleButtonPress("1")} />
          <Button text="2" onPress={() => handleButtonPress("2")} />
          <Button text="3" onPress={() => handleButtonPress("3")} />
          <Button text="+" onPress={() => handleButtonPress("+")} />
        </Row>
        <Row>
          <Button text="0" onPress={() => handleButtonPress("0")} />
          <Button text="." onPress={() => handleButtonPress(".")} />
          <Button text="🔙" onPress={() => handleButtonPress("back")} />
          <Button text="=" onPress={() => handleEqualPress()} />
        </Row>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#202020",
    justifyContent: "flex-end",
    padding: 10,
  },
  value: {
    color: "white",
    fontSize: 60,
    textAlign: "right",
    margin: 15,
  },
});
