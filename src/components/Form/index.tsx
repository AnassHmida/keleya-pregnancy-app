import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity } from 'react-native';
import Colors from '../../constants/colors';
import ImageComponent from '../Image';
import Button from '../Button';
import { SignUpButtonStyles } from '../../screens/SignUpScreen/style';
import { useNavigation } from '@react-navigation/native';

type FormProps = {
  title: string;
  onSubmit: () => void; 
  submittitle: string;
  headerimage: ImageSourcePropType;
  render: () => React.ReactNode;
};

const Form = ({ title, headerimage, submittitle, onSubmit, render }: FormProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.smallSquare} onPress={handleBackPress}>
        </TouchableOpacity>
        <ImageComponent source={headerimage} resizeMode="contain" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{title}</Text>
        {render()}
      </View>
      <Button text={submittitle} onPress={onSubmit} style={SignUpButtonStyles} />
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

  logoText: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flex: 0.5,
    backgroundColor:'red',
    flexDirection: 'row', // Add flexDirection to align square and image
  },
  smallSquare: {
    width: 20,
    height: 20,
    zIndex: 2,
    position: 'absolute',
    backgroundColor: 'black', // Customize the square's appearance
    marginLeft: 30,
    marginTop: 50, // Adjust the margin as needed
  },
  formContainer: {
    flex: 0.5,
    width: '90%',
  },
  title: {
    fontSize: 25,
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default Form;
