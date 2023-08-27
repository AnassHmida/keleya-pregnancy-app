import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import Colors from '../../constants/colors';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {SignIn, SignUp} from '../../constants/navigation';
import images from '../../constants/images';
import {styles, LoginButtonsStyles, SignUpButtonStyles} from './style';

const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  return (
    <ImageBackground
      source={images.introImage}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <ImageComponent
            source={images.logo}
            style={styles.logo}
            resizeMode={'center'}
          />
          <Text style={styles.logoText}>For a fit and relaxed pregnancy</Text>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            text="Get Started"
            onPress={() => {
              navigation.navigate(SignUp);
            }}
            style={LoginButtonsStyles}
          />
          <Button
            text="Or login"
            onPress={() =>  navigation.navigate(SignIn)}
            style={SignUpButtonStyles}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default MainScreen;
