import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { SignIn, SignUp } from '../../constants/navigation';
import images from '../../constants/images';
import { styles } from './style';
import { AppStackParamList } from '../../Types/Types';
import { Header } from '../../components/Header';
import ButtonGroup from '../../components/ButtonGroup';
import Form from '../../components/Form';
import { LoginButtonsStyles, NobackgroundButtonStyles } from '../../components/Button/style';

const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  return (

    <ImageBackground
      source={images.introImage}
      style={styles.backgroundImage}
      resizeMode={'cover'}>

      <Form
        logo={images.logo}
        headertitle={'For a fit and relaxed pregnancy'}
        AdditionalButtonStyles={LoginButtonsStyles}
        AdditionalButtonText='Get Started'
        onAdditionalButtonPress={() => navigation.navigate(SignUp)}
        OriginalButtonText="Or login"
        onOriginalButtonPress={() => {
          navigation.navigate(SignIn);
        }}
        OriginalButtonStyles={NobackgroundButtonStyles}
      />

    </ImageBackground>
  );
};

export default MainScreen;
