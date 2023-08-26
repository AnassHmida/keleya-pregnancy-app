import React from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleProp,
  ViewStyle,
  StyleSheet,
  TextStyle,
} from 'react-native';
import Colors from '../../constants/colors';

type CheckboxProps = {
  label: string;
  checked: boolean;
  onPress: () => void;
  style: {
    checkboxstyle?: StyleProp<ViewStyle>;
    checkedboxstyle?: StyleProp<ViewStyle>;
    checkboxlabelstyle?: StyleProp<TextStyle>;
  };
};

const Checkbox = ({label, checked, onPress, style}: CheckboxProps) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={[style.checkboxstyle, checked && style.checkedboxstyle]} />
    <Text style={style.checkboxlabelstyle}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderColor: 'black',
    marginRight: 10,
  },
  checkboxLabel: {
    fontSize: 16,
  },
  checkedBox: {
    backgroundColor: Colors.BUBBLE_GUM,
    borderColor: Colors.BUBBLE_GUM,
  },
});

export default Checkbox;
