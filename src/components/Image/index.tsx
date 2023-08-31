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
  testID?: string;
};

const ImageComponent = ({
  source,
  style,
  resizeMode,
  testID,
}: ImageComponentProps) => (
  <Image
    testID={testID}
    source={source}
    style={[styles.image, style]}
    resizeMode={resizeMode}
  />
);

export default ImageComponent;
