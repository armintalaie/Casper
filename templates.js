import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";


import {styles} from "./style";


const Stack = createStackNavigator();
import AllTemplates from "./allTemplates";
import NewTemplate from "./newTemplate";

export default function Templates({ navigation, templates, updateTemplates }) {
 
  return (
    <Stack.Navigator
    >
      <Stack.Screen
        name="Templates"
        options={{ title: "Your Templates" }, { headerShown: false }}
        >
        {props => <AllTemplates {...props} />}

      </Stack.Screen>

      <Stack.Screen
        name="Newt"
        options={{ title: "New Template" }}
      >

{props => <NewTemplate {...props} templates={templates} updateTemplates={updateTemplates} />}
        </Stack.Screen>
     
    </Stack.Navigator>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}
