import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Templates from "./templates";
import styles from "./style";

export default function TemplateCard({
  navigation,
  title,
  text,
  temp,
  templates,
  updateTemplate,

}) {

  function handleDel() {
    const newTemplates = [];
    templates.forEach((element) => {
      if (element.title != title) newTemplates.push(element);
    });
    updateTemplate(newTemplates)
  }

  return (
    <View style={styles.templateItem}>
      <View style={styles.fl}>
        <Text style={styles.pointsm}>{title}</Text>

        <TouchableOpacity style={styles.btnsm}>
          <Text style={styles.btnTextsm}
          onPress={() => {
            handleDel();
            navigation.navigate("Newt", { text: text, title: title, templates: templates })
        }}
          >Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnsm}
          onPress={() => handleDel()}
           
        >
          <Text style={styles.btnTextsm}>Delete</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}