import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import NfcManager, {NfcTech} from 'react-native-nfc-manager';

const BugSpread = ({bugImage}) => {
  useEffect(() => {
    // Start NFC manager
    NfcManager.start();

    // Clean up on unmount
    return () => {
      NfcManager.stop();
    };
  }, []);

  async function readNdef() {
    try {
      // Register for the NFC tag with NDEF in it
      await NfcManager.requestTechnology(NfcTech.Ndef);
      // The resolved tag object will contain `ndefMessage` property
      const tag = await NfcManager.getTag();
      console.warn('Tag found', tag);
    } catch (ex) {
      console.warn('Oops!', ex);
    } finally {
      // Stop the NFC scanning
      NfcManager.cancelTechnologyRequest();
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Spread your bug!</Text>
      {bugImage && <Image source={bugImage} style={styles.image} />}
      <TouchableOpacity onPress={readNdef}>
        <Text style={styles.spreadButton}>Scan NFC Tag</Text>
      </TouchableOpacity>
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
    marginBottom: 20,
  },
  spreadButton: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default BugSpread;
