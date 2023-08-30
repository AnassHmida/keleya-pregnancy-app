import React, {useContext, useState} from 'react';
import {Picker} from 'react-native-wheel-pick';
import images from '../../constants/images';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Success} from '../../constants/navigation';
import {styles} from './style';
import {AppStackParamList} from '../../Types/Types';
import {KeleyaContext} from '../../context/KeleyaContext';
import {ButtonValidStyles} from '../../components/Button/style';
import {useTranslation} from 'react-i18next';
import en from '../../translations/en';

const WorkoutScreen = () => {
  const {t} = useTranslation();
  const keleyaContext = useContext(KeleyaContext);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  if (!keleyaContext) {
    return null;
  }

  const {setAuthentication, setWorkoutOption} = keleyaContext;

  const {WeeksPerDay} = en;
  const defaultFrequencyIndex: number = 2;

  const translatedWeeksPerDay: string[] = t('WeeksPerDay', {
    returnObjects: true,
  }) as string[];

  const [selectedWorkout, setSelectedWorkout] = useState<string>(
    translatedWeeksPerDay[defaultFrequencyIndex],
  );

  const handleSuccess = async () => {
    setAuthentication(true);
    console.log(selectedWorkout)
    setWorkoutOption(selectedWorkout);
    navigation.navigate(Success);
  };

  return (
    <Form
      OriginalButtonText={t('ContinueButton')}
      onOriginalButtonPress={handleSuccess}
      OriginalButtonStyles={ButtonValidStyles}
      headertitle={t('HowManyTimesAWeek')}
      headerimage={images.workout}
      render={() => (
        <Picker
          style={styles.picker}
          selectedValue={selectedWorkout}
          pickerData={translatedWeeksPerDay}
          onValueChange={(value: string) => {
            setSelectedWorkout(
              WeeksPerDay[translatedWeeksPerDay.indexOf(value)],
            );
          }}
        />
      )}
    />
  );
};

export default WorkoutScreen;
