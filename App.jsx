import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BugOfTheWeekScreen from './src/components/BugOfTheWeekScreen';
import WelcomeScreen from './src/components/WelcomeScreen';
import BugImageScreen from './src/components/BugImageScreen';
import BugCounterScreen from './src/components/BugCounterScreen';
import BugInteractionScreen from './src/components/BugInteractionScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="BugOfTheWeek" component={BugOfTheWeekScreen} />
        <Stack.Screen name="BugImage" component={BugImageScreen} />
        <Stack.Screen name="BugCounter" component={BugCounterScreen} />
        <Stack.Screen name="BugInteraction" component={BugInteractionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
