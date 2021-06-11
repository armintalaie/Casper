import React, { Component, useState } from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import TemplateCard from "./templateCard";
import SwitchSelector from "react-native-switch-selector";
import styles from "./style";

function NewStatusScreen({ templates }) {
  const [selectedTitle, setSelect] = useState("");
  const [selectedBody, setBody] = useState("");
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

export default function NewStatus({ navigation, templates, route }) {
  const [selectedTitle, setSelect] = useState("");
  const [selectedBody, setBody] = useState("");
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
    details = {subject: selectedTitle, body:selectedBody ,autoreply: true}
    route.params.changeStatus(details);
    navigation.navigate("Home", {details});
    
    
    
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
            onPress={() => {setSelect(t.title)
              setBody(t.body)
            }}
            style={t.title === selectedTitle ? styles.select : styles.unselect}
          >
            <TemplateCard
              title={t.title}
              text={t.body}
             
              style={
                t.title === selectedTitle ? styles.select : styles.unselect
              }
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => {
          setNewStatus();
        }}
      >
        <Text style={styles.btnText}>Set Status </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}