import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, ViewStyle } from 'react-native';
import { styles } from './style';


type ImageComponentProps = {
  source: ImageSourcePropType;
  style?: ImageStyle;
}

const ImageComponent = ({ source, style }: ImageComponentProps) => (
  <Image source={source} style={[styles.image, style]} resizeMode="cover" />
);


export default ImageComponent;
