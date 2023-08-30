import React from 'react';
import { TouchableOpacity, Text, View, StyleProp, ViewStyle, TextStyle } from 'react-native';
import Button from '../Button';
import { styles } from './style';

type ButtonGroupProps = {
  bottomText?: string;
  originalbuttontitle: string;
  additionalbuttontitle?: string;
  isFormValid?: boolean;
  additionalButtonStyles?: {
    containerstyle: StyleProp<ViewStyle>;
    textstyle?: StyleProp<TextStyle>;
  };
  originalButtonStyles: {
    containerstyle: StyleProp<ViewStyle>;
    textstyle?: StyleProp<TextStyle>;
  };
  onOriginalButtonPress: () => void;
  onAdditionalButtonPress?: () => void;
};

const ButtonGroup = ({
  additionalbuttontitle,
  originalbuttontitle,
  onOriginalButtonPress,
  additionalButtonStyles,
  originalButtonStyles,
  onAdditionalButtonPress,
}: ButtonGroupProps) => (
    <View style={styles.bottomContainer}>
    {additionalbuttontitle && additionalButtonStyles && onAdditionalButtonPress && (
      <Button
        text={additionalbuttontitle}
        onPress={onAdditionalButtonPress}
        style={additionalButtonStyles}
      />
    )}
    <Button
      text={originalbuttontitle}
      onPress={onOriginalButtonPress}
      style={originalButtonStyles}
    />
  </View>
);

export default ButtonGroup;