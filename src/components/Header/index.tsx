import React from 'react';
import { View, Text, TouchableOpacity, ImageSourcePropType } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Foundation';
import { styles } from './style';
import Colors from '../../constants/colors';
import ImageComponent from '../Image';
import images from '../../constants/images';

type HeaderComponentProps = {
  showGradient?: boolean;
  logo?: ImageSourcePropType;
  headertitle?: string;
  headerimage?: ImageSourcePropType;
  handleBackPress?: () => void;
};

export const Header = ({
  showGradient,
  logo,
  headertitle,
  headerimage,
  handleBackPress,
}: HeaderComponentProps) => (
  <View style={styles.header}>
    {showGradient && (
      <LinearGradient
        colors={[Colors.WHITE_TRANSPARENT, Colors.WHITE]}
        style={[styles.gradientOverlay, { height: '5%' }]}
      />
    )}
    {!logo && <TouchableOpacity style={styles.smallSquare} onPress={handleBackPress}>
      <Icon name={'arrow-left'} size={24} color="black" />
    </TouchableOpacity>}
    {headertitle && (
      <View style={logo ? styles.headerlogoTitleContainer : styles.headerTitleContainer}>
        <View style={styles.logoContainer}>
          {logo && <ImageComponent
            source={logo}
            style={styles.logo}
            resizeMode={'center'}
          />}

          <Text style={logo ? styles.logoText : [styles.title, styles.centerText]}>{headertitle}</Text>
        </View>
      </View>
    )}

    {headerimage && <ImageComponent
      source={headerimage}
      style={
        showGradient
          ? { ...styles.headerImage, marginTop: -100 }
          : styles.headerImage
      }
      resizeMode="cover"
    />
    }
  </View>
);