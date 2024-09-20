import React from 'react';
import { render } from '@testing-library/react-native';
import SuggestionsPage from '../app/suggestionsPage';

jest.mock('expo-sqlite', () => ({
    openDatabaseSync: jest.fn(() => ({
        execSync: jest.fn(),
        transaction: jest.fn(),
        getFirstAsync: jest.fn(() => ({})),
        getAllSync: jest.fn(() => ({})),
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

test('should render the suggestionsPage page', () => {
    const { getByTestId } = render(<SuggestionsPage />);

    const refreshBtn = getByTestId('refreshBtn');
    const scrollView = getByTestId('scrollView');

    expect(scrollView).toBeTruthy();
    expect(refreshBtn).toBeTruthy();
});