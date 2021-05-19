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
import Templates from "./templates";

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
        <Text style={styles.point}>{title}</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}
          onPress={() => {
            console.log("ttt\t" + title)
            navigation.navigate("Newt", { text: "text", title: title, templates: templates })
        }}
          >Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => handleDel()}
           
        >
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>{text}</Text>
    </View>
  );

  function onPress() {
    alert("You tapped the button!");
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
    width: "90%",
    maxWidth: 350,
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
});
