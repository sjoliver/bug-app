import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import {withNavigation} from 'react-navigation';

// Import all bug images statically
const bugImages = [
  require('../../assets/bugs/bug_1.png'),
  require('../../assets/bugs/bug_2.png'),
  require('../../assets/bugs/bug_3.png'),
  require('../../assets/bugs/bug_4.png'),
  require('../../assets/bugs/bug_5.png'),
  require('../../assets/bugs/bug_6.png'),
  require('../../assets/bugs/bug_7.png'),
  require('../../assets/bugs/bug_8.png'),
  require('../../assets/bugs/bug_9.png'),
  require('../../assets/bugs/bug_10.png'),
];

const BugImageScreen = ({navigation}) => {
  const [randomBugNumber, setRandomBugNumber] = useState(null);

  useEffect(() => {
    // Generate a random number between 1 and 10
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    setRandomBugNumber(randomNumber);
  }, []);

  // Function to select the bug image based on the random bug number
  const getBugImage = () => {
    if (randomBugNumber && randomBugNumber >= 1 && randomBugNumber <= 10) {
      return bugImages[randomBugNumber - 1];
    }
    // Default image or null if randomBugNumber is not set yet or out of range
    return null; // You can set this to a default image or leave it null
  };

  // Function to handle navigation to the BugCounter screen
  const goToBugCounterScreen = () => {
    navigation.navigate('BugCounter', {bugImage: getBugImage()});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Your Bug of the week is...</Text>
      {randomBugNumber && <Image source={getBugImage()} style={styles.image} />}
      <Button title="Bug Count" onPress={goToBugCounterScreen} />
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

export default withNavigation(BugImageScreen);
