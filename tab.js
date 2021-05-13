import "react-native-gesture-handler";
import React, { Component } from "react";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NewStatus from "./newStatus";
import Templates from "./templates";
import Login from "./login";
import AllTemplates from "./allTemplates";
import { MaterialCommunityIcons } from "react-native-vector-icons";

const Tab = createBottomTabNavigator();

export default function Tabl() {
  const [templatese, setTemplates] = useState([
    {
      title: "Vacation",
      body:
        "Hi\nThank you for your email. I will be out of the office from July 1, and will not have access to email If this is urgent please contact John at John@Capser.com. I will do my best to respond promptly to your email when I return on July 30.\n\nSincerely,\nKarla",
    },

    {
      title: "Meeting",
      body:
        "Hi\nI'm currently in a meeting for the time being. I will get back to shortly.\n\nSincerely,\nKarla",
    },
  ]);

  const updateTemplates = (updated) => {
    setTemplates(updated);
  };
  console.log(templatese);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Dashboard"
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
          children={() => <HomeScreen templates={templatese} />}
        />

        <Tab.Screen
          name="Templates"
          options={{
            tabBarLabel: "Templates",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark"
                color={color}
                size={size}
              />
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
          component={Login}
          options={{
            tabBarLabel: "Templates",
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
