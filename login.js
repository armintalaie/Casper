import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
  Linking
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import {styles} from "./style";
import { View, Text, Alert } from 'react-native';
import {auth} from "./Landing";//'@react-native-firebase/auth';
import {getUser} from "./Landing";
import * as credentials from './credentials.json';
const Stack = createStackNavigator();

import { GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
  webClientId: credentials.webClientId,
  scopes : credentials.scopes
});


export default function Login({ navigation}) {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false
    }}
    >
      <Stack.Screen
        name="Settings"
        children={() => <GoogleSignIn  navigation={navigation} />}
      />
    </Stack.Navigator>
  );

    }
  
function GoogleSignIn({navigation}) {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  async function onGoogleButtonPress() {
    // Get the users ID token

  }

  

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);

  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return(
      <SafeAreaView>
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={() => onGoogleButtonPress()}
    />

    </SafeAreaView>);
  }

  donation = (
  <TouchableOpacity style={styles.statusBtn}
    onPress={() => {
     title = "Thank You " + getUser().displayName
     Alert.alert(
       title,

       "your donation helps us bring better features to Casper faster",
       [
         {
           text: "Not now",
           onPress: () => {console.log("Ask me later pressed")}
         },
         {
           text: "$5",
           onPress: () => {}
         },
         {
           text: "$10",
           onPress: () => {console.log("Ask me later pressed")}
         },
         {
           text: "$15",
           onPress: () => {console.log("Ask me later pressed")}
         }
         
       ]
     );
    }}>
     <Text style={styles.btnText}>
         Donate
     </Text>
   </TouchableOpacity>);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.containerstart}>
      <Text style={styles.heading}>{getUser().displayName}</Text>
      <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    marginLeft: 5,
    marginRight: 5
  }}>
     <Text style={styles.point}>{getUser().email}</Text>
     </View>
      </View>

      <View style={styles.containerstart}>

        <Text style={styles.point}>
          Thank you for supporting Casper!

        </Text>
        </View>
     

 <View style={styles.containerstart}>

      <TouchableOpacity style={styles.button}
      onPress={() => {

        Alert.alert(
          "Sign Out",
          "Are you sure you want to sign out?",
          [
            
            {
              text: "No",
              onPress: () => {console.log("Ask me later pressed")}
            },
            {
              text: "Yes",
              onPress: () => {navigation.replace("landing")
              //GoogleSignin.clearCachedAccessToken();
              alert("You are now signed out");
              auth().signOut().then(
              onAuthStateChanged(null)
            
            )}
            },

          ]
        );
       }}
      >
        <Text style={styles.btnText}>
          Sign Out
        </Text>
       
      </TouchableOpacity>
      <Text style={styles.pointxsm}>
          Signing out does not affect your current inbox status
        </Text>


</View>
     
<View style={styles.containerstart}>

<Text style={styles.pointxsm}>
          Want to reach out? Send an email to
        </Text>
        <TouchableOpacity onPress={() => Linking.openURL('mailto:doubleespressostudios@gmail.com') }
      title="Re:Casper Feedback">
          <Text style={styles.btnTextsm}>
       doubleespressostudios@gmail.com
        </Text>
        </TouchableOpacity>
        </View>
     

    </SafeAreaView>
  );


 
}

