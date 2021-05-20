import React, { Component, useState } from "react";
import {
  Text,
  View,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./style";


const Stack = createStackNavigator();
export default function Login({ navigation }) {
  const [text, setText] = useState("");

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
        name="Settings"
        children={() => <Settings navigation={navigation} />}
      />
    </Stack.Navigator>
  );

  function Settings() {
    return (
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.statusBtn}
          onPress={() => {
            alert("aa");
          }}
        >
          <Text style={styles.btnText}>Login With Gmail </Text>
        </TouchableOpacity>

        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={(text) => setText(text)}
          defaultValue={text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {text
            .split(" ")
            .map((word) => word)
            .join(" ")}
        </Text>
      </SafeAreaView>
    );
  }

  function onPress() {
    alert("You tapped the button!");
  }
}
