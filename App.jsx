import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BugOfTheWeekScreen from './src/components/BugOfTheWeekScreen';
import BugSpreadScreen from './src/components/BugSpreadScreen';
import globalStyles from './src/styles/globalStyles';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={globalStyles.container}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="BugOfTheWeek"
          screenOptions={{
            headerStyle: {backgroundColor: '#000000'},
            headerTintColor: '#00FF00',
            headerTitleStyle: {fontFamily: 'Courier'},
          }}>
          <Stack.Screen name="BugOfTheWeek" component={BugOfTheWeekScreen} />
          <Stack.Screen name="BugSpread" component={BugSpreadScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}
