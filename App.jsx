import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BugOfTheWeekScreen from './src/components/BugOfTheWeekScreen';
import BugSpreadScreen from './src/components/BugSpreadScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BugOfTheWeek">
        <Stack.Screen name="BugOfTheWeek" component={BugOfTheWeekScreen} />
        <Stack.Screen name="BugSpread" component={BugSpreadScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
