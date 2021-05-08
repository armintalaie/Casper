import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  GlobalFont,
} from "react-native";
import TemplateCard from "./templateCard";
import SwitchSelector from "react-native-switch-selector";

export default function NewStatus({ navigation }) {
  const options = [
    { label: "no notification", value: "1" },
    { label: "Recieve notification", value: "1.5" },
  ];

  const dnd = [
    { label: "no auto-reply", value: "1" },
    { label: "Send auto-reply", value: "1.5" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>New Status</Text>

      <View style={styles.group}>
        <Text style={styles.point}></Text>
      </View>

      <SwitchSelector
        style={styles.switch}
        buttonColor="#ebe9e8"
        borderRadius={15}
        options={options}
        initial={1}
        bold={true}
        selectedColor="#000000"
        fontSize={12}
        borderColor="#000000"
        borderWidth={3}
        onPress={(value) => console.log(`Call onPress with value: ${value}`)}
      />

      <SwitchSelector
        style={styles.switch}
        buttonColor="#ebe9e8"
        options={dnd}
        initial={1}
        bold={true}
        fontSize={12}
        selectedColor="#000000"
        onPress={(value) => console.log(`Call onPress with value: ${value}`)}
      />

      <TemplateCard />
    </SafeAreaView>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}

const styles = StyleSheet.create({
  switch: {
    margin: 40,
    marginBottom: 20,
    borderColor: "#ffac1c",
    borderWidth: 1,
    borderRadius: 15,
  },

  group: {
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40,
    width: "100%",
  },
  title: {
    fontSize: 40,
    width: "100%",
    fontFamily: "Noteworthy",
    fontWeight: "bold",
  },
  point: {
    fontFamily: "Noteworthy",
    fontSize: 17,
  },
  container: {
    padding: "5%",
    width: "100%",
    height: "100%",
    fontFamily: "Noteworthy",
  },
  heading: {
    fontFamily: "Noteworthy",
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  option: {
    backgroundColor: "#ffac1c",
    alignItems: "center",
    borderRadius: 15,
    padding: 1,
    width: "80%",
    paddingHorizontal: 1,
    margin: 2,
  },
  optiontext: {
    color: "#ffffff",
    fontFamily: "Noteworthy",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#ffac1c",
    padding: 10,
    position: "relative",
    bottom: 0,
    margin: 40,
    left: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Noteworthy",
    fontWeight: "bold",
    fontSize: 18,

    color: "#ffffff",
  },
});
