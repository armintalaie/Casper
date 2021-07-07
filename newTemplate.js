import React from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

import {styles} from "./style";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function NewTemplate({ navigation,route}) {
  const [body, updateText] = React.useState(route.params.text == undefined? "Reply body...": route.params.text);
  const [titleL, updateTitle] = React.useState(route.params.title == undefined? "Reply title...": route.params.title);

  const action = route.params.title == undefined? "Create": "Update";
  const prevTitle = route.params.title;

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
          navigation.navigate("Templates");
        }}
      >
        <Text style={styles.btnText}>{action} Template </Text>
       
      </TouchableOpacity>
</KeyboardAvoidingView>


    </SafeAreaView>
  );

  function add() {
    const newTemplates = [];
    route.params.templates.forEach((element) => {
      if (element.title != prevTitle) newTemplates.push(element);
    });
  
    newTemplates.push({title: titleL, body: body})

    storeData(newTemplates)
    
  }

  async function storeData(value) {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('templates', jsonValue)
    } catch (e) {
      // saving error
    }
  }
}
