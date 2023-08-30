import React from 'react';
import {View, Text, TouchableOpacity, ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Foundation';
import {styles} from './style';
import Colors from '../../constants/colors';
import ImageComponent from '../Image';

type HeaderComponentProps = {
  showGradient?: boolean;
  headertitle?: string;
  headerimage: ImageSourcePropType; // Replace 'any' with the actual type of the image
  handleBackPress: () => void;
};

export const Header = ({
  showGradient,
  headertitle,
  headerimage,
  handleBackPress,
}: HeaderComponentProps) => (
  <View style={styles.header}>
    {showGradient && (
      <LinearGradient
        colors={[Colors.WHITE_TRANSPARENT, Colors.WHITE]}
        style={[styles.gradientOverlay, {height: '5%'}]}
      />
    )}
    <TouchableOpacity style={styles.smallSquare} onPress={handleBackPress}>
      <Icon name={'arrow-left'} size={24} color="black" />
    </TouchableOpacity>
    {headertitle && (
      <View style={styles.headerTitleContainer}>
        <Text style={[styles.title, styles.centerText]}>{headertitle}</Text>
      </View>
    )}

    <ImageComponent
      source={headerimage}
      style={
        showGradient
          ? {...styles.headerImage, marginTop: -100}
          : styles.headerImage
      }
      resizeMode="cover"
    />
  </View>
);
