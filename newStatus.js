import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  GlobalFont,
} from "react-native";
import TemplateCard from "./templateCard";
import SwitchSelector from "react-native-switch-selector";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

function NewStatusScreen({ templates }) {
  const [selectedTitle, setSelect] = useState("");
  let notif = 0;
  let disturb = 0;
  const options = [
    { label: "no notification", value: "0" },
    { label: "Recieve notification", value: "1" },
  ];

  const dnd = [
    { label: "no auto-reply", value: "0" },
    { label: "Send auto-reply", value: "1" },
  ];

  function changeColor() {
    this.setState({ black: !this.state.black });
  }

  function setNewStatus() {
    alert(notif + "   " + disturb + "   " + selectedTitle);
  }
  return (
    <SafeAreaView style={styles.container}>
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
        onPress={(value) => notif = value}
      />

      <SwitchSelector
        style={styles.switch}
        buttonColor="#ebe9e8"
        options={dnd}
        initial={1}
        bold={true}
        fontSize={12}
        selectedColor="#000000"
        onPress={(value) => disturb = value}
      />

      <ScrollView horizontal={true} style={styles.card}>
        {templates.map((t) => (
          <TouchableOpacity
            onPress={() => setSelect(t.title)}
            style={t.title === selectedTitle ? styles.select : styles.unselect}
          >
            <TemplateCard
              title={t.title}
              text={t.body}
              onPress={() => setSelect(t.title)}
              style={
                t.title === selectedTitle ? styles.select : styles.unselect
              }
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setNewStatus();
        }}
      >
        <Text style={styles.point}>Set Status </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function NewStatus({ navigation, templates, stat, props }) {
  const [selectedTitle, setSelect] = useState("");
  let notif = 0;
  let disturb = 0;
  const options = [
    { label: "no notification", value: "0" },
    { label: "Recieve notification", value: "1" },
  ];

  const dnd = [
    { label: "no auto-reply", value: "0" },
    { label: "Send auto-reply", value: "1" },
  ];

  function changeColor() {
    this.setState({ black: !this.state.black });
  }

  function setNewStatus() {
    navigation.goBack()
    changeStatus();
    if (disturb == 1)
    alert(notif + "   " + disturb + "   " + selectedTitle);
    else
    alert(notif + "   " + disturb + "   " + selectedTitle);
  }
  return (
    <SafeAreaView style={styles.container}>
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
        onPress={(value) => (notif = value)}
      />

      <SwitchSelector
        style={styles.switch}
        buttonColor="#ebe9e8"
        options={dnd}
        initial={1}
        bold={true}
        fontSize={12}
        selectedColor="#000000"
        onPress={(value) => (disturb = value)}
      />

      <ScrollView horizontal={true} style={styles.card}>
        {templates.map((t) => (
          <TouchableOpacity
            onPress={() => setSelect(t.title)}
            style={t.title === selectedTitle ? styles.select : styles.unselect}
          >
            <TemplateCard
              title={t.title}
              text={t.body}
              onPress={() => setSelect(t.title)}
              style={
                t.title === selectedTitle ? styles.select : styles.unselect
              }
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setNewStatus();
        }}
      >
        <Text style={styles.point}>Set Status </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  select: {
    padding: 0,
    width: "auto",
    height: "auto",
    backgroundColor: "#f7ebdc",
  },
  unselect: {
    padding: 0,
    width: "auto",
    height: "auto",
  },
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

  btn: {
    padding: 2,
    position: "relative",
    bottom: 0,
    margin: 2,
    left: 0,
    borderRadius: 10,
    alignItems: "center",
  },
  btnText: {
    fontFamily: "Noteworthy",
    fontWeight: "bold",
    fontSize: 13,
    color: "red",
  },
});
