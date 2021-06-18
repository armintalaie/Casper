import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Button
} from "react-native";

import styles from "./style";

export default function NewTemplate({ navigation,route, updateTemplates, templates }) {
  const [body, updateText] = React.useState(route.params.text == undefined? "Reply body...": route.params.text);
  const [titleL, updateTitle] = React.useState(route.params.title == undefined? "Reply title...": route.params.title);

  const action = route.params.title == undefined? "Create": "Update";
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.templateItem}>
      <TextInput style={styles.point}  maxLength={100} multiline={true}
      onChangeText={updateTitle}
      value = {titleL}
      ></TextInput>
        <View style={styles.fl}>
       
        </View>
        <TextInput style={styles.text}  maxLength={500} multiline={true}
          onChangeText={updateText}
          value = {body}>

        </TextInput>
        
      </View>

     
      <KeyboardAvoidingView
  behavior={'padding'}
  style={styles.container}>
 
 <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => {
          add();
          navigation.navigate("All");
        }}
      >
        <Text style={styles.btnText}>{action} Template </Text>
       
      </TouchableOpacity>
</KeyboardAvoidingView>


    </SafeAreaView>
  );

  function onPress() {
    alert("You tapped the button!");
  }

  function add() {
    const newTemplates = [];
    templates.forEach((element) => {
      if (element.title != titleL) newTemplates.push(element);
    });
    newTemplates.push({title: titleL, body: body})
    updateTemplates(newTemplates)
  }
}
