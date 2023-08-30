import React, { useContext, useState } from 'react';
import InputField from '../../components/InputField';
import Checkbox from '../../components/CheckBox';
import images from '../../constants/images';
import Form from '../../components/Form';
import { Name } from '../../constants/navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { isEmailValid } from '../../constants/utils';
import { AppStackParamList } from '../../Types/Types';
import { KeleyaContext } from '../../context/KeleyaContext';
import {
  ButtonInvalidStyles,
  ButtonValidStyles,
} from '../../components/Button/style';
import { checkBoxStyle } from '../../components/CheckBox/style';
import strings from '../../constants/strings';
import { useTranslation } from 'react-i18next';

const SignUpScreen = () => {
  const [email, setMail] = useState('');
  const [password, setPassword] = useState('');
  const [agreedToPolicy, setAgreedToPolicy] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
const { t } = useTranslation();
  const { setEmail } = keleyaContext;
  const isFormValid =
    isEmailValid(email) && password.length > 0 && agreedToPolicy && agreedToTerms;

  const handleSignUp = () => {
    if (isFormValid) {
      setEmail(email);
      navigation.navigate(Name);
    } else {
      console.log('error');
    }
  };



  return (
    <Form
      OriginalButtonText={t('LoginButton')} 
      onOriginalButtonPress={handleSignUp}
      OriginalButtonStyles={
        isFormValid ? ButtonValidStyles : ButtonInvalidStyles
      }
      headerimage={images.authentication_background}
      title={t('AddYourDetailsTitle')} 
      render={() => (
        <>
          <InputField
            placeholder={t('ExampleEmailPlaceholder')} 
            value={email}
            onChangeText={setMail}
          />
          <InputField
            placeholder={t('EnterPasswordPlaceholder')} 
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <Checkbox
            labelSegments={[
              { text: t('IveReadThe') }, 
              { text: t('PrivacyPolicy'), bold: true }, 
            ]}
            checked={agreedToPolicy}
            onPress={() => setAgreedToPolicy(!agreedToPolicy)}
            style={checkBoxStyle}
          />

          <Checkbox
            labelSegments={[
              { text: t('IAcceptThe') }, 
              { text: t('TermsAndConditions'), bold: true }, 
              { text: t('And') }, 
              { text: t('KeleyasAdvice'), bold: true },
            ]}
            checked={agreedToTerms}
            onPress={() => setAgreedToTerms(!agreedToTerms)}
            style={checkBoxStyle}
          />
        </>
      )}
    />
  );
};

export default SignUpScreen;
