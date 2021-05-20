import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import TemplateCard from "./templateCard";
import styles from "./style";
export default function AllTemplates({
  navigation,
  templates,
  updateTemplates,
}) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {templates.map((e) => (
          <TemplateCard
            temp={e}
            title={e.title}
            text={e.body}
            templates={templates}
            updateTemplate={updateTemplates}
            navigation={navigation}
          />
        ))}
      </ScrollView>
      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => navigation.navigate("Newt", {title: 'ehbhbjb',templates: templates })}
      >
        <Text style={styles.btnText}>New Template </Text>
      </TouchableOpacity>

   
    </SafeAreaView>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}
