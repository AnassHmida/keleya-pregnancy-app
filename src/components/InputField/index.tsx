import React, {useState} from 'react';
import {
  TextInput,
  View,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  TextStyle,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './style';

type InputFieldProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  style?: {
    container: StyleProp<ViewStyle>;
    input: StyleProp<TextStyle>;
  };
};

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
         style={[styles.input, style?.input, { paddingRight: secureTextEntry ? 40 : 0 }]}
         value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.toggleButton}
          onPress={toggleSecureEntry}>
          <Icon name={secure ? 'eye-off' : 'eye'} size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default InputField;
