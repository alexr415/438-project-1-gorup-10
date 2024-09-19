import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../../app/index';  

jest.mock('expo-sqlite', () => ({
    openDatabaseSync: jest.fn(() => ({
      execSync: jest.fn(),
      transaction: jest.fn(),
    })),
  }));
  jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
      navigate: jest.fn(),
    }),
  }));


test('should render the index page', () => {
  const { getByTestId } = render(<Index/>);

  
  const welcomeText = getByTestId('username'); 
  
  
  expect(welcomeText).toBeTruthy();
});