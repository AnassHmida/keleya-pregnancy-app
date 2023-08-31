import React, {useContext} from 'react';
import {ImageBackground} from 'react-native';

import images from '../../constants/images';
import {styles} from './style';
import {KeleyaContext} from '../../context/KeleyaContext';
import Form from '../../components/Form';
import {
  LoginButtonsStyles,
  NobackgroundButtonStyles,
} from '../../components/Button/style';
import strings from '../../constants/strings';
const {GetNotificationsTitle, SkipButton, AllowNotificationsButton} = strings;
const SuccessScreen = () => {
  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const data = keleyaContext;

  console.log(data);

  return (
    <ImageBackground
      source={images.success}
      style={styles.backgroundImage}
      resizeMode={'cover'}>
      <Form
        icon={'bell'}
        headertitle={GetNotificationsTitle}
        AdditionalButtonStyles={NobackgroundButtonStyles}
        AdditionalButtonText={SkipButton}
        onAdditionalButtonPress={() => {}}
        OriginalButtonText={AllowNotificationsButton}
        onOriginalButtonPress={() => {}}
        OriginalButtonStyles={LoginButtonsStyles}
      />
    </ImageBackground>
  );
};

export default SuccessScreen;
