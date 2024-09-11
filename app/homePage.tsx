import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";

import {Alert, TouchableOpacity, Text, View, Button, StyleSheet, ScrollView, TextInput, Image } from "react-native";

const API_KEY = '1f4275f92db343f4b6ee3d7dcd6bc730';



const homePage: React.FC = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');

    const fetchArticles = async (searchQuery = '') => {
        setLoading(true);
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}`;
        if (searchQuery.trim()) {
            url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchQuery)}&apiKey=${API_KEY}`;
        }
        try {
            const response = await fetch(url);
            const data = await response.json();
            if (data.status === 'ok') {
                setArticles(data.articles);
                console.log("fetch successful");
            }
        } catch (error) {
            console.error('Error fetching articles:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchArticles();
    }, []);

    const handleSearch = () => {
        fetchArticles(query);
    };

    const handleArticlePress = (title: string) => {
        Alert.alert('Article Selected', title);
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
            <Button title="Search" onPress={handleSearch} />

            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                {loading ? (
                    <Text>Loading...</Text>
                ) : articles.length > 0 ? (
                    articles.map((article, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('articlePage', { article })}>
                        <View style={styles.flexBox} key={index}>
                            <Text style={styles.articleText}>{article?.title ?? "No title available"}</Text>
                            <Image style={styles.articleImage} source={{ uri: article?.urlToImage ?? 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg' }} />
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
        padding: 10,
        backgroundColor: '#61DAFB',
        borderRadius: 4,
        marginBottom: 2,
        height: 100,
    },
    articleText: {
        marginTop: 10,
        justifyContent: 'center',
        fontWeight: 'bold',
        fontFamily: 'fantasy',
        flex: 1,
        marginRight: 10,
    },
    articleImage: {
        borderRadius: 10,
        width: 80,
        height: 80,
        alignSelf: 'flex-end',
    },
});

export default homePage;