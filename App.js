import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import ScanScreen from "./screens/ScanScreen";
import CartScreen from "./screens/CartScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right"
        }}
      >

        <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        />

        <Stack.Screen 
        name="Scan" 
        component={ScanScreen} 
        />

        <Stack.Screen 
        name="Cart" 
        component={CartScreen} 
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}