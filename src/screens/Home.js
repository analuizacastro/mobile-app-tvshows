// rnfe
import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Input from "../components/form/Input.js";

const HomeScreen = () => {
  [stateNome, setStateNome] = useState("");
  return (
    <View style={StyleSheet.viewStyle}>
      <Text>Olá, Mundo!</Text>
      <Input
        label="Nome"
        onChange={(text) => setStateNome(text)}
        initialValue={"Ana Luiza"}
      />
      <Input
        label="Telefone"
        onChange={(text) => setStateNome(text)}
        value={stateNome}
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
});
