import React from 'react';
import {useHeaderHeight} from '@react-navigation/elements';
import {
  View,
  Text,
  ImageSourcePropType,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import {
  SubmitButtonInvalidStyles,
  SubmitButtonValidStyles,
  styles,
} from './style';
import LinearGradient from 'react-native-linear-gradient';
import ImageComponent from '../Image';

type FormProps = {
  title?: string;
  headertitle?: String;
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
  const headerHeight = useHeaderHeight();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {showGradient && (
          <LinearGradient
            colors={['#ffffff00', 'white']}
            style={[styles.gradientOverlay, {height: '5%'}]}
          />
        )}
        <TouchableOpacity style={styles.smallSquare} onPress={handleBackPress}>
          <Icon name={'arrow-left'} size={24} color="black" />
        </TouchableOpacity>
        {headertitle && (
          <View style={styles.headerTitleContainer}>
            <Text style={[styles.title, styles.centerText]}>{headertitle}</Text>
          </View>
        )}

        <ImageComponent
          source={headerimage}
          style={
            showGradient
              ? {...styles.headerImage, marginTop: -100}
              : styles.headerImage
          }
          resizeMode="cover"
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={[styles.formContainer, showGradient && {marginTop: 30}]}
        keyboardVerticalOffset={
          Platform.OS === 'ios' ? headerHeight : headerHeight
        }>
        {title && <Text style={styles.title}>{title}</Text>}
        {render()}
      </KeyboardAvoidingView>

      <View style={styles.bottomContainer}>
        {bottomText && 
         <TouchableOpacity>

        <Text style={styles.bottomText}>{bottomText}</Text>
        </TouchableOpacity>    
        }
        <Button
          text={submittitle}
          onPress={onSubmit}
          style={
            isFormValid ? SubmitButtonValidStyles : SubmitButtonInvalidStyles
          }
        />
      </View>
    </View>
  );
};

export default Form;
