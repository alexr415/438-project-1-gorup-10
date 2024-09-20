import React from 'react';
import { render } from '@testing-library/react-native';
import Index from '../app/index';

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
    const { getByTestId } = render(<Index />);

    const usernameInput = getByTestId('username');
    const passwordInput = getByTestId('password');
    const signUpBtn = getByTestId('signUpBtn')
    const logInBtn = getByTestId('logInBtn')
    const debugBtn = getByTestId('debugBtn')

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(signUpBtn).toBeTruthy();
    expect(logInBtn).toBeTruthy();
    expect(debugBtn).toBeTruthy();
});