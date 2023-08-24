import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageComponent from '../components/Image';
import Button from '../components/Button';

const MainScreen = () => {
  return (
    <View style={styles.container}>
      <ImageComponent source={require('./assets/logo.png')} style={styles.logo} />
      <ImageComponent source={require('./assets/image.png')} />
      <View style={styles.buttonContainer}>
        <Button text="Login" color="blue" textColor="white" onPress={() => console.log('Login pressed')} />
        <Button text="Sign Up" color="green" textColor="white" onPress={() => console.log('Sign Up pressed')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    marginTop: 20,
    width: 100, 
    height: 100,
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default MainScreen;