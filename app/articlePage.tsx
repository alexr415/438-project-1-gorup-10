import React from 'react';
import { View, Text, Image } from 'react-native';
import { useRoute } from '@react-navigation/native';




const articlePage: React.FC= () => {
    const route = useRoute();
    const { article } = route.params; 
    return (
        <View>
            <Image source={{ uri: article?.urlToImage ?? 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg' }} style={{ width: '100%', height: 200}} />
            <Text>{article.title}</Text>
            
            <Text>{article.description}</Text>
            
            <Text>{article.content}</Text>

        </View>
    );
};

export default articlePage;