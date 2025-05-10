import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../(tabs)/home';
import Create from '../(tabs)/create';
import Login from '../(tabs)/login';
import Register from '../(tabs)/register';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
