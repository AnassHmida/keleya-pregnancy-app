import React from 'react';
import {KeyboardAvoidingView, Platform, Text, View} from 'react-native';
import {styles} from './style';
import {useHeaderHeight} from '@react-navigation/elements';

type ContentProps = {
  title?: string;
  render: () => React.ReactNode;
  showGradient?: boolean;
};

const Content = ({title, render, showGradient}: ContentProps) => {
  const headerHeight = useHeaderHeight();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={[styles.formContainer, showGradient && {marginTop: 30}]}
      keyboardVerticalOffset={
        Platform.OS === 'ios' ? headerHeight : headerHeight
      }>
      <View>
        {title && <Text style={styles.title}>{title}</Text>}
        {render()}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Content;
