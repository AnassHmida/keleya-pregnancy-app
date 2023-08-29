import React from 'react';
import {Picker} from 'react-native-wheel-pick';
import images from '../../constants/images';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {AppStackParamList} from '../../navigation/AppNavigator';
import {Success} from '../../constants/navigation';
import {styles} from './style';

const WorkoutScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  const handleSucces = () => {
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
        onSubmit={handleSucces}
        headertitle={'How many times a week do you want to be active ? '}
        headerimage={images.workout}
        render={() => (
          <>
            <Picker
              style={styles.picker}
              selectedValue="item4"
              pickerData={frequencyOptions}
              onValueChange={(value: string) => {
                console.log(value);
              }}
            />
          </>
        )}
      />
    </>
  );
};

export default WorkoutScreen;
