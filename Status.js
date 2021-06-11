import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import styles from "./style";

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
