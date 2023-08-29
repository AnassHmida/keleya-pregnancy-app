import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageSourcePropType,
  TouchableOpacity,
  Image,
} from 'react-native';
import Colors from '../../constants/colors';
import Button from '../Button';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import {SubmitButtonInvalidStyles, SubmitButtonValidStyles} from './styles';
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
}: FormProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
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
          style={styles.headerImage}
          resizeMode="cover"
        />
      </View>

      <View style={styles.formContainer}>
        {title && <Text style={styles.title}>{title}</Text>}
        {render()}
      </View>

  
      <View style={styles.bottomContainer}>
        {bottomText && <Text style={styles.bottomText}>{bottomText}</Text>}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    backgroundColor:'blue',
    flex: 0.5,
    width: '100%',
    
  },
  smallSquare: {
    zIndex: 2,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 50,
  },
  headerTitleContainer: {
    alignSelf: 'center',
    zIndex: 2,
    width: '100%',
    top: '20%',
    padding: 20,
    position: 'absolute',
  },
  centerText: {
    textAlign: 'center',
    width: '100%',
  },
  headerImage: {
    flex: 1,
    zIndex: 1,
    width: undefined,
    height: undefined,

  },
  formContainer: {
    flex: 0.5,
    width: '90%',
  },
  title: {
    fontSize: 25,
    fontFamily: 'MuseoSansRounded300',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
    width: '90%',
  },
  bottomText: {
    textAlign: 'center',
    marginBottom: 25,
    fontSize: 20,
    fontFamily: 'MuseoSansRounded-500',
  },
});

export default Form;
