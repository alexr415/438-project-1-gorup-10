import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';

const SuggestionsPage: React.FC = () => {
    const route = useRoute();
    const { user } = route.params;
    const [tags, setTags] = useState<any[]>([]);
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [tagsUsed, setTagsUsed] = useState<any[]>([]);

    const fetchTags = () => {
        const db = SQLite.openDatabaseSync('NewsDB.db');
        const result = db.getAllSync(`SELECT tag.name FROM user JOIN article ON user.id = article.userID JOIN tag ON article.id = tag.articleID WHERE user.id = ?;`, [user.id]);
        console.log(result);
        setTags(result);
        return result?.length;
    }
    useEffect(() => {
        fetchTags();
    }, []);
    
    useEffect(() => {
        if (tags.length > 0) {
            fetchSuggestions();
        }
    }, [tags]);

    const fetchSuggestions = async () => {
        setLoading(true);
        const randomIndex = Math.floor(Math.random() * tags.length);
       
        const suggestion = tags[Math.floor(Math.random() * tags.length)];
        const search1 =tags[Math.floor(Math.random() * tags.length)].name;
        // const search2 =tags[Math.floor(Math.random() * tags.length)].name;
        // const search3 =tags[Math.floor(Math.random() * tags.length)].name;
        console.log("Search Query: " + search1);
        let searchQuery = search1;
        let url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${encodeURIComponent(searchQuery)}&api-key=8duji3hTFBI6T8qSfdg1VWLixNcAnsV8`
        try {

            const response = await fetch(url);
            const data = await response.json();
            // console.log(data);
            if (data.status === 'OK') {
                setSuggestions(data.response.docs);
                //console.log(suggestions);
                
            }
            setTagsUsed([search1]);
        } catch (error) {
            console.error('Error fetching articles:', error);
        }finally {
            setLoading(false);
        }
    }


    return (
        <View>
            <Button title="refresh" onPress={() => fetchSuggestions()} />
            <ScrollView contentContainerStyle={styles.scrollViewContent}>

            {tagsUsed && <Text>{tagsUsed}</Text>}
                { loading ? (
                    <Text>Loading...</Text>
                ) : suggestions?.length > 0 ? (
                    suggestions.map((article, index) => (
                        <TouchableOpacity key={index}>
                            <View style={styles.flexBox} key={index}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.articleText}>
                                        {article?.headline?.main ?? article?.title ?? "No title available"}
                                    </Text>
                                    <Text style={styles.articleDate}>
                                        {new Date(article?.pub_date ?? article?.published_date).toLocaleDateString() ?? "No date available"}
                                    </Text>
                                </View>
                                <Image
                                    style={styles.articleImage}
                                    source={{
                                        uri: article?.media?.[0]?.['media-metadata']?.[2]?.url
                                            ?? (article?.multimedia?.[0]?.url ? `https://www.nytimes.com/${article.multimedia[0].url}` : null)
                                            ?? 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg'
                                    }}
                                />
                            </View>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>No results</Text>
                )}

            </ScrollView>
            
            
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
    },
    container: {
        flex: 1,
        padding: 5,
    },
    scrollViewContent: {
        flexGrow: 1,
    },
    flexBox: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#61DAFB',
        borderRadius: 4,
        marginBottom: 2,
        height: 100,
    },
    textContainer: {
        flex: 1, 
        justifyContent: 'center',
    },
    articleText: {
        fontWeight: 'bold',
        fontFamily: 'fantasy',
        marginBottom: 5,
    },
    articleDate: {
        fontStyle: 'italic',
        color: '#333',
    },
    articleImage: {
        borderRadius: 10,
        width: 80,
        height: 80,
        marginLeft: 10, 
    },
});

export default SuggestionsPage;