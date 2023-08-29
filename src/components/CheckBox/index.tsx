import React from 'react';
import {TouchableOpacity, Text, View, StyleProp, ViewStyle} from 'react-native';
import {styles} from './style';

type CheckboxProps = {
  labelSegments: {text: string; bold?: boolean}[];
  checked: boolean;
  onPress: () => void;
  style: {
    checkboxstyle?: StyleProp<ViewStyle>;
    checkedboxstyle?: StyleProp<ViewStyle>;
  };
};

const Checkbox = ({labelSegments, checked, onPress, style}: CheckboxProps) => (
  <TouchableOpacity
    activeOpacity={1}
    style={styles.container}
    onPress={onPress}>
    <View style={[style.checkboxstyle, checked && style.checkedboxstyle]} />
    <Text>
      {labelSegments.map((segment, index) => (
        <Text key={index} style={segment.bold ? styles.boldText : null}>
          {segment.text}
        </Text>
      ))}
    </Text>
  </TouchableOpacity>
);

export default Checkbox;
