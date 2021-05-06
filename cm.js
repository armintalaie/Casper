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

function MyText(props) {
  return <Text style={[styles.Text]}> {props.children} </Text>;
}

const styles = StyleSheet.create({
  Text: {
    fontFamily: "Noteworthy",
  },
  container: {
    fontFamily: "Arial",
    backgroundColor: "#ffac1c",
    color: "red",
    fontWeight: "bold",
    padding: "5%",
    width: "100%",
    height: "100%",
  },
  heading: {
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
  },
  btnText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#ffffff",
  },
  bigBlue: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 50,
  },
  red: {
    color: "red",
  },
});

export default MyText;
