import React from 'react';
import { render } from '@testing-library/react-native';
import HomePage from '../app/homePage';

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

test('should render the homePage page', () => {
    const { getByTestId } = render(<HomePage />);

    const articleSearch = getByTestId('articleSearch');
    const beginDate = getByTestId('beginDate');
    const endDate = getByTestId('endDate');
    const searchBtn = getByTestId('searchBtn');
    const ModalBtn = getByTestId('ModalBtn');
    const favoritesBtn = getByTestId('favoritesBtn');
    const logoutBtn = getByTestId('logoutBtn');
    const accountBtn = getByTestId('accountBtn');
    const scrollView = getByTestId('scrollView');

    expect(scrollView).toBeTruthy();
    expect(articleSearch).toBeTruthy();
    expect(beginDate).toBeTruthy();
    expect(endDate).toBeTruthy();
    expect(searchBtn).toBeTruthy();
    expect(ModalBtn).toBeTruthy();
    expect(favoritesBtn).toBeTruthy();
    expect(logoutBtn).toBeTruthy();
    expect(accountBtn).toBeTruthy();
});