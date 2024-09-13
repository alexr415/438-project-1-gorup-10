import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

import { Alert, TouchableOpacity, Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Linking } from "react-native";

const API_KEY = '8duji3hTFBI6T8qSfdg1VWLixNcAnsV8';



const homePage: React.FC = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('')

    const fetchArticles = async (searchQuery = '', beginDate = '', endDate = '') => {
        setLoading(true);
        let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
        if (searchQuery.trim()) {
            url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${encodeURIComponent(searchQuery)}&api-key=8duji3hTFBI6T8qSfdg1VWLixNcAnsV8`;
            if(beginDate){
            url += `&begin_date=${beginDate.replace(/-/g,"")}`;
            }
            if(endDate){
                url += `&end_date=${endDate.replace(/-/g,"")}`;
            }

            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (data.status === 'OK') {
                    setArticles(data.response.docs);
                    console.log("fetch successful");

                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        }
        else {
            try {
                const response = await fetch(url);
                const data = await response.json();
                console.log(data);
                if (data.status === 'OK') {
                    setArticles(data.results);
                    console.log("fetch successful");

                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        }

    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleSearch = () => {
        fetchArticles(query);
    };

    const handleArticlePress = (url: string) => {
        Linking.openURL(url)
    };
    const navigation = useNavigation();



    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for articles"
                value={query}
                onChangeText={setQuery}

            />
            {/* Filters: glocations(text input), news_desk (set values from dropdown)), source(text input), subject(text input)*/}
            <Button title="Search" onPress={handleSearch} />

            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                {loading ? (
                    <Text>Loading...</Text>
                ) : articles?.length > 0 ? (
                    articles.map((article, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('articlePage', { article })}>
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

export default homePage;