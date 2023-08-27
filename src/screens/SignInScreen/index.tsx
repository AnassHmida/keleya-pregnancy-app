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
import {useNavigation} from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { Name, Success } from '../../constants/navigation';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
 
  return (
    <>
      <Form
        submittitle='Log in'
        onSubmit={()=>{
          navigation.navigate(Success)
        }}
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
