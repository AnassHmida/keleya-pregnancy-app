import React, {useState} from 'react';
import InputField from '../../components/InputField';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import {checkBoxStyle} from './style';
import Form from '../../components/Form';
import {Name} from '../../constants/navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {isEmailValid} from '../../constants/validationUtils';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [agreedToTerms, setagreedToTerms] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const isFormValid =
    isEmailValid(email) &&
    password.length > 0 &&
    agreedToPolicy &&
    agreedToTerms;

  const handleSignUp = () => {
    if (isFormValid) {
      navigation.navigate(Name);
    } else {
      console.log('error');
    }
  };

  return (
    <>
      <Form
        submittitle="Sign Up"
        onSubmit={handleSignUp}
        isFormValid={isFormValid}
        headerimage={images.authentication_background}
        title="Add your details below to set up an account"
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
            <Checkbox
              labelSegments={[
                {text: "I've read the "},
                {text: 'privacy policy', bold: true},
              ]}
              checked={agreedToPolicy}
              onPress={() => setAgreedToPolicy(!agreedToPolicy)}
              style={checkBoxStyle}
            />

            <Checkbox
              labelSegments={[
                {text: 'I accept '},
                {text: 'the terms & conditions', bold: true},
                {text: ' and '},
                {text: "Keleya's advice", bold: true},
              ]}
              checked={agreedToTerms}
              onPress={() => setagreedToTerms(!agreedToTerms)}
              style={checkBoxStyle}
            />
          </>
        )}
      />
    </>
  );
};

export default SignUpScreen;
