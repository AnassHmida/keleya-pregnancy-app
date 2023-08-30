import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Button from '../index';

describe('Button component', () => {
  it('renders correctly', () => {
    const { getByText } = render(
      <Button
        text="Test Button"
        onPress={() => {}}
        style={{
          containerstyle: { backgroundColor: 'blue' },
          textstyle: { color: 'white' },
        }}
      />
    );

    const buttonText = getByText('Test Button');
    expect(buttonText).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Click Me" onPress={onPressMock} style={{ containerstyle: {} }} />
    );

    const button = getByText('Click Me');
    fireEvent.press(button);
    expect(onPressMock).toHaveBeenCalled();
  });
});
