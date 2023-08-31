import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import ButtonGroup from '../index';

describe('ButtonGroup component', () => {
  it('renders correctly with original button', () => {
    const onOriginalButtonPressMock = jest.fn();

    const {getByText} = render(
      <ButtonGroup
        originalbuttontitle="Original Button"
        onOriginalButtonPress={onOriginalButtonPressMock}
        originalButtonStyles={{containerstyle: {backgroundColor: 'green'}}}
      />,
    );

    const originalButton = getByText('Original Button');
    expect(originalButton).toBeTruthy();
  });

  it('calls onOriginalButtonPress when original button is clicked', () => {
    const onOriginalButtonPressMock = jest.fn();

    const {getByText} = render(
      <ButtonGroup
        originalbuttontitle="Original Button"
        onOriginalButtonPress={onOriginalButtonPressMock}
        originalButtonStyles={{containerstyle: {backgroundColor: 'green'}}}
      />,
    );

    const originalButton = getByText('Original Button');
    fireEvent.press(originalButton);
    expect(onOriginalButtonPressMock).toHaveBeenCalled();
  });

  it('renders correctly with additional button', () => {
    const onAdditionalButtonPressMock = jest.fn();

    const {getByText} = render(
      <ButtonGroup
        originalbuttontitle="Original Button"
        additionalbuttontitle="Additional Button"
        onOriginalButtonPress={() => {}}
        onAdditionalButtonPress={onAdditionalButtonPressMock}
        originalButtonStyles={{containerstyle: {backgroundColor: 'green'}}}
        additionalButtonStyles={{containerstyle: {backgroundColor: 'blue'}}}
      />,
    );

    const additionalButton = getByText('Additional Button');
    expect(additionalButton).toBeTruthy();
  });

  it('calls onAdditionalButtonPress when additional button is clicked', () => {
    const onAdditionalButtonPressMock = jest.fn();

    const {getByText} = render(
      <ButtonGroup
        originalbuttontitle="Original Button"
        additionalbuttontitle="Additional Button"
        onOriginalButtonPress={() => {}}
        onAdditionalButtonPress={onAdditionalButtonPressMock}
        originalButtonStyles={{containerstyle: {backgroundColor: 'green'}}}
        additionalButtonStyles={{containerstyle: {backgroundColor: 'blue'}}}
      />,
    );

    const additionalButton = getByText('Additional Button');
    fireEvent.press(additionalButton);
    expect(onAdditionalButtonPressMock).toHaveBeenCalled();
  });
});
