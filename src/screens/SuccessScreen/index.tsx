import React, { useContext } from 'react';
import {View, Text, ImageBackground} from 'react-native';
import Button from '../../components/Button';
import Icon from 'react-native-vector-icons/EvilIcons';
import images from '../../constants/images';
import {styles, LoginButtonsStyles, SignUpButtonStyles} from './style';
import { KeleyaContext } from '../../context/KeleyaContext';

const SuccessScreen = () => {

  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const {userEmail,authenticated,name,selectedDate,selectedWorkoutOption} = keleyaContext;

  console.log(userEmail,authenticated,name,selectedDate,selectedWorkoutOption)
  return (
    <ImageBackground
      source={images.success}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Icon size={70} name="bell" style={styles.logo} />
          <Text style={styles.logoText}>
            Get notifications to boost your motivation
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button text="Skip" onPress={() => {}} style={SignUpButtonStyles} />
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
