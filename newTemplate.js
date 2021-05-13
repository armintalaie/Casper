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

export default function NewTemplate({ navigation, title, text }) {
  return (
    <SafeAreaView>
      <View style={styles.templateItem}>
        <View style={styles.fl}>
          <Text style={styles.point}>Your Templates</Text>
        </View>
        <Text style={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non dolores
          quos laboriosam recusandae numquam, veniam minima tenetur adipisci
          quae impedit, quam error quidem sint consectetur ratione, nemo
          pariatur quia voluptas.
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          alert("aa");
        }}
      >
        <Text style={styles.point}>Create Template </Text>
      </TouchableOpacity>
    </SafeAreaView>
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
