import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const BugCounterScreen = ({route, navigation}) => {
  const {bugImage} = route.params;

  const bugCount = 5;

  useEffect(() => {
    // Navigate to BugInteractionScreen after 5 seconds
    const timer = setTimeout(() => {
      navigation.navigate('BugInteraction', {bugImage});
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigation, bugImage]);

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Your Bug of the week is...</Text>
      <Image source={bugImage} style={styles.image} />
      <Text style={styles.count}>Total Bugs Caught: {bugCount}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
