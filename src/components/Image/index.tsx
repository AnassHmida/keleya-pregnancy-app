import React from 'react';
import {
  Image,
  ImageResizeMode,
  ImageSourcePropType,
  ImageStyle,
} from 'react-native';
import {styles} from './style';

type ImageComponentProps = {
  source: ImageSourcePropType;
  style?: ImageStyle;
  resizeMode?: ImageResizeMode;
};

const ImageComponent = ({source, style, resizeMode}: ImageComponentProps) => (
  <Image
    source={source}
    style={[styles.image, style]}
    resizeMode={resizeMode}
  />
);

export default ImageComponent;
