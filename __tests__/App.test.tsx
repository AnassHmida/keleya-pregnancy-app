import 'react-native';


const mockNavigation = jest.fn();
jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => {
    return mockNavigation;
  },
}));

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
  useHeaderHeight: jest.fn(() => 50), 
}));


import {it} from '@jest/globals';


import renderer from 'react-test-renderer';
