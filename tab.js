import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import NewStatus from "./newStatus";
import Templates from "./templates";

const Tab = createBottomTabNavigator();

export default function Tabl() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={HomeScreen} />
        <Tab.Screen name="New Status" component={NewStatus} />
        <Tab.Screen name="Templates" component={Templates} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
