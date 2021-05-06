import { StatusBar } from "expo-status-bar";
import React from "react";
import Launch from "./Launch";
import Status from "./Status";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Status />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 20,
    paddingTop: 40,
    fontSize: 40,
    width: "100%",
    fontFamily: "Noteworthy",
    fontWeight: "bold",
  },
  container: {
    padding: "5%",
    width: "100%",
    height: "100%",
  },
  heading: {
    fontFamily: "Noteworthy",
    padding: 50,
    paddingTop: "50%",
    fontSize: 25,
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
