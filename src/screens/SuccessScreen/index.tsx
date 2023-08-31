import React, {useContext} from 'react';
import {ImageBackground} from 'react-native';
import {useTranslation} from 'react-i18next';

import images from '../../constants/images';
import {styles} from './style';
import {KeleyaContext} from '../../context/KeleyaContext';
import Form from '../../components/Form';
import {
  LoginButtonsStyles,
  NobackgroundButtonStyles,
} from '../../components/Button/style';
const SuccessScreen = () => {
  const {t} = useTranslation();
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
        headertitle={t('GetNotificationsTitle')}
        AdditionalButtonStyles={NobackgroundButtonStyles}
        AdditionalButtonText={t('SkipButton')}
        onAdditionalButtonPress={() => {}}
        OriginalButtonText={t('AllowNotificationsButton')}
        onOriginalButtonPress={() => {}}
        OriginalButtonStyles={LoginButtonsStyles}
      />
    </ImageBackground>
  );
};

export default SuccessScreen;
