import React from 'react';
import { render } from '@testing-library/react-native';
import SignUp from '../app/signUPpage';

jest.mock('expo-sqlite', () => ({
    openDatabaseAsync: jest.fn(() => ({
        execSync: jest.fn(),
        transaction: jest.fn(),
        getFirstAsync: jest.fn(() => ({
            
        })),
    })),
}));

jest.mock('@react-navigation/native', () => ({
    useNavigation: () => ({
        navigate: jest.fn(),
    }),
    useRoute: () => ({
        params:{
            user: {
                id: 100,
            },
        }
    }),
}));

test('should render the signUPpage page', () => {
    const { getByTestId } = render(<SignUp />);

    const username = getByTestId('username');
    const usernameInput = getByTestId('usernameInput');
    const password = getByTestId('password');
    const passwordInput = getByTestId('passwordInput');
    const confirm = getByTestId('confirm');
    const confirmInput = getByTestId('confirmInput');
    const signUp = getByTestId('signUp');

    expect(username).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(password).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirm).toBeTruthy();
    expect(confirmInput).toBeTruthy();
    expect(signUp).toBeTruthy();
});