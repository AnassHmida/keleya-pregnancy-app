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

const NameScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);

  const handleSucces = () => {};

  return (
    <>
      <Form
        submittitle='Login'
        onSubmit={()=>{}}
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
