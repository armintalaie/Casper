import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert,
  View
} from "react-native";
import {styles} from "./style";
import auth from '@react-native-firebase/auth';
// Google Set up
import { GoogleSignin} from '@react-native-google-signin/google-signin';
import * as credentials from './credentials.json';
GoogleSignin.configure({
  webClientId: credentials.webClientId,
  scopes : credentials.scopes
});

let tokens = "";

  export default function Landing({navigation, route, setSignedin}) {

    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null);
  
    async function onGoogleButtonPress() {
      // Get the users ID token
      try{
    const { idToken } = await GoogleSignin.signIn();

      // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Sign-in the user with the credential
      auth().signInWithCredential(googleCredential).then(res => {

      GoogleSignin.getTokens().then(result => {
              tokens = result
              onAuthStateChanged(auth().currentUser)  
              navigation.replace("app");
          })
    
      });
    
      } catch(e) {
          Alert.alert(
            "Oh oh :(",
            "Sign in Failed. Please try again",
            [
              {
                text: "Ok",
                onPress: () => console.log("Ask me later pressed")
              }
            ]
          );
      }
    }
    // Handle user state changes
    function onAuthStateChanged(user) {
      setUser(user);
      if (initializing) setInitializing(false);
    }
  
    useEffect(() => {
      const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
       //unsubscribe on unmount
      if (user)
      {
          GoogleSignin.getTokens().then(res => {
            tokens = res;
            navigation.replace("app");
          })
      
      }
      return subscriber; //
    }, []);
  
    if (initializing) return null;

      return(
        <SafeAreaView style={styles.landing}>
              <Text style={styles.title}>Welcome To Casper</Text>
              <View style={styles.containerstart}>
            <Text style={styles.pointBig}>Reduce your head clutter by letting Casper automate your inbox.
            When you're ready to get strated, sign in with your Gmail account.</Text>
            </View>
        <TouchableOpacity style={styles.statusBtn}
        onPress={() => onGoogleButtonPress()}>
            <Text style={styles.btnText}>
                Sign in with Google 
            </Text>
        </TouchableOpacity>
      </SafeAreaView>);
}

export {auth, GoogleSignin, tokens};

export function getUser() {
 // console.log(auth().currentUser)
  return auth().currentUser;
}