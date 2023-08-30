/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

const mockNavigation = jest.fn(); jest.mock('@react-navigation/native', () => ({ ...jest.requireActual('@react-navigation/native'), useNavigation: () => { return mockNavigation; }, }));

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

jest.mock('react-native-wheel-pick', () => {});
jest.mock('react-native-date-picker', () => {});
jest.mock('react-native-linear-gradient', () => 'LinearGradient');
jest.mock('@react-navigation/elements', () => ({
    useHeaderHeight: jest.fn(() => 50), // Mock the header height value
  }));

  
// Note: import explicitly to use the types shiped with jest.
import {it} from '@jest/globals';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

