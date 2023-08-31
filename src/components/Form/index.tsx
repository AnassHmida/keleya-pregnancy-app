import React from 'react';
import {
  View,
  ImageSourcePropType,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';
import {Header} from '../Header';
import Content from '../Content';
import ButtonGroup from '../ButtonGroup';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type FormProps = {
  title?: string;
  icon?: string;
  headertitle?: string;
  onAdditionalButtonPress?: () => void;
  onOriginalButtonPress: () => void;
  OriginalButtonStyles: {
    containerstyle: StyleProp<ViewStyle>;
    textstyle?: StyleProp<TextStyle>;
  };
  AdditionalButtonStyles?: {
    containerstyle: StyleProp<ViewStyle>;
    textstyle?: StyleProp<TextStyle>;
  };
  OriginalButtonText: string;
  AdditionalButtonText?: string;
  headerimage?: ImageSourcePropType;
  render?: () => React.ReactNode;
  logo?: ImageSourcePropType;
  bottomText?: string;
  showGradient?: boolean;
};

const Form = ({
  title,
  headerimage,
  headertitle,
  OriginalButtonText,
  AdditionalButtonText,
  onOriginalButtonPress,
  onAdditionalButtonPress,
  logo,
  icon,
  render,
  OriginalButtonStyles,
  AdditionalButtonStyles,
  showGradient,
}: FormProps) => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    console.log('vkac pressss');
    navigation.goBack();
  };

  return (
    <View
      style={
        render
          ? styles.container
          : [styles.container, {backgroundColor: Colors.WHITE}]
      }>
      <Header
        logo={logo}
        icon={icon}
        headerimage={headerimage}
        handleBackPress={handleBackPress}
        headertitle={headertitle}
        showGradient={showGradient}
      />

      {render && (
        <Content render={render} title={title} showGradient={showGradient} />
      )}

      <ButtonGroup
        additionalbuttontitle={AdditionalButtonText}
        originalbuttontitle={OriginalButtonText}
        onOriginalButtonPress={onOriginalButtonPress}
        onAdditionalButtonPress={onAdditionalButtonPress}
        originalButtonStyles={OriginalButtonStyles}
        additionalButtonStyles={AdditionalButtonStyles}
      />
    </View>
  );
};

export default Form;
