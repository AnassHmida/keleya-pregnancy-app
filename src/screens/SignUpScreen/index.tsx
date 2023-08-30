import React, {useContext, useState} from 'react';
import InputField from '../../components/InputField';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import {checkBoxStyle} from './style';
import Form from '../../components/Form';
import {Name} from '../../constants/navigation';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {isEmailValid} from '../../constants/utils';
import {AppStackParamList} from '../../Types/Types';
import {KeleyaContext} from '../../context/KeleyaContext';
import {
  SubmitButtonInvalidStyles,
  SubmitButtonValidStyles,
} from '../../components/Form/style';

const SignUpScreen = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [agreedToTerms, setagreedToTerms] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const {setEmail} = keleyaContext;
  const isFormValid =
    isEmailValid(email) &&
    password.length > 0 &&
    agreedToPolicy &&
    agreedToTerms;

  const handleSignUp = () => {
    if (isFormValid) {
      setEmail(email);
      navigation.navigate(Name);
    } else {
      console.log('error');
    }
  };

  return (
    <Form
      OriginalButtonText="Log in"
      onOriginalButtonPress={handleSignUp}
      OriginalButtonStyles={
        isFormValid ? SubmitButtonValidStyles : SubmitButtonInvalidStyles
      }
      headerimage={images.authentication_background}
      title="Add your details below to set up an account"
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
  );
};

export default SignUpScreen;
