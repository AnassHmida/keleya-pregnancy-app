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
  SubmitButtonInvalidStyles,
  SubmitButtonValidStyles,
} from '../../components/Form/style';
import {NobackgroundButtonStyles} from '../../components/Button/style';

const SignInScreen = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const isFormValid = isEmailValid(email) && password.length > 0;
  const keleyaContext = useContext(KeleyaContext);

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
        AdditionalButtonText="Have you forgotten your password ? "
        onAdditionalButtonPress={() => {}}
        OriginalButtonText="Log in"
        onOriginalButtonPress={handleSignIn}
        OriginalButtonStyles={
          isFormValid ? SubmitButtonValidStyles : SubmitButtonInvalidStyles
        }
        bottomText={'Have your forgotten your password ? '}
        headerimage={images.authentication_background}
        title="Welcome back!"
        render={() => (
          <>
            <InputField
              placeholder="example@gmail.com"
              value={email}
              onChangeText={setMail}
            />
            <InputField
              placeholder="Enter a password"
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
