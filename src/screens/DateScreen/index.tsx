import React, {useContext, useState} from 'react';
import DatePicker from 'react-native-date-picker';
import Button from '../../components/Button';
import images from '../../constants/images';
import {DateButtonsStyles} from './style';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Workout} from '../../constants/navigation';
import {KeleyaContext} from '../../context/KeleyaContext';
import {formattedDate} from '../../constants/utils';
import {AppStackParamList} from '../../Types/Types';
import {SubmitButtonValidStyles} from '../../components/Form/style';

const DateScreen = () => {
  const [date, setDate] = useState(new Date());
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const [open, setOpen] = useState(false);

  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const {setSelectedDate, name} = keleyaContext;
  const maxDueDate = new Date();
  maxDueDate.setMonth(maxDueDate.getMonth() + 9);
  maxDueDate.setDate(maxDueDate.getDate() + 7);
  const handleSucces = async () => {
    await setSelectedDate(date);
    navigation.navigate(Workout);
  };

  return (
    <Form
      OriginalButtonText="Continue"
      onOriginalButtonPress={handleSucces}
      OriginalButtonStyles={SubmitButtonValidStyles}
      headerimage={images.date}
      title={`When is your baby due, ${name}?`}
      render={() => (
        <>
          <Button
            text={formattedDate(date)}
            onPress={() => setOpen(true)}
            style={DateButtonsStyles}
          />
          <DatePicker
            modal
            open={open}
            minimumDate={new Date()}
            maximumDate={maxDueDate}
            date={date}
            mode="date"
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
        </>
      )}
    />
  );
};

export default DateScreen;
