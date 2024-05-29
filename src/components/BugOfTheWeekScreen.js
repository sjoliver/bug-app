import React, {useState, useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Button, Image, Animated} from 'react-native';

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

const BugAppScreen = ({navigation}) => {
  const [showBugImage, setShowBugImage] = useState(false);
  const [showBugCount, setShowBugCount] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [randomBugImage, setRandomBugImage] = useState(null);
  const [welcomeVisible, setWelcomeVisible] = useState(true);
  const [bugTextVisible, setBugTextVisible] = useState(false);

  const fadeAnimImage = useRef(new Animated.Value(0)).current;
  const fadeAnimCount = useRef(new Animated.Value(0)).current;
  const fadeAnimButton = useRef(new Animated.Value(0)).current;
  const fadeAnimWelcome = useRef(new Animated.Value(1)).current;
  const fadeAnimBugText = useRef(new Animated.Value(0)).current;

  const handleShowBug = () => {
    const randomNumber = Math.floor(Math.random() * 10);
    setRandomBugImage(bugImages[randomNumber]);

    Animated.timing(fadeAnimWelcome, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start(() => {
      setWelcomeVisible(false);
      setBugTextVisible(true);
      Animated.timing(fadeAnimBugText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start(() => {
        setTimeout(() => {
          setShowBugImage(true);
          Animated.timing(fadeAnimImage, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }, 2000);

        setTimeout(() => {
          setShowBugCount(true);
          Animated.timing(fadeAnimCount, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }, 4000);

        setTimeout(() => {
          setShowButton(true);
          Animated.timing(fadeAnimButton, {
            toValue: 1,
            duration: 1000,
            useNativeDriver: true,
          }).start();
        }, 6000);
      });
    });
  };

  return (
    <View style={styles.container}>
      {welcomeVisible && (
        <Animated.View style={{opacity: fadeAnimWelcome}}>
          <Text style={styles.welcomeText}>Welcome to Bug :)</Text>
          <Button title="Show me the bug" onPress={handleShowBug} />
        </Animated.View>
      )}

      {bugTextVisible && (
        <Animated.View style={{opacity: fadeAnimBugText}}>
          <Text style={styles.bugText}>Your Bug of the Week is...</Text>
        </Animated.View>
      )}

      {randomBugImage && (
        <Animated.View
          style={{...styles.imageContainer, opacity: fadeAnimImage}}>
          <Image source={randomBugImage} style={styles.image} />
        </Animated.View>
      )}

      {showBugCount && (
        <Animated.View style={{opacity: fadeAnimCount}}>
          <Text style={styles.count}>Total Bugs Spread: 5</Text>
        </Animated.View>
      )}

      {showButton && (
        <Animated.View style={{opacity: fadeAnimButton}}>
          <Button
            title="Spread My Bug"
            onPress={() =>
              navigation.navigate('BugSpread', {bugImage: randomBugImage})
            }
          />
        </Animated.View>
      )}
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
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  bugText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    marginVertical: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  count: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 20,
  },
});

export default BugAppScreen;
