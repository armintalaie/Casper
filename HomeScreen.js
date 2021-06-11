import React, {useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewStatus from "./newStatus";
import styles from "./style";
import {auth, GoogleSignin} from "./Landing";
import * as apiroute from "./apiroute.json"
const Stack = createStackNavigator();



const HomePage = ({ navigation, templates, route }) => {
  const [unread, setUnread] = useState(20);
  const [sent, setSent] = useState(5);
  const [recieved, setrecieved] = useState(10);
  const [title, setTitle] = useState("");
  const [statusIsEnabled, setStatusIsEnabled] = useState(false);
  let tok;

  let touch = "";

  async function updateInbox() {
    fetch(apiroute.route + '/getInboxStat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tok,
      })
    }).then(res => res.json()).then(
      data => {
        setUnread(data.unread);
      }
    )
 
  }

  async function setVacation(details) {
   // const d =  Date();
    const vac = {
      autoreply: details.autoreply,
      subject: details.subject,
      body: details.body,
    }

  
    fetch(apiroute.route + '/enableStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tok,
         details: vac
      })
    }).catch(e => {
      console.log(e);
    })
  }


  useEffect(() => {
    GoogleSignin.getTokens().then(res => {
      tok = res
      updateInbox();
    })
  
   
  
  })
 

  if (statusIsEnabled) {
    touch = (
      <TouchableOpacity style={styles.disable} onPress={() => changeStatus()}>
        <Text style={styles.btnText}>Disable Status - {title}</Text>
      </TouchableOpacity>
    );
  } else {
    touch = (
      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => navigation.navigate("Status", {changeStatus: changeStatus, templates: templates })}
      >
        <Text style={styles.btnText}>New Status</Text>
      </TouchableOpacity>
    );
  }

  function changeStatus(details) {
    if (statusIsEnabled == true) {
      updateInbox();
    fetch(apiroute.route + '/disableStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tok,
      })
    }).catch(e => {
      console.log(e);
    })
    }
    setStatusIsEnabled(!statusIsEnabled);
    if (details != null) {
     console.log(details.subject)
     setVacation(details);
     setTitle(details.subject);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.group}>
        <Text style={styles.heading}>Inbox Glance</Text>
        <View style={styles.containerstart}>
        <Text style={styles.point}>Unread Emails: {unread}</Text>
        <Text style={styles.point}>Emails recieved: {recieved}</Text>
        </View>
      </View>

      <View style={styles.containerstart}>
      <View style={styles.group}>
        <Text style={styles.heading}>Quick Set</Text>
        <Text style={styles.point}>Don't want to be notified?</Text>
       
        <TouchableOpacity style={styles.button}
          onPress={() => setVacation({subject: "hello", body: "ddd", autoreply: true})}>
          <Text style={styles.btnText}>Do not Disturb</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.group}>
        <Text style={styles.point}>No Notification with an auto-reply</Text>
        <TouchableOpacity style={styles.button}
         onPress={() => setVacation({subject: "hello", body: "ddd", autoreply: true})}>
          <Text style={styles.btnText}>Auto reply</Text>
        </TouchableOpacity>
      </View>
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

