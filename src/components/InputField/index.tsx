import React, { useState } from 'react';
import { TextInput, View, StyleProp, ViewStyle, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: StyleProp<ViewStyle>;
}

const InputField = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
}: InputFieldProps) => {
  const [secure, setSecure] = useState(secureTextEntry || false);
  const toggleSecureEntry = () => {
    setSecure(!secure);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
      {/* Conditional rendering of the toggle button */}
      {secureTextEntry && (
        <TouchableOpacity style={styles.toggleButton} onPress={toggleSecureEntry}>
          <Icon name={secure ? 'eye-slash' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    fontSize: 16,
  },
  toggleButton: {
    position: 'absolute',
    right: 10,
    bottom: 12,
  },
});

export default InputField;
