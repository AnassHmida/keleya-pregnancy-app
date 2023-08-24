import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

type ButtonProps = {
  text: string;
  color: string;
  textColor: string;
  onPress: () => void;
}

const Button  = ({ text, color, textColor, onPress }: ButtonProps) => (
  <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
    <Text style={[styles.buttonText, { color: textColor }]}>{text}</Text>
  </TouchableOpacity>
);


export default Button;