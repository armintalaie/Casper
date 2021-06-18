import React, { Component, useState } from "react";
import {
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import TemplateCard from "./templateCard";
import SwitchSelector from "react-native-switch-selector";
import styles from "./style";



export default function NewStatus({ navigation, templates, route }) {
  const [selectedTitle, setSelect] = useState(null);
  const [selectedBody, setBody] = useState(null)
  const [reply, setreply] = useState(0);
  const [notif, setnotif] = useState(0);
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
    console.log(details)
    route.params.changeStatus(details);
    navigation.navigate("Home", {details});
    
  }

   showTemplates = (
      <View></View>

    );

  if (reply == true)
  showTemplates = (
    <ScrollView horizontal={true} style={styles.card}
    onScroll>
    {templates.map((t) => (
      <TouchableOpacity
        onPress={() => {setSelect(t.title)
          setBody(t.body)
         
        }}
      >
        <TemplateCard
          title={t.title}
          canBeEdited={false}
          text={t.body}
          select={
            t.title === selectedTitle? true:false
          }
        />
      </TouchableOpacity>
    ))}
  </ScrollView>

  );


  return (
    <SafeAreaView style={styles.container}>
      
      <View style={styles.containerstart}>
    
      <SwitchSelector
        style={styles.switch}
        buttonColor="#7a7672"
        options={options}
        initial={0}
        bold={true}
        fontSize={14}
        buttonMargin={2}
        height={40}
        animationDuration={200}
        textStyle={styles.text}
        selectedTextStyle={styles.textwhite}
        selectedColor="#ffffff"
        onPress={(value) => (setnotif(value))}
      />

      <SwitchSelector
        style={styles.switch}
        buttonColor="#7a7672"
        options={dnd}
        initial={0}
        bold={true}
        fontSize={14}
        buttonMargin={2}
        height={40}
        animationDuration={200}
        textStyle={styles.text}
        selectedTextStyle={styles.textwhite}
        selectedColor="#ffffff"
        onPress={(value) => (setreply(value))}
      />
      </View>
     
     {showTemplates}

      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => {
          if (reply == true && selectedTitle == null)
            alert("To send an auto reply, you need to select a template")
          else
            setNewStatus();
        }}
      >
        <Text style={styles.btnText}>Set Status </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}