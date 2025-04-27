import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../(tabs)/home'; // Home ekranını import edin
import Create from '../(tabs)/create'; // Create ekranını import edin

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;

// Package dependencies
const dependencies = {
  "@react-navigation/native": "^6.x.x",
  "@react-navigation/stack": "^6.x.x",
  "expo": "~50.0.0",
  "react": "18.2.0",
  "react-native": "0.73.2",
  "react-native-gesture-handler": "~2.14.0",
  "react-native-safe-area-context": "4.8.2",
  "react-native-screens": "~3.29.0"
};