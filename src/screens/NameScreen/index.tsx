import React, {useContext} from 'react';
import InputField from '../../components/InputField';
import images from '../../constants/images';
import {InputStyle} from './style';
import Form from '../../components/Form';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {Date, Name} from '../../constants/navigation';
import {KeleyaContext} from '../../context/KeleyaContext';
import {AppStackParamList} from '../../Types/Types';
import {validName} from '../../constants/utils';
import {
  ButtonInvalidStyles,
  ButtonValidStyles,
} from '../../components/Button/style';
import strings from '../../constants/strings';

const NameScreen = () => {
  const navigation = useNavigation<StackNavigationProp<AppStackParamList>>();
  const keleyaContext = useContext(KeleyaContext);

  if (!keleyaContext) {
    return null;
  }
  const {name, setUsername} = keleyaContext;
  const isFormValid = validName(name);
  const {ItsGreatThatYoureHere, YourNamePlaceholder, ContinueButton} = strings;

  return (
    <>
      <Form
        testId={Name}
        OriginalButtonText={ContinueButton}
        onOriginalButtonPress={() => {
          isFormValid && navigation.navigate(Date);
        }}
        OriginalButtonStyles={
          isFormValid ? ButtonValidStyles : ButtonInvalidStyles
        }
        showGradient
        headerimage={images.name}
        title={ItsGreatThatYoureHere}
        render={() => (
          <>
            <InputField
              placeholder={YourNamePlaceholder}
              value={name}
              onChangeText={setUsername}
              style={InputStyle}
            />
          </>
        )}
      />
    </>
  );
};

export default NameScreen;
