import React from 'react';
import { render } from '@testing-library/react-native';
import FavoritesPage from '../app/favoritesPage';

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
    useRoute: () => ({
        params:{
            article: {
                imageurl: 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg',
                title: 'This is a Test Title',
                byline: 'Andrew Aguilar',
                date: '09-18-2001',
                abstract: 'Lorem ipsum, and some such. This is such a great summary of my topics and points.',
                source: 'I made it tf up',
                section: 'Quadrant Four',
                keywords:[
                    {value: 'Thrify'},
                    {value: 'woah, so awesome'}
                ]
            },
            user: {
                id: 100,
            },
        }
    }),
    useFocusEffect: () => ({
        useCallback: jest.fn()
    })
}));

test('should render the favoritesPage page', () => {
    const { getByTestId } = render(<FavoritesPage />);

    const suggestBtn = getByTestId('suggestBtn');
    const title = getByTestId('title');
    const scrollView = getByTestId('scrollView');

    expect(scrollView).toBeTruthy();
    expect(suggestBtn).toBeTruthy();
    expect(title).toBeTruthy();
});