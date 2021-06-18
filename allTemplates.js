import React from "react";
import {
  Text,
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

  let count = 1;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Templates</Text>
      <ScrollView contentContainerStyle={styles.templateCards}>
        {templates.map((e) => (
          <TemplateCard
            key={count++}
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
        onPress={() => navigation.navigate("Newt", {templates: templates })}
      >
        <Text style={styles.btnText}>New Template </Text>
      </TouchableOpacity>

   
    </SafeAreaView>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}
