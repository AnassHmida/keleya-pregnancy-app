import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

type ButtonProps = {
  text: string;
  onPress: () => void;
  style: {
    containerstyle: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
  };
};

const Button = ({text, onPress, style}: ButtonProps) => (
  <TouchableOpacity style={style.containerstyle} onPress={onPress}>
    <Text style={[style.textStyle]}>{text}</Text>
  </TouchableOpacity>
);

export default Button;
