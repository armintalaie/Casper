import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  GlobalFont,
} from "react-native";

export default function Status() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Not Active</Text>
      <View style={styles.group}>
        <Text style={styles.heading}>Quick Glance</Text>
        <Text style={styles.point}>Unread Emails</Text>
        <Text style={styles.point}>Emails sent today</Text>
        <Text style={styles.point}>Emails recieved today</Text>
      </View>

      <View style={styles.group}>
        <Text style={styles.heading}>Quick Set</Text>
        <Text style={styles.point}>Don't want to be notified?</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optiontext}>Do not Disturb for 1 hour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optiontext}>Do not Disturb</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.group}>
        <Text style={styles.point}>No Notification with an auto-reply</Text>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optiontext}>Do not Disturb for 1 hour</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optiontext}>Do not Disturb</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  function onPress() {
    alert("You tapped the button!");
  }
}

const styles = StyleSheet.create({
  group: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingTop: 40,
    width: "100%",
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
  container: {
    padding: "5%",
    width: "100%",
    height: "100%",
    fontFamily: "Noteworthy",
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
