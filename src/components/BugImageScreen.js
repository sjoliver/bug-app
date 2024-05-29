import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const BugImageScreen = ({route, navigation}) => {
  const {bugImage} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Here is your Bug of the week!</Text>
      <Image source={bugImage} style={styles.image} />
      <Button
        title="Bug Count"
        onPress={() => navigation.navigate('BugCounter', {bugImage})}
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
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});

export default BugImageScreen;
