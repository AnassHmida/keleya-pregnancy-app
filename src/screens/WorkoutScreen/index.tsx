import React, { useContext, useState } from 'react';
import { Picker } from 'react-native-wheel-pick';
import images from '../../constants/images';
import Form from '../../components/Form';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Success } from '../../constants/navigation';
import { styles } from './style';
import { AppStackParamList } from '../../Types/Types';
import { KeleyaContext } from '../../context/KeleyaContext';
import { ButtonValidStyles } from '../../components/Button/style';
import { useTranslation } from 'react-i18next';

const WorkoutScreen = () => {
  const { t } = useTranslation(); 
  const keleyaContext = useContext(KeleyaContext);
  const [selectedWorkout, setSelectedWorkout] = useState<string>('');
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();

  if (!keleyaContext) {
    return null;
  }

  const { setAuthentication, setWorkoutOption } = keleyaContext;

  const handleSucces = async () => {
    setAuthentication(true);
    setWorkoutOption(selectedWorkout);
    navigation.navigate(Success);
  };
  

  const frequencyOptions = [
    t('OnceAWeek'),   
    t('TwoTimesAWeek'),    
    t('ThreeTimesAWeek'),  
    t('FourTimesAWeek'),   
    t('FiveTimesAWeek'),   
    t('SixTimesAWeek'),    
    t('SevenTimesAWeek')   
  ];

  return (
    <Form
      OriginalButtonText={t('ContinueButton')} 
      onOriginalButtonPress={handleSucces}
      OriginalButtonStyles={ButtonValidStyles}
      headertitle={t('HowManyTimesAWeek')} 
      headerimage={images.workout}
      render={() => (
        <Picker
          style={styles.picker}
          selectedValue={frequencyOptions[2]}
          pickerData={frequencyOptions}
          onValueChange={(value: string) => {
            setSelectedWorkout(value);
          }}
        />
      )}
    />
  );
};

export default WorkoutScreen;
