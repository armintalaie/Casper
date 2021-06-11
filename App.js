import "react-native-gesture-handler";
import React from "react";
//import gmailApi from 'react-gmail'
import { useState, useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Landing from "./Landing";
import { createStackNavigator } from "@react-navigation/stack";
import Appcore from "./appcore";
const Stack = createStackNavigator();

export default function App() {


  const [signedin, setSignedin] = useState(false);



  function updatedSingedUser(status) {
    setSignedin(status);
    
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={signedin == true? "app":"landing"}
       screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen
        name="landing">
        {props => <Landing {...props}  setSignedin={updatedSingedUser} />}
        </Stack.Screen>
     
        <Stack.Screen
        name="app"
        >
        {props => <Appcore {...props}  setSignedin={(status) => setSignedin(status)} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );


}



