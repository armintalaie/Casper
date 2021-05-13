import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  TouchableOpacity,
  GlobalFont,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
import AllTemplates from "./allTemplates";
import NewTemplate from "./newTemplate";

export default function Templates({ navigation, templates, updateTemplates }) {
  console.log(typeof navigation + " ksnlkemlgmrenlkmgelkmrelkemelkrm");
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#ffac1c",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
      }}
    >
      <Stack.Screen
        name="All"
        children={() => (
          <AllTemplates
            templates={templates}
            navigation={navigation}
            updateTemplates={updateTemplates}
          />
        )}
        options={{ title: "Your Templates" }}
      />
      <Stack.Screen
        name="New"
        component={NewTemplate}
        options={{ title: "New" }}
      />
    </Stack.Navigator>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}

const styles = StyleSheet.create({
  templateItem: {
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    paddingHorizontal: 20,
    paddingTop: 40,
    margin: 20,
  },
  group: {
    flex: 1,
    width: "100%",
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 40,
    width: "100%",
    fontFamily: "Noteworthy",
    fontWeight: "bold",
    padding: 10,
  },
  point: {
    fontFamily: "Noteworthy",
    fontSize: 17,
  },
  container: {
    width: "100%",
    height: "100%",
    fontFamily: "Noteworthy",
    padding: 10,
  },
  heading: {
    fontFamily: "Noteworthy",
    paddingBottom: 10,
    fontSize: 25,
    fontWeight: "bold",
  },
  option: {
    backgroundColor: "#ffac1c",
    alignItems: "center",
    borderRadius: 15,
    padding: 1,
    width: "80%",
    paddingHorizontal: 1,
    margin: 2,
  },
  optiontext: {
    color: "#ffffff",
    fontFamily: "Noteworthy",
    fontSize: 20,
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
  btnText: {
    fontFamily: "Noteworthy",
    fontWeight: "bold",
    fontSize: 18,

    color: "#ffffff",
  },
});
