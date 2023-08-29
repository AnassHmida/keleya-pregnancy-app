import React, {useState} from 'react';
import InputField from '../../components/InputField';
import images from '../../constants/images';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {Success} from '../../constants/navigation';
import {isEmailValid} from '../../constants/validationUtils';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const isFormValid = isEmailValid(email) && password.length > 0;

  const handleSignIn = () => {
    if (isFormValid) {
      navigation.navigate(Success);
    } else {
      console.log('error');
    }
  };

  return (
    <>
      <Form
        submittitle="Log in"
        isFormValid={isFormValid}
        onSubmit={handleSignIn}
        bottomText={'Have your forgotten your password ? '}
        headerimage={images.authentication_background}
        title="Welcome back!"
        render={() => (
          <>
            <InputField
              placeholder="example@gmail.com"
              value={email}
              onChangeText={setEmail}
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
