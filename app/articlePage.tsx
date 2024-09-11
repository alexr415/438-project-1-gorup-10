import React from 'react';
import { View, Text, Image, Button, TouchableOpacity, Linking, StyleSheet} from 'react-native';
import { useRoute } from '@react-navigation/native';




const articlePage: React.FC = () => {
    const route = useRoute();
    const { article } = route.params;
    return (
        <View style={styles.view}>
            <Image
                
                source={{
                    uri: article?.media?.[0]?.['media-metadata']?.[2]?.url
                        ?? (article?.multimedia?.[0]?.url ? `https://www.nytimes.com/${article.multimedia[0].url}` : null)
                        ?? 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg'
                }}
                style={styles.articleImage}
                resizeMode="contain"
            />
            <Text style= {styles.articleTitle}>Title: {article?.headline?.main ?? article.title} </Text>
            <Text>By: {article?.byline?.original ?? article.byline} </Text> 
            <Text>Published: {article?.pub_date?.substring(0, 10) ?? article.published_date}</Text>

            <Text>Abstract: {article.abstract}</Text>



            <Text>Source: {article.source}</Text>

            <Text>Section:{article?.section_name ?? article.section}</Text>




            

            <Text>Tags:</Text>
            <View style={styles.tagsContainer}>
    {article?.des_facet ? (
        article.des_facet.map((tag: string, index: number) => (
            <TouchableOpacity key={index} style={styles.tagButton} onPress={()=>console.log(tag)}>
                <Text style={styles.tagButtonText}>{tag}</Text>
            </TouchableOpacity>
        ))
    ) : (
        article?.keywords?.map((keyword: { value: string }, index: number) => (
            <TouchableOpacity key={index} style={styles.tagButton} onPress={() => console.log(keyword.value)}>
                <Text style={styles.tagButtonText}>{keyword.value}</Text>
            </TouchableOpacity>
        ))
    )}
</View>

            <Button title="Add To favorites" />

            <Text>{'\n'}</Text>

            <Button title="Read more" onPress={() => Linking.openURL(article?.web_url ?? article.url)} />

            <Text>{article.content}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    view:{
        
    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', 
        marginVertical: 10,
        justifyContent: 'flex-start',
    },
    tagButton: {
        backgroundColor: '#007BFF',  
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 5,
        margin: 1,
    },
    tagButtonText: {
        color: 'white',  
        fontWeight: 'bold',
        fontSize:10,
        padding: 1,
    },
    articleImage: {
        width: '100%',
        height: 200,
        marginBottom: 16,
        backgroundColor: 'black'
    },
    articleTitle: {
        lineHeight: 24,
        fontSize: 18,
        textTransform: "uppercase",
        fontWeight: 'bold',
        textAlign: 'left',
        // backgroundColor: '#0080FF',
        paddingTop: 10,
        paddingBottom: 10,
        paddingHorizontal:2,
        // borderRadius: 4,
        // margin: 5,
    },
});

export default articlePage;