import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import InputField from '../../components/InputField';
import Colors from '../../constants/colors';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import {styles, checkBoxStyle, SignUpButtonStyles, InputStyle} from './style';
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
        submittitle='Continue'
        onSubmit={()=>{
          navigation.navigate(Date)
        }}
        headerimage={images.name}
        title="It's great that you're here! First things first, what should we
        call you?"
        render={() => (
          <>
            <InputField
              placeholder="Your Name"
              value={email}
              onChangeText={setEmail}
              style={InputStyle}
            />
        
           </>
        )}
      />

     
    </>
  );
};

export default NameScreen;
