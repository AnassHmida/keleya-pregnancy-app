import React from 'react';
import {ImageBackground} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {SignIn, SignUp} from '../../constants/navigation';
import images from '../../constants/images';
import {styles} from './style';
import {AppStackParamList} from '../../Types/Types';
import Form from '../../components/Form';
import {
  LoginButtonsStyles,
  NobackgroundButtonBoldStyles,
  NobackgroundButtonStyles,
} from '../../components/Button/style';
import {useTranslation} from 'react-i18next';

const MainScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const {t} = useTranslation();

  return (
    <ImageBackground
      source={images.introImage}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <Form
        logo={images.logo}
        headertitle={t('ForAFitAndRelaxedPregnancy')}
        AdditionalButtonStyles={LoginButtonsStyles}
        AdditionalButtonText={t('GetStartedButton')}
        onAdditionalButtonPress={() => navigation.navigate(SignUp)}
        OriginalButtonText={t('OrLoginButton')}
        onOriginalButtonPress={() => {
          navigation.navigate(SignIn);
        }}
        OriginalButtonStyles={NobackgroundButtonBoldStyles}
      />
    </ImageBackground>
  );
};

export default MainScreen;
