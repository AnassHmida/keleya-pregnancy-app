import React, {useContext} from 'react';
import InputField from '../../components/InputField';
import images from '../../constants/images';
import {InputStyle} from './style';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Date} from '../../constants/navigation';
import {KeleyaContext} from '../../context/KeleyaContext';
import {AppStackParamList} from '../../Types/Types';

const NameScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  } 
  const {name, setUsername} = keleyaContext;
  const isFormValid = name.length > 0 && !/\d/.test(name);

  return (
    <>
      <Form
        isFormValid={isFormValid}
        submittitle="Continue"
        showGradient
        onSubmit={() => {
          isFormValid && navigation.navigate(Date);
        }}
        headerimage={images.name}
        title="It's great that you're here! First things first, what should we
        call you?"
        render={() => (
          <>
            <InputField
              placeholder="Your Name"
              value={name}
              onChangeText={setUsername}
              style={InputStyle}
            />
          </>
        )}
      />
    </>
  );
};

export default NameScreen;
