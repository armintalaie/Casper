import React, {useState, useEffect } from "react";
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import NewStatus from "./newStatus";
import {styles} from "./style";
import {tokens} from "./Landing";
import * as apiroute from "./apiroute.json"
const Stack = createStackNavigator();
import {getUser} from "./Landing";

const HomePage = ({ navigation, route }) => {
  const [unread, setUnread] = useState(0);
  const [title, setTitle] = useState("");
  const [statusIsEnabled, setStatusIsEnabled] = useState(false);

  const [timeMessage, setTimeMessage] = useState("Morning")
  const [username, setUsername] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [responseBody, setResponseBody] = useState("");
  const [restrictToContacts, setRestrictToContacts]  = useState("");
  let touch = "";
  let start = "";

  async function updateInbox() {
    let rett = await fetch(apiroute.route + '/getInboxStat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tokens,
      })
    })
    let data = await rett.json();
    setUnread(data.unread);
    console.log("Inbox Updated")
  }


  async function getStatus() {
    let rett = await fetch(apiroute.route + '/getStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tokens,
      })
    })
    let data = await rett.json();

    if (data.enableAutoReply == true) {
      setTitle(data.responseSubject);
      setRestrictToContacts(data.restrictToContacts == true? "Yes" : "No");
      setResponseBody(data.responseBodyPlainText);
    }

    if (data.enableAutoReply != statusIsEnabled)
    setStatusIsEnabled(data.enableAutoReply)
  }



  useEffect(() => { 

    date = new Date();
    date = date.getHours();
  
    if (date > 12)
      if (date < 18)
        setTimeMessage("Afternoon")
      else
      setTimeMessage("Evening")

     refreshData();
    
     console.log("effect")
 
}, [])

async function refreshData(){
  setUsername(getUser().displayName)
  setUserEmail(getUser().email)
  updateInbox();
  getStatus();
}
  

  if (statusIsEnabled) {
    touch = (
      <TouchableOpacity style={styles.disable} onPress={() => changeStatus()}>
        <Text style={styles.btnText}>Disable Status</Text>
      </TouchableOpacity>
    );
    start = ( <View style={styles.homeTemplate}>

      <Text style={styles.templateTitle}> {title} </Text>
      <ScrollView scrollToOverflowEnabled={true}>
        <Text style={styles.homeText}> {responseBody}</Text>
      </ScrollView>
    </View>);

  } else {
    touch = (
      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => navigation.navigate("Status", {changeStatus: changeStatus})}
      >
        <Text style={styles.btnText}>New Status</Text>
      </TouchableOpacity>

    );
    start = (<Text> </Text>);
  }

  async function changeStatus(details) {
 
    if (statusIsEnabled == true) {
      setStatusIsEnabled(false)
     let disable = await fetch(apiroute.route + '/disableStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tokens,
      })
    })
    console.log("Vacation disabled")
      getStatus();
    } else {
      if (details != null) {
        setTitle(details.subject);
        alert(title + " activated")
        getStatus();
       }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={{width: "100%", justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.title}>Dashboard</Text>
      <View style={{width: "100%", paddingTop: 40, justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.greeting}>Good {timeMessage}, {username}</Text>
      <View style={{width: "100%", justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.glancetitle}>Your inbox at a glance</Text>
      <View style={styles.glance}>
      
        <View style={styles.containerstart}>
        <View
  style={{
    borderBottomColor: '#ffffff',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5,
    paddingTop: 0,
    marginBottom: 15,
  }}>
     <Text style={styles.glpointh}>{userEmail}</Text>
     </View>
        <Text style={styles.glpointl}>
          <Text style={styles.orangeBold}>{unread}</Text> unread emails</Text>
        <Text style={styles.glpointl}>Vacation status is  
        <Text style={styles.orangeBold}> {statusIsEnabled? "active": "inactive"}</Text>
        </Text>
        
        </View>
      </View>
     
    {start}
    </View>
</View>
</View>
      {touch}
    </SafeAreaView>
  );
};



export default function HomeScreen({ navigation }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Dashboard"
        options={{ headerShown: false }}>
           {props => <HomePage {...props}/>}
          </Stack.Screen>
      <Stack.Screen
        name="Status"
        options={{ title: "New Status" }}>
      {props => <NewStatus {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );
}

