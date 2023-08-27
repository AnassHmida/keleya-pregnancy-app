import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker'; // Import DatePicker
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import Colors from '../../constants/colors';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import { styles, checkBoxStyle, SignUpButtonStyles, LoginButtonsStyles } from './style';
import Form from '../../components/Form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { Workout } from '../../constants/navigation';
import { KeleyaContext } from '../../context/KeleyaContext';

const DateScreen = () => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date()) // Added selectedDate state
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const [open, setOpen] = useState(false)

  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const { name  } = keleyaContext;

  
  
  const handleSucces = () => {
navigation.navigate(Workout)
  };

  return (
    <>
      <Form
        submittitle='Continue'
        onSubmit={handleSucces}
        headerimage={images.date}
        title={`When is your baby due, ${name}?`}
        render={() => (
          <>
            <Button text={date.toDateString()} onPress={() => setOpen(true)} style={LoginButtonsStyles} />
            <DatePicker
              modal
              open={open}
              date={date}
              mode='date'
              onConfirm={(date) => {
                setOpen(false)
                setDate(date)
              }}
              onCancel={() => {
                setOpen(false)
              }}
            />
          </>
        )}
      />
    </>
  );
};

export default DateScreen;
