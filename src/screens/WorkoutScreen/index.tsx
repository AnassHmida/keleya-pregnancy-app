import React, { useState } from 'react';
import { Picker } from 'react-native-wheel-pick';
import { View, Text, StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker'; // Import DatePicker
import ImageComponent from '../../components/Image';
import Button from '../../components/Button';
import Colors from '../../constants/colors';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import Form from '../../components/Form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AppStackParamList } from '../../navigation/AppNavigator';
import { Success } from '../../constants/navigation';

const WorkoutScreen = () => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState(new Date()) // Added selectedDate state
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [subscribedToNewsletter, setSubscribedToNewsletter] = useState(false);
  const [open, setOpen] = useState(false)
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
 

  
  const handleSucces = () => {
    navigation.navigate(Success)
  };
  const frequencyOptions = [
    'Once a week',
    'Twice a week',
    'Three times a week',
    'Four times a week',
    // Add more options as needed
  ];

  return (
    <>
      <Form
        submittitle='Login'
        onSubmit={handleSucces}
        headertitle={'How many times a week do you want to be active'}
        headerimage={images.workout}
        render={() => (
          <>
      <Picker
  style={{ backgroundColor: 'white', width: '100%', height: 215 }}
  selectedValue='item4'
  pickerData={frequencyOptions}
  onValueChange={(value:string) => { console.log(value) }}
/>
          </>
        )}
      />
    </>
  );
};

export default WorkoutScreen;
