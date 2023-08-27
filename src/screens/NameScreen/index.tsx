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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { Date } from '../../constants/navigation';

const NameScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
 

  
  const handleSucces = () => {
    navigation.navigate(Date)
  };

  return (
    <>
      <Form
        submittitle='Login'
        onSubmit={()=>{
          navigation.navigate(Date)
        }}
        headerimage={images.name}
        title="Add your details below to set up an account"
        render={() => (
          <>
            <InputField
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
        
           </>
        )}
      />

     
    </>
  );
};

export default NameScreen;
