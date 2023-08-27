import React, { useState } from 'react';
import { TextInput, View, StyleProp, ViewStyle, StyleSheet, TouchableOpacity, TextStyle } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 

interface InputFieldProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  style?:{
    container:StyleProp<ViewStyle>;
    input:StyleProp<TextStyle>;
  } 
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
    <View style={[styles.container, style?.container]}>
      <TextInput
        style={[styles.input,style?.input]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
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
    fontFamily:'MuseoSansRounded-500',
    paddingLeft:30,
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
