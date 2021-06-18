import React, { useState, useEffect } from "react";
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Alert
} from "react-native";
import styles from "./style";
import auth from '@react-native-firebase/auth';

import * as apiroute from "./apiroute.json"

// Google Set up
import { GoogleSignin, GoogleSigninButton} from '@react-native-google-signin/google-signin';
import * as credentials from './credentials.json';
GoogleSignin.configure({
  webClientId: credentials.webClientId,
  scopes : credentials.scopes
});


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
       auth().signInWithCredential(googleCredential);
      
     //  onAuthStateChanged(auth().currentUser)  
    
    

     let tok = await GoogleSignin.getTokens();

     fetch(apiroute.route +  '/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/JSON'
       },
       body: JSON.stringify({
          token: tok
       })
     }).catch(e => {
       console.log(e);
     })
     navigation.replace("app");
    
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
      if (user) {
        navigation.replace("app");

      }
      return subscriber; //
    }, []);
  
    if (initializing) return null;
  
    if (!user) {
      return(
        <SafeAreaView style={styles.landing}>
              <Text style={styles.title}>Welcome To Casper</Text>
            <Text style={styles.point}>Reduce your head clutter by letting Casper automate your inbox.
            When you're ready to get strated, sign in with your Gmail account.</Text>
        <TouchableOpacity style={styles.statusBtn}
        onPress={() => onGoogleButtonPress()}>
            <Text style={styles.btnText}>
                Sign in with Google 
            </Text>
        </TouchableOpacity>
      </SafeAreaView>);
    } 

    
    return (
        <SafeAreaView style={styles.landing}>
           <TouchableOpacity style={styles.statusBtn}
        onPress={() => {
          GoogleSignin.revokeAccess();
          auth().signOut()
        }}>
            <Text style={styles.btnText}>
                Sign out 
            </Text>
        </TouchableOpacity>
        </SafeAreaView>
    );

}


export {auth, GoogleSignin};

export function getUser() {
 // console.log(auth().currentUser)
  return auth().currentUser;
}

export function signOutUser() {

}




// onPress={navigation.navigate('app')}>