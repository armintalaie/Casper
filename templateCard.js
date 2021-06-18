import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

export default function TemplateCard({
  navigation,
  title,
  text,
  templates,
  updateTemplate,
  select,
  canBeEdited

}) {

  
  const editable = canBeEdited != undefined? canBeEdited: true;
  const selecteds = select != undefined? select: false;

  function handleDel() {
    const newTemplates = [];
    templates.forEach((element) => {
      if (element.title != title) newTemplates.push(element);
    });
    updateTemplate(newTemplates)
  }
  editbar = (<View></View>);

  if (editable == true)
    editbar = (
    <View style={styles.editbar}> 
      <TouchableOpacity style={styles.btnsm}>
      <Text style={styles.edittext}
      onPress={() => {
        handleDel();
        navigation.navigate("Newt", { text: text, title: title, templates: templates })
    }}> Edit 
    </Text>

    </TouchableOpacity>

    <TouchableOpacity
      style={styles.btnsm}
      onPress={() => handleDel()}
    >
      <Text style={styles.edittext}> Delete </Text>
    </TouchableOpacity> 
    </View>);



  return (
    
    <View style={selecteds === false? styles.templateItem:styles.templateSelect}>
      <View style={styles.templateBody}>
      <View style={styles.fl}>
        <Text style={styles.templateTitle}>{title}</Text>
      </View>
      <Text style={styles.text}>{text}</Text>
      </View>
     {editbar}
    </View>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}