import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {SignIn, SignUp} from '../../constants/navigation';
import images from '../../constants/images';
import { styles,LoginButtonsStyles,SignUpButtonStyles } from './style';
const SuccessScreen = () => {
  return (
    
    <ImageBackground
      source={images.success}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ImageComponent
            source={images.logo}
            style={styles.logo}
            resizeMode={'center'}
          />
          <Text style={styles.logoText}>For a Fit and Relaxed Pregnancy</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Skip"
            onPress={() => {

            }}
            style={SignUpButtonStyles}
          />
          <Button
            text="Allow notifications"
            onPress={() => {}}
            style={LoginButtonsStyles}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default SuccessScreen;

