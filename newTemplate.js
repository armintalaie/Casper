import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

export default function NewTemplate({ navigation, title, text, updateTemplates, templates }) {
  console.log("janjfnewkjnf\t" + title)
  const [body, updateText] = React.useState(text == undefined? "Reply body...": text);
  const [titleL, updateTitle] = React.useState(title == undefined? "Reply title...": title);


  return (
    <SafeAreaView>
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
        style={styles.button}
        onPress={() => {
          alert("aa");
        }}

        onPress={() => {
          add();
          navigation.navigate("All");
        }}
      >
        <Text style={styles.point}>Create Template </Text>
       
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

const styles = StyleSheet.create({
  templateItem: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 5,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    flexDirection: "column",
  },

  fl: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingBottom: 20,
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

  text: { fontFamily: "Noteworthy" },

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
});
