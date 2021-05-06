import React, { Component } from "react";
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

export default function launch() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>
        Get your headspace back one email at a time
      </Text>
    </SafeAreaView>
  );

  function onPress() {
    alert("You tapped the button!");
  }
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
