import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';



const BugInteractionScreen = ({ route }) => {
  const { bugImage } = route.params;

  // Assume you have a state variable to hold the bug count
  const bugCount = 5; // This is just an example, you can replace it with your actual bug count

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Your Bug of the week is...</Text>
      <Image source={bugImage} style={styles.image} />
      <Text style={styles.count}>Total Bugs Caught: {bugCount}</Text>
      <Button title="Spread Bug" onPress={() =>
        navigation.navigate('')} />
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

export default BugCounterScreen;
