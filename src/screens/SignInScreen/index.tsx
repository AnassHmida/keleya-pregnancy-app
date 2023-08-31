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
import {
  ButtonInvalidStyles,
  ButtonValidStyles,
  NobackgroundButtonStyles,
} from '../../components/Button/style';
import strings from '../../constants/strings';

const SignInScreen = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const isFormValid = isEmailValid(email) && password.length > 0;
  const keleyaContext = useContext(KeleyaContext);
  const {
    HaveYouForgottenYourPassword,
    LoginButton,
    WelcomeBack,
    ExampleEmailPlaceholder,
    EnterPasswordPlaceholder,
  } = strings;
  if (!keleyaContext) {
    return null;
  }
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
        AdditionalButtonText={HaveYouForgottenYourPassword}
        onAdditionalButtonPress={() => {}}
        OriginalButtonText={LoginButton}
        onOriginalButtonPress={handleSignIn}
        OriginalButtonStyles={
          isFormValid ? ButtonValidStyles : ButtonInvalidStyles
        }
        bottomText={HaveYouForgottenYourPassword}
        headerimage={images.authentication_background}
        title={WelcomeBack}
        render={() => (
          <>
            <InputField
              placeholder={ExampleEmailPlaceholder}
              value={email}
              onChangeText={setMail}
            />
            <InputField
              placeholder={EnterPasswordPlaceholder}
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
