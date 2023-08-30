import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Header } from '../index';

jest.mock('react-native-linear-gradient', () => 'LinearGradient');

describe('Header component', () => {
  it('renders correctly without title, logo, and icon', () => {
    const handleBackPressMock = jest.fn();

    const { getByTestId } = render(
      <Header showGradient={false} handleBackPress={handleBackPressMock} />
    );

    const smallSquare = getByTestId('smallSquare');
    expect(smallSquare).toBeTruthy();
  });

  it('renders correctly with title and logo', () => {
    const { getByText, getByTestId } = render(
      <Header
        showGradient={true}
        logo={{ uri: 'logo-uri' }}
        headertitle="Header Title"
      />
    );

    const gradientOverlay = getByTestId('gradientOverlay');
    const logo = getByTestId('logo');
    const title = getByText('Header Title');
    expect(gradientOverlay).toBeTruthy();
    expect(logo).toBeTruthy();
    expect(title).toBeTruthy();
  });
  it('renders correctly with header image and text', () => {
    const { getByText, getByTestId } = render(
      <Header
        showGradient={false}
        headertitle="Header Title"
        headerimage={{ uri: 'image-uri' }}
      />
    );
  
    const smallSquare = getByTestId('smallSquare');
    const title = getByText('Header Title');
    const headerImage = getByTestId('headerImage');
    expect(smallSquare).toBeTruthy();
    expect(title).toBeTruthy();
    expect(headerImage).toBeTruthy();
  });
  
});
