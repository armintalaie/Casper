import "react-native-gesture-handler";
import React from "react";
//import gmailApi from 'react-gmail'
import { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Templates from "./templates";
import Login from "./login";
import { TEST } from "./style";
const Tab = createBottomTabNavigator();
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
savedTemplates = [];


export default function Appcore({navigation, route}) {
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

    // stickee-text

return(
    <Tab.Navigator
    tabBarOptions={{
      activeTintColor: TEST,
    }}>
    <Tab.Screen
    
        name="Dashboard"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
             <Icon name="email"  color={color} size={size} style={{ textAlign: 'center' }}> </Icon>
          ),
        }}
        children={() => <HomeScreen templates={templatese} />}

        
      />
    <Tab.Screen
        name="Templates"
        options={{
          tabBarLabel: "Templates",
          tabBarIcon: ({ color, size }) => (
            <Icon name="bookmark-multiple" color={color} size={size} style={{ textAlign: 'center' }}> </Icon>
            
         ),
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
          tabBarIcon: ({ color, size }) => (
            <Icon name="dots-horizontal" color={color} size={size} style={{ textAlign: 'center' }}> </Icon>
         ),
         
        }}
      />
    </Tab.Navigator>);
}
