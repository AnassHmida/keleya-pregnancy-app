import React, { useContext, useState } from 'react';
import {Picker} from 'react-native-wheel-pick';
import images from '../../constants/images';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Success} from '../../constants/navigation';
import {styles} from './style';
import { AppStackParamList } from '../../Types/Types';
import { KeleyaContext } from '../../context/KeleyaContext';




const WorkoutScreen = () => {
  const keleyaContext = useContext(KeleyaContext);

if (!keleyaContext) {
  return null;
}

const [selectedWorkout , setSelectedWorkout] =useState<string>('')
const {setAuthentication,setWorkoutOption} = keleyaContext;
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const handleSucces = async() => {
    await setAuthentication(true)
    await setWorkoutOption(selectedWorkout)
    navigation.navigate(Success);
  };
  const frequencyOptions = [
    'Once a week',
    '2 times a week',
    '3 times a week',
    '4 times a week',
  ];

  return (
    <>
      <Form
        submittitle="Continue"
        isFormValid={true}
        onSubmit={handleSucces}
        headertitle={'How many times a week do you want to be active ? '}
        headerimage={images.workout}
        render={() => (
          <>
            <Picker
              style={styles.picker}
              selectedValue={frequencyOptions[0]}
              pickerData={frequencyOptions}
              onValueChange={(value: string) => {
                setSelectedWorkout(value)
              }}
            />
          </>
        )}
      />
    </>
  );
};

export default WorkoutScreen;
