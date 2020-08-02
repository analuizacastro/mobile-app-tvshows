import React, { useState } from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";

const Input = (props) => {
  const [stateValor, setStateValor] = useState(props.initialValue);

  const onChange = (text) => {
    setStateValor(text);
    props.onChange(text);
  };

  return (
    <View>
      <Text>{props.label}</Text>
      <TextInput
        style={styles.textInputStyle}
        value={stateValor}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInputStyle: {
    backgroundColor: "#d1cdcd",
  },
});
