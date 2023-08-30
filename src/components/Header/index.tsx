import React from 'react';
import {View, Text, TouchableOpacity, ImageSourcePropType} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Foundation';
import {styles} from './style';
import Colors from '../../constants/colors';
import ImageComponent from '../Image';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

type HeaderComponentProps = {
  showGradient?: boolean;
  logo?: ImageSourcePropType;
  headertitle?: string;
  icon?: string;
  headerimage?: ImageSourcePropType;
  handleBackPress?: () => void;
};

export const Header = ({
  showGradient,
  logo,
  icon,
  headertitle,
  headerimage,
  handleBackPress,
}: HeaderComponentProps) => {
  return (
    <View style={styles.header}>
      {showGradient && (
        <LinearGradient
          testID='gradientOverlay'
          colors={[Colors.WHITE_TRANSPARENT, Colors.WHITE]}
          style={[styles.gradientOverlay, {height: '5%'}]}
        />
      )}
      {!icon && !logo && (
        <TouchableOpacity testID="smallSquare" style={styles.smallSquare} onPress={handleBackPress}>
          <Icon name={'arrow-left'} size={24} color="black" />
        </TouchableOpacity>
      )}

      {headertitle && (
        <View
        testID={logo || icon ? 'headerLogoTitleContainer' : 'headerTitleContainer'}

          style={
            logo || icon
              ? styles.headerlogoTitleContainer
              : styles.headerTitleContainer
          }>
          <View style={styles.logoContainer}>
            {logo && (
              <ImageComponent
                testID='logo'
                source={logo}
                style={styles.logo}
                resizeMode={'center'}
              />
            )}
            {icon && <EvilIcons    testID='icon' name={icon} style={styles.icon} size={70} />}

            <Text
              style={
                logo || icon
                  ? styles.logoText
                  : [styles.title, styles.centerText]
              }>
              {headertitle}
            </Text>
          </View>
        </View>
      )}

      {headerimage && (
        <ImageComponent
          testID="headerImage"
          source={headerimage}
          style={
            showGradient
              ? {...styles.headerImage, marginTop: -100}
              : styles.headerImage
          }
          resizeMode="cover"
        />
      )}
    </View>
  );
};
