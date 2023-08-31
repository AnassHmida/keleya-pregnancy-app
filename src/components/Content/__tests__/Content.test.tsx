import React from 'react';
import {render} from '@testing-library/react-native';
import Content from '../index';
import {Text} from 'react-native';

// Mock the useHeaderHeight function
jest.mock('@react-navigation/elements', () => ({
  useHeaderHeight: jest.fn(() => 50), // Mock the header height value
}));

describe('Content component', () => {
  it('renders correctly without title and gradient', () => {
    const renderContentMock = jest.fn(() => <Text>Rendered Content</Text>);

    const {getByText} = render(<Content render={renderContentMock} />);

    const renderedContent = getByText('Rendered Content');
    expect(renderedContent).toBeTruthy();
  });

  it('renders correctly with title and gradient', () => {
    const renderContentMock = jest.fn(() => <Text>Rendered Content</Text>);

    const {getByText} = render(
      <Content
        title="My Title"
        render={renderContentMock}
        showGradient={true}
      />,
    );

    const title = getByText('My Title');
    const renderedContent = getByText('Rendered Content');
    expect(title).toBeTruthy();
    expect(renderedContent).toBeTruthy();
  });
});
