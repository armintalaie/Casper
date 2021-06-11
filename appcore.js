import "react-native-gesture-handler";
import React from "react";
//import gmailApi from 'react-gmail'
import { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Templates from "./templates";
import Login from "./login";
import {auth} from "./Landing";
import { MaterialCommunityIcons } from "react-native-vector-icons";
const Tab = createBottomTabNavigator();


export default function Appcore({navigation, route}) {
    try{
     
     
    }catch(e) {
      console.log(e)
    }
    let signedin = true;
    const [templatese, setTemplates] = useState([
      {
        title: "Vacation",
        body:
          "Hi,\nThank you for your email. I will be out of the office from June 9, and will not have access to email If this is urgent please contact John at John@Capser.com. I will do my best to respond promptly to your email when I return on July 30.\n\nSincerely,\nArmin",
      },
  
      {
        title: "Meeting",
        body:
          "Hi\nI'm currently in a meeting for the time being. I will get back to shortly.\n\nSincerely,\nKarla",
      },
    ]);
  
    function updateTemplates(updated)  {
      setTemplates(updated);
    };


return(
    <Tab.Navigator>
    <Tab.Screen
        name="Dashboard"
        options={{
          tabBarLabel: "Home",
          /*tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),*/
        }}
        children={() => <HomeScreen templates={templatese} />}
      />
    <Tab.Screen
        name="Templates"
        options={{
          tabBarLabel: "Templates",
         /* tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="bookmark"
              color={color}
              size={size}
            />
          ),*/
        }}
        children={() => (
          <Templates
            templates={templatese}
            updateTemplates={updateTemplates}
          />
        )}
      />
     
      <Tab.Screen
        name="Settings"
        children={() => <Login navigation={navigation} />}
        options={{
          tabBarLabel: "Settings",
         /* tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cog" color={color} size={size} />
          ),*/
        }}
      />
    </Tab.Navigator>);
}

