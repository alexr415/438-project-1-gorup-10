import React from 'react';
import { render } from '@testing-library/react-native';
import ArticlePage from '../app/articlePage';

jest.mock('expo-sqlite', () => ({
    openDatabaseSync: jest.fn(() => ({
        execSync: jest.fn(),
        transaction: jest.fn(),
    })),
}));

jest.mock('@react-navigation/native', () => ({
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
            }
        }
    }),
}));

test('should render the articlePage page', () => {
    const { getByTestId } = render(<ArticlePage />);

    const image = getByTestId('image');
    const title = getByTestId('title');
    const byLine = getByTestId('byLine')
    const published = getByTestId('published')
    const abstract = getByTestId('abstract')
    const source = getByTestId('source')
    const section = getByTestId('section')
    const tagLabel = getByTestId('tagLabel')
    const addFavBtn = getByTestId('addFavBtn')
    const readMore = getByTestId('readMore')

    expect(image).toBeTruthy();
    expect(title).toBeTruthy();
    expect(byLine).toBeTruthy();
    expect(published).toBeTruthy();
    expect(abstract).toBeTruthy();
    expect(source).toBeTruthy();
    expect(section).toBeTruthy();
    expect(tagLabel).toBeTruthy();
    expect(addFavBtn).toBeTruthy();
    expect(readMore).toBeTruthy();
});

test('Should populate the fields correctly', () => {
    const { getByTestId } = render(<ArticlePage />)

    const title = getByTestId('title');
    const byLine = getByTestId('byLine')
    const published = getByTestId('published')
    const abstract = getByTestId('abstract')
    const source = getByTestId('source')

    // check for an array of strings because this is now the component is rendered internally
    expect(title.props.children).toStrictEqual(['Title: ', 'This is a Test Title'])
    expect(byLine.props.children).toStrictEqual(['By: ', 'Andrew Aguilar'])
    expect(published.props.children).toStrictEqual(['Published: ', '9/18/2001'])
    expect(abstract.props.children).toStrictEqual(['Abstract: ', 'Lorem ipsum, and some such. This is such a great summary of my topics and points.'])
    expect(source.props.children).toStrictEqual(['Source: ', 'I made it tf up'])
});