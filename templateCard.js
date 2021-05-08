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

export default function TemplateCard({ navigation }) {
  return (
    <View style={styles.templateItem}>
      <View style={styles.fl}>
        <Text style={styles.point}>Your Templates</Text>

        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Delete</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolores
        quos laboriosam recusandae numquam, veniam minima tenetur adipisci quae
        impedit, quam error quidem sint consectetur ratione, nemo pariatur quia
        voluptas.
      </Text>
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
