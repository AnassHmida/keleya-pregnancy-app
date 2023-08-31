import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import {useNavigation} from '@react-navigation/native'; // Mock this module
import Form from '../index';
import {ButtonValidStyles} from '../../Button/style';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: jest.fn(() => 50), // Mock the header height value
}));

describe('Form component', () => {
  it('renders correctly with provided props', () => {
    const backMock = jest.fn();
    (useNavigation as jest.Mock).mockReturnValue({goBack: backMock});
    const onOriginalButtonPressMock = jest.fn();
    const onAdditionalButtonPressMock = jest.fn();

    const {getByText, getByTestId} = render(
      <Form
        headertitle="Header Title"
        OriginalButtonText="Original Button"
        AdditionalButtonText="Additional Button"
        onOriginalButtonPress={onOriginalButtonPressMock}
        onAdditionalButtonPress={onAdditionalButtonPressMock}
        showGradient={true}
        OriginalButtonStyles={ButtonValidStyles}
        AdditionalButtonStyles={ButtonValidStyles}
      />,
    );

    const headerTitle = getByText('Header Title');
    const originalButton = getByText('Original Button');
    const backbutton = getByTestId('smallSquare');
    const additionalButton = getByText('Additional Button');

    fireEvent.press(originalButton);
    fireEvent.press(backbutton);
    fireEvent.press(additionalButton);

    expect(headerTitle).toBeTruthy();
    expect(originalButton).toBeTruthy();
    expect(additionalButton).toBeTruthy();
    expect(backMock).toHaveBeenCalledTimes(1);
    expect(onOriginalButtonPressMock).toHaveBeenCalled();
    expect(onAdditionalButtonPressMock).toHaveBeenCalled();
  });
});
