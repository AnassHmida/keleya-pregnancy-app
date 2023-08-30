// ButtonGroupComponent.tsx
import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import Button from '../Button';
import {
  SubmitButtonInvalidStyles,
  SubmitButtonValidStyles,
  styles,
} from './style';

type ButtonGroupProps = {
  bottomText?: string;
  submittitle: string;
  onSubmit: () => void;
  isFormValid?: boolean;
};

const ButtonGroup = ({
  bottomText,
  submittitle,
  onSubmit,
  isFormValid,
}: ButtonGroupProps) => (
  <View style={styles.bottomContainer}>
    {bottomText && (
      <TouchableOpacity>
        <Text style={styles.bottomText}>{bottomText}</Text>
      </TouchableOpacity>
    )}
    <Button
      text={submittitle}
      onPress={onSubmit}
      style={isFormValid ? SubmitButtonValidStyles : SubmitButtonInvalidStyles}
    />
  </View>
);

export default ButtonGroup;
