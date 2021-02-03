// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/Home';
// import Card from '../screens/Card';
import Form from '../screens/Form';
import List from '../screens/List';
import BloodList from '../screens/BloodList'



const Stack = createStackNavigator();

function NavigationPage() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="BloodList" component={BloodList} />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="List" component={List} />
        

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationPage;