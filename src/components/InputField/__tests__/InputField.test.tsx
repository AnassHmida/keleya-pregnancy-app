import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import InputField from '../index';

describe('InputField component', () => {
  it('renders correctly with provided props', () => {
    const onChangeTextMock = jest.fn();

    const {getByPlaceholderText} = render(
      <InputField
        value="Test Value"
        onChangeText={onChangeTextMock}
        placeholder="Enter text"
      />,
    );

    const input = getByPlaceholderText('Enter text');
    expect(input).toBeTruthy();
  });

  it('toggles secureTextEntry and displays eye icon', () => {
    const onChangeTextMock = jest.fn();

    const {getByTestId} = render(
      <InputField
        value=""
        onChangeText={onChangeTextMock}
        placeholder="Password"
        secureTextEntry={true}
      />,
    );

    const toggleButton = getByTestId('toggleButton');
    fireEvent.press(toggleButton);

    expect(toggleButton).toBeTruthy();
  });
});
