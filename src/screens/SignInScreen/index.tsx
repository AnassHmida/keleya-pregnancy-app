import React, {useContext, useState} from 'react';
import InputField from '../../components/InputField';
import images from '../../constants/images';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Success} from '../../constants/navigation';
import {isEmailValid} from '../../constants/utils';
import {AppStackParamList} from '../../Types/Types';
import {KeleyaContext} from '../../context/KeleyaContext';
import {useTranslation} from 'react-i18next';
import {
  ButtonInvalidStyles,
  ButtonValidStyles,
  NobackgroundButtonStyles,
} from '../../components/Button/style';

const SignInScreen = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const isFormValid = isEmailValid(email) && password.length > 0;
  const keleyaContext = useContext(KeleyaContext);
  if (!keleyaContext) {
    return null;
  }
  const {t} = useTranslation();
  const {setAuthentication, setEmail} = keleyaContext;

  const handleSignIn = () => {
    if (isFormValid) {
      setEmail(email);
      setAuthentication(true);
      navigation.navigate(Success);
    } else {
      console.log('error');
    }
  };

  return (
    <>
      <Form
        AdditionalButtonStyles={NobackgroundButtonStyles}
        AdditionalButtonText={t('HaveYouForgottenYourPassword')}
        onAdditionalButtonPress={() => {}}
        OriginalButtonText={t('LoginButton')}
        onOriginalButtonPress={handleSignIn}
        OriginalButtonStyles={
          isFormValid ? ButtonValidStyles : ButtonInvalidStyles
        }
        headerimage={images.authentication_background}
        title={t('WelcomeBack')}
        render={() => (
          <>
            <InputField
              placeholder={t('ExampleEmailPlaceholder')}
              value={email}
              onChangeText={setMail}
            />
            <InputField
              placeholder={t('EnterPasswordPlaceholder')}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </>
        )}
      />
    </>
  );
};

export default SignInScreen;
