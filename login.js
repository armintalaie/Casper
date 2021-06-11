import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from "./style";
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
        headerStyle: {
          backgroundColor: "#ffac1c",
        },
        headerTintColor: "white",
        headerBackTitle: "Back",
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

  return (
    <SafeAreaView style={styles.landing}>
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
        </TouchableOpacity>
        </View>
     

 <View style={styles.containerstart}>
        <Text style={styles.point}>
          After Signing out, if you have any active statuses, they will be removed and Casper will have no more access. You can always log back.
        </Text>

      
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
</View>
     


    </SafeAreaView>
  );


 
}


 /*
  function Settings() {

    const [data, setData] = React.useState("a");
    return (

     
      <SafeAreaView style={styles.container}>
        <TouchableOpacity
          style={styles.statusBtn}
          onPress={() => {
            fetch("http://localhost:3001/api/armin@ubc.ca")
            .then((res) => res.json())
            .then((data) => setData(data.message));
          }}
        >
          <Text style={styles.btnText}>Login With Gmail {data} </Text>
        </TouchableOpacity>

        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>


          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <GoogleSigninButton
                style={{width: 192, height: 48}}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={this._signIn}
              />
            </View>
            <View style={styles.buttonContainer}>
              {!loggedIn && <Text>You are currently logged out</Text>}
              {loggedIn && (
                <Button
                  onPress={this.signOut}
                  title="LogOut"
                  color="red"></Button>
              )}
            </View>
          </View>
        </ScrollView>

    
      </SafeAreaView>
    );

    function onPress() {
      alert("You tapped the button!");
    }
  }
*/
