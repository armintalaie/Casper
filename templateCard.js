import React, { Component } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {styles} from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { storeTemplates } from "./templateHandler";
export default function TemplateCard({
  navigation,
  title,
  text,
  templates,
  select,
  canBeEdited

}) {
  async function storeData(value) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('templates', jsonValue)
    } catch (e) {
      // saving error
    }
  }

  const editable = canBeEdited != undefined? canBeEdited: true;
  const selecteds = select != undefined? select: false;

  function handleDel() {

    const newTemplates = [];
    templates.forEach((element) => {
      if (element.title != title) newTemplates.push(element);
    });
    storeTemplates(newTemplates)
  }
  editbar = (<View></View>);

  if (editable == true)
    editbar = (
    <View style={styles.editbar}> 
      <TouchableOpacity style={styles.btnsm}>
      <Text style={styles.edittext}
      onPress={() => {
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

}