import React from 'react';
import {render} from '@testing-library/react-native';
import ImageComponent from '../index';
import images from '../../../constants/images';

describe('ImageComponent', () => {
  it('renders correctly with provided source', () => {
    const {getByTestId} = render(
      <ImageComponent testID="myImage" source={images.name} />,
    );

    const image = getByTestId('myImage');
    expect(image).toBeTruthy();
  });

  it('applies custom style and resizeMode', () => {
    const {getByTestId} = render(
      <ImageComponent
        testID="myImage"
        source={images.name}
        style={{width: 100, height: 100}}
        resizeMode="contain"
      />,
    );

    const image = getByTestId('myImage');
    expect(image).toHaveStyle({width: 100, height: 100});
  });
});
