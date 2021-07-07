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
import { GoogleSignin, tokens} from "./Landing";
import * as apiroute from "./apiroute.json"
const Stack = createStackNavigator();
import {getUser} from "./Landing";
import TemplateCard from "./templateCard";

const HomePage = ({ navigation, templates, route }) => {
  const [unread, setUnread] = useState(0);
  const [title, setTitle] = useState("");
  const [statusIsEnabled, setStatusIsEnabled] = useState(false);

  const [timeMessage, setTimeMessage] = useState("Morning")
  const [username, setUsername] = useState("")
  const [userEmail, setUserEmail] = useState("")
  const [responseBody, setResponseBody] = useState("");
  const [restrictToContacts, setRestrictToContacts]  = useState("");
  let tok;
  let touch = "";
  let start = "";



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
      console.warn("111");
      }
    ).catch(e => {
    })
 
  }

  async function setVacation(details) {
    const vac = {
      autoreply: details.autoreply,
      subject: details.subject,
      body: details.body,
      restrictToContacts: details.contacts
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

  async function getStatus() {
    fetch(apiroute.route + '/getStatus', {
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
    .then(rett => rett.json()).then(data =>
      {
        if (data.enableAutoReply == true) {
          setTitle(data.responseSubject);
          setRestrictToContacts(data.restrictToContacts == true? "Yes" : "No");
          setResponseBody(data.responseBodyPlainText);
        }
        setStatusIsEnabled(data.enableAutoReply)
    }
    )
  }


  useEffect(() => { 

    tok = tokens;
    getStatus();
    updateInbox();
    setUsername(getUser().displayName)
    setUserEmail(getUser().email)

  date = new Date();
  date = date.getHours();

  if (date > 12)
    if (date < 18)
      setTimeMessage("Afternoon")
    else
    setTimeMessage("Evening")
})
  

  if (statusIsEnabled) {
    touch = (
      <TouchableOpacity style={styles.disable} onPress={() => changeStatus()}>
        <Text style={styles.btnText}>Disable Status</Text>
      </TouchableOpacity>
    );
    start = ( <TemplateCard
  
      title={title}
      canBeEdited={false}
      text={responseBody}
      select={false}
    />);
   


  } else {
    touch = (
      <TouchableOpacity
        style={styles.statusBtn}
        onPress={() => navigation.navigate("Status", {changeStatus: changeStatus })}
      >
        <Text style={styles.btnText}>New Status</Text>
      </TouchableOpacity>

    );
    start = (<Text> </Text>);
  }


  function changeStatus(details) {
    if (statusIsEnabled == true) {
    //  updateInbox();
    fetch(apiroute.route + '/disableStatus', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({
         token: tok,
      })
    }).then(res => {
      getStatus();
    }).catch(e => {
      console.log(e);
      alert("fail")
    })
    } else {
      if (details != null) {
        setVacation(details);
        setTitle(details.subject);
       }
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.greeting}>Good {timeMessage}, {username}</Text>
      <View style={{width: "100%", justifyContent:"center", alignItems:"center"}}>
      <Text style={styles.glancetitle}>Your inbox at a glance</Text>
      <View style={styles.glance}>
      
        <View style={styles.containerstart}>
        <View
  style={{
    borderBottomColor: 'black',
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
      {touch}
    </SafeAreaView>
  );
};



export default function HomeScreen({ navigation, templates }) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"

        component={HomePage}
        options={{ headerShown: false }}/>
      <Stack.Screen
        name="Status"
        options={{ title: "New Status" }}>
      {props => <NewStatus {...props} />}
        </Stack.Screen>
    </Stack.Navigator>
  );

 
}

