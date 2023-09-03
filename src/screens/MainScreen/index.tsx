import React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Main, SignIn, SignUp} from '../../constants/navigation';
import images from '../../constants/images';
import {styles} from './style';
import {AppStackParamList} from '../../Types/Types';
import Form from '../../components/Form';
import {
  LoginButtonsStyles,
  NobackgroundButtonBoldStyles,
  NobackgroundButtonStyles,
} from '../../components/Button/style';
import strings from '../../constants/strings';
const {ForAFitAndRelaxedPregnancy, GetStartedButton, OrLoginButton} = strings;
const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  return (
    <ImageBackground
      source={images.introImage}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <Form
        testId={Main}
        logo={images.logo}
        headertitle={ForAFitAndRelaxedPregnancy}
        AdditionalButtonStyles={LoginButtonsStyles}
        AdditionalButtonText={GetStartedButton}
        onAdditionalButtonPress={() => navigation.navigate(SignUp)}
        OriginalButtonText={OrLoginButton}
        onOriginalButtonPress={() => {
          navigation.navigate(SignIn);
        }}
        OriginalButtonStyles={NobackgroundButtonBoldStyles}
      />
    </ImageBackground>
  );
};

export default MainScreen;
