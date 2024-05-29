import React from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';

const BugSpreadScreen = ({route, navigation}) => {
  const {bugImage} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.spreadText}>Spread Your Bug!</Text>
      <Image source={bugImage} style={styles.image} />
      <Button
        title="Back to Welcome"
        onPress={() => navigation.navigate('BugOfTheWeek')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  spreadText: {
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

export default BugSpreadScreen;
