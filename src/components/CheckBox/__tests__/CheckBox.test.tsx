import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Checkbox from '../index';

describe('Checkbox component', () => {
  it('renders correctly with label segments', () => {
    const { getByText } = render(
      <Checkbox
        labelSegments={[
          { text: 'Segment 1' },
          { text: 'Segment 2', bold: true },
        ]}
        checked={false}
        onPress={() => {}}
        style={{ checkboxstyle: {}, checkedboxstyle: {} }}
      />
    );

    const segment1 = getByText('Segment 1');
    const segment2 = getByText('Segment 2');
    expect(segment1).toBeTruthy();
    expect(segment2).toBeTruthy();
  });

  it('renders checkbox with checked style when checked is true', () => {
    const { getByTestId } = render(
      <Checkbox
        labelSegments={[]}
        checked={true}
        onPress={() => {}}
        style={{
          checkboxstyle: { width: 20, height: 20 },
          checkedboxstyle: { backgroundColor: 'blue' },
        }}
      />
    );

    const checkbox = getByTestId('checkbox');
    expect(checkbox).toHaveStyle({ backgroundColor: 'blue' });
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <Checkbox
        labelSegments={[]}
        checked={false}
        onPress={onPressMock}
        style={{ checkboxstyle: {}, checkedboxstyle: {} }}
      />
    );

    const checkbox = getByTestId('checkbox');
    fireEvent.press(checkbox);
    expect(onPressMock).toHaveBeenCalled();
  });
});
