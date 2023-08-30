import React, {useContext} from 'react';
import {ImageBackground} from 'react-native';

import images from '../../constants/images';
import {styles} from './style';
import {KeleyaContext} from '../../context/KeleyaContext';
import Form from '../../components/Form';
import {LoginButtonsStyles, NobackgroundButtonStyles} from '../../components/Button/style';

const SuccessScreen = () => {
  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const {userEmail, authenticated, name, selectedDate, selectedWorkoutOption} =
    keleyaContext;

  console.log(
    userEmail,
    authenticated,
    name,
    selectedDate,
    selectedWorkoutOption,
  );
  return (
    <ImageBackground
      source={images.success}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <Form
        icon={'bell'}
        headertitle={'Get notifications to boost your motivation'}
        AdditionalButtonStyles={NobackgroundButtonStyles}
        AdditionalButtonText="Skip"
        onAdditionalButtonPress={() => {}}
        OriginalButtonText="Allow notifications"
        onOriginalButtonPress={() => {}}
        OriginalButtonStyles={LoginButtonsStyles}
      />
    </ImageBackground>
  );
};

export default SuccessScreen;
