import React from 'react';
import {
  View,
  ImageSourcePropType,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {Header} from '../Header';
import Content from '../Content';
import ButtonGroup from '../ButtonGroup';

type FormProps = {
  title?: string;
  headertitle?: string;
  onSubmit: () => void;
  submittitle: string;
  headerimage: ImageSourcePropType;
  render: () => React.ReactNode;
  isFormValid?: boolean;
  bottomText?: string;
  showGradient?: boolean;
};

const Form = ({
  title,
  headerimage,
  headertitle,
  submittitle,
  onSubmit,
  render,
  isFormValid,
  bottomText,
  showGradient,
}: FormProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Header
        headerimage={headerimage}
        handleBackPress={handleBackPress}
        headertitle={headertitle}
        showGradient={showGradient}
      />

      <Content render={render} title={title} showGradient={showGradient} />

      <ButtonGroup
        submittitle={submittitle}
        onSubmit={onSubmit}
        isFormValid={isFormValid}
        bottomText={bottomText}/>

    </View>
  );
};

export default Form;
