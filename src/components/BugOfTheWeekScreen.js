import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const BugOfTheWeekScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Your Bug of the week is...</Text>
      <Button
        title="Let's see that bug"
        onPress={() => navigation.navigate('BugImage')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default BugOfTheWeekScreen;
