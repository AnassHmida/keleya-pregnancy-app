import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Colors from '../../constants/colors';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import {styles, checkBoxStyle, SignUpButtonStyles} from './style';
import Form from '../../components/Form';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);

  const handleSignUp = () => {

  };

  return (
    <>
      <Form
      onSubmit={()=>{}}
       submittitle='Sign Up'
       headerimage={images.authentication_background}
        title="Add your details below to set up an account"
        render={() => (
          <>
            <InputField
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <InputField
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <Checkbox
              label="Agree to Terms of Service"
              checked={agreedToTerms}
              onPress={() => setAgreedToTerms(!agreedToTerms)}
              style={checkBoxStyle}
            />
            <Checkbox
              label="Subscribe to Newsletter"
              checked={subscribedToNewsletter}
              onPress={() => setSubscribedToNewsletter(!subscribedToNewsletter)}
              style={checkBoxStyle}
            />
          </>
        )}
      />
    </>
  );
};

export default SignUpScreen;
