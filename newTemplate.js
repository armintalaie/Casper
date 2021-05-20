import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import styles from "./style";

export default function NewTemplate({ navigation, title, text, updateTemplates, templates }) {
  console.log("janjfnewkjnf\t" + title)
  const [body, updateText] = React.useState(text == undefined? "Reply body...": text);
  const [titleL, updateTitle] = React.useState(title == undefined? "Reply title...": title);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.templateItem}>
      <TextInput style={styles.point}  maxLength={50} multiline={true}
      onChangeText={updateTitle}
      value = {titleL}
      ></TextInput>
        <View style={styles.fl}>
       
        </View>
        <TextInput style={styles.text}  maxLength={250} multiline={true}
          onChangeText={updateText}
          value = {body}>

        </TextInput>
        
      </View>

      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => {
          alert("aa");
        }}

        onPress={() => {
          add();
          navigation.navigate("All");
        }}
      >
        <Text style={styles.btnText}>Create Template </Text>
       
      </TouchableOpacity>
    </SafeAreaView>
  );

  function onPress() {
    alert("You tapped the button!");
  }

  function add() {
    const newTemplates = [];
    templates.forEach((element) => {
      newTemplates.push(element);
    });
    newTemplates.push({title: titleL, body: body})
    updateTemplates(newTemplates)
  }
}
