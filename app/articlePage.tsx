import React from 'react';
import { View, Text, Image, Button, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';




const articlePage: React.FC = () => {
    const route = useRoute();
    const { article } = route.params;
    return (
        <View>
            <Image
                source={{
                    uri: article?.media?.[0]?.['media-metadata']?.[2]?.url
                        ?? (article?.multimedia?.[0]?.url ? `https://www.nytimes.com/${article.multimedia[0].url}` : null)
                        ?? 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg'
                }}
                style={{ width: '100%', height: 200 }}
                resizeMode="contain"
            />
            <Text>Title: {article?.headline?.main ?? article.title} </Text>

            <Text>Abstract: {article.abstract}</Text>

            <Text>Source: {article.source}</Text>

            <Text>Section:{article?.section_name ?? article.section}</Text>

            <Text>Published: {article?.pub_date?.substring(0, 10) ?? article.published_date}</Text>

            <Text>By: {article?.byline?.original ?? article.byline} </Text>

            <Text>Tags:</Text>
            {article?.des_facet ? (
                article.des_facet.map((tag: string, index: number) => (
                    <Text key={index}>{tag}</Text>
                ))
            ) : (
                article?.keywords?.map((keyword: { value: string }, index: number) => (
                    <Text key={index}>{keyword.value}</Text>
                ))
            )}

            <Button title="Add To favorites" />

            <Text>{'\n'}</Text>

            <Button title="Read more" onPress={() => Linking.openURL(article?.web_url ?? article.url)} />

            <Text>{article.content}</Text>

        </View>
    );
};

export default articlePage;