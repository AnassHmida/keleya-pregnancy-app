import React, {useContext, useState} from 'react';
import {Picker} from 'react-native-wheel-pick';
import images from '../../constants/images';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Success, Workout} from '../../constants/navigation';
import {styles} from './style';
import {AppStackParamList} from '../../Types/Types';
import {KeleyaContext} from '../../context/KeleyaContext';
import {ButtonValidStyles} from '../../components/Button/style';
import strings from '../../constants/strings';

const WorkoutScreen = () => {
  const keleyaContext = useContext(KeleyaContext);
  const {ContinueButton, HowManyTimesAWeek, WeeksPerDay} = strings;

  const defaultFrequency = WeeksPerDay[2];
  const [selectedWorkout, setSelectedWorkout] =
    useState<string>(defaultFrequency);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  if (!keleyaContext) {
    return null;
  }

  const {setAuthentication, setWorkoutOption} = keleyaContext;

  const handleSucces = async () => {
    setAuthentication(true);
    console.log(selectedWorkout);
    setWorkoutOption(selectedWorkout);
    navigation.navigate(Success);
  };

  return (
    <Form
      testId={Workout}
      OriginalButtonText={ContinueButton}
      onOriginalButtonPress={handleSucces}
      OriginalButtonStyles={ButtonValidStyles}
      headertitle={HowManyTimesAWeek}
      headerimage={images.workout}
      render={() => (
        <Picker
          style={styles.picker}
          selectedValue={defaultFrequency}
          pickerData={WeeksPerDay}
          onValueChange={(value: string) => {
            setSelectedWorkout(value);
          }}
        />
      )}
    />
  );
};

export default WorkoutScreen;
