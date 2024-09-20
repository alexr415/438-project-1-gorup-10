import React from 'react';
import { render } from '@testing-library/react-native';
import UpdateInfo from '../app/updateInfo';

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

test('should render the updateInfo page', () => {
    const { getByTestId } = render(<UpdateInfo />);

    const username = getByTestId('username');
    const usernameInput = getByTestId('usernameInput');
    const password = getByTestId('password');
    const passwordInput = getByTestId('passwordInput');
    const confirmBtn = getByTestId('confirmBtn');
    const backBtn = getByTestId('backBtn');


    expect(username).toBeTruthy();
    expect(usernameInput).toBeTruthy();
    expect(password).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmBtn).toBeTruthy();
    expect(backBtn).toBeTruthy();
});