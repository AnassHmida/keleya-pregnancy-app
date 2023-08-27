import React from 'react';
import { View, Text, StyleSheet, ImageSourcePropType, TouchableOpacity, Image } from 'react-native';
import Colors from '../../constants/colors';
import ImageComponent from '../Image';
import Button from '../Button';
import { SignUpButtonStyles } from '../../screens/SignUpScreen/style';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Foundation';
import { SubmitButtonStyles } from './styles';

type FormProps = {
  title?: string;
  headertitle?: String,
  onSubmit: () => void; 
  submittitle: string;
  headerimage: ImageSourcePropType;
  render: () => React.ReactNode;
};

const Form = ({ title, headerimage, headertitle ,submittitle, onSubmit, render }: FormProps) => {
  const navigation = useNavigation();
  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
       
      <View style={styles.header}>
         <TouchableOpacity style={styles.smallSquare} onPress={handleBackPress}>
         <Icon name={'arrow-left'} size={24} color="gray" />
    
        </TouchableOpacity>
        {headertitle && <View style={{
            alignSelf:'center',
                zIndex: 2,
                width:'100%',
                top:'20%',
                left:'50%',
                position: 'absolute',

        }}>
             <Text>{headertitle}</Text>
        </View>}
    
        <Image source={headerimage}  style={{flex:1,zIndex:1,  width: undefined,height:undefined}} resizeMode="cover"/>
      </View>
      <View style={styles.formContainer}>
       {title &&  <Text style={styles.title}>{title}</Text>}
        {render()}
      </View>
      <Button text={submittitle} onPress={onSubmit} style={SubmitButtonStyles} />
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

    flex: 0.55,
    width:"100%"
  },
  smallSquare: {
 
    zIndex: 2,
    position: 'absolute',
    marginLeft: 30,
    marginTop: 50, 
  },
  formContainer: {
    flex: 0.45,
    width: '90%',
  },
  title: {
    fontSize: 25,
    fontFamily:'MuseoSansRounded300',
    fontWeight: 'normal',
    textAlign: 'center',
    marginBottom: 15,
  },
});

export default Form;
