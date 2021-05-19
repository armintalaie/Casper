import React, { Component, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewStatus from "./newStatus";

const Stack = createStackNavigator();
const HomePage = ({ navigation, templates }) => {
  const [unread, setUnread] = useState(20);
  const [sent, setSent] = useState(5);
  const [recieved, setrecieved] = useState(10);
  const [statusIsEnabled, setStatusIsEnabled] = useState(false);
  let button = "";
  let touch = "";
  if (statusIsEnabled) {
    touch = (
      <TouchableOpacity style={styles.disable} onPress={() => changeStatus()}>
        <Text style={styles.btnText}>Disable Status</Text>
      </TouchableOpacity>
    );
  } else {
    touch = (
      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => navigation.navigate("Status", { stat: changeStatus, templates: templates })}
      >
        <Text style={styles.btnText}>New Status</Text>
      </TouchableOpacity>
    );
  }



  function changeStatus() {
    if (statusIsEnabled == true) {
      setUnread(0);
      setSent(0);
      setrecieved(0);
    }
    setStatusIsEnabled(!statusIsEnabled);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.heading}>Quick Glance</Text>
        <Text style={styles.point}>Unread Emails: {unread}</Text>
        <Text style={styles.point}>Emails sent: {sent}</Text>
        <Text style={styles.point}>Emails recieved: {recieved}</Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.heading}>Quick Set</Text>
        <Text style={styles.point}>Don't want to be notified?</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Do not Disturb for 1 hour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Do not Disturb</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.group}>
        <Text style={styles.point}>No Notification with an auto-reply</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Auto reply for 1 hour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.btnText}>Auto reply</Text>
        </TouchableOpacity>
      </View>

      {touch}
    </SafeAreaView>
  );
};

export default function HomeScreen({ navigation, templates }) {
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
        name="Home"
        component={HomePage}
        options={{ title: "Dashboard" }}
      />
      <Stack.Screen
        name="Status"
        options={{ title: "New Status" }}
      >

      {props => <NewStatus {...props} templates={templates}  />}
        </Stack.Screen>
    </Stack.Navigator>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}

const styles = StyleSheet.create({
  disable: {
    backgroundColor: "red",
    width: "90%",
    left: 0,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,

    padding: 10,
    marginBottom: 10,
  },
  group: {
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 10,
    paddingHorizontal: 10,
    width: "100%",
    textAlign: "center",
  },
  title: {
    fontSize: 30,
    textAlign: "center",
    width: "100%",
    fontFamily: "Noteworthy",
    fontWeight: "bold",
  },
  point: {
    fontFamily: "Noteworthy",
    fontSize: 17,
    textAlign: "left",
    width: "100%",
  },
  container: {
    padding: "5%",
    width: "100%",
    height: "100%",
    flexDirection: "column",
    fontFamily: "Noteworthy",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusBtn: {
    width: "90%",
    left: 0,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
    backgroundColor: "#ffac1c",
    padding: 10,
    marginBottom: 10,
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
    width: 250,

    paddingHorizontal: 1,
    margin: 5,
  },
  optiontext: {
    color: "#ffffff",
    fontFamily: "Noteworthy",
    fontSize: 20,
  },
  button: {
    backgroundColor: "#7a7672",
    padding: 10,
    position: "relative",
    bottom: 0,
    margin: 5,
    width: 250,
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
