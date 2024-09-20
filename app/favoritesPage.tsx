import React, { useEffect, useState, useCallback } from 'react';
import { Text, ScrollView, View, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import * as SQLite from 'expo-sqlite';

import { useRoute, useFocusEffect, useNavigation } from '@react-navigation/native';

const FavoritesPage: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { user } = route.params;
    const [articles, setArticles] = useState<any[]>([]);
    const fetchArticles = () => {

        console.log("fetching articles from db");
        const db = SQLite.openDatabaseSync('NewsDB.db');
        const articlesFromDB = db.getAllSync('SELECT * FROM article Where userID = ?', [user.id]);
        // console.log(articlesFromDB);
        setArticles(articlesFromDB);
    }

    useFocusEffect(
        useCallback(() => {
            fetchArticles();
        }, [])
    );

    return (


        <View>
            <Button testID='suggestBtn' title="suggestions" onPress={() => navigation.navigate('suggestionsPage', { user })} />
            <Text testID='title'>Favorite Articles</Text>
            <ScrollView testID='scrollView'>

                {articles?.length > 0 ? (
                    articles.map((article, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('articlePage', { article, user })}>
                            <View style={styles.flexBox} key={index}>
                                <View style={styles.textContainer}>
                                    <Text style={styles.articleText}>
                                        {article?.title ?? "No title available"}
                                    </Text>
                                    <Text style={styles.articleDate}>
                                        {new Date(article?.date).toLocaleDateString() ?? "No date available"}
                                    </Text>
                                </View>
                                <Image
                                    style={styles.articleImage}
                                    source={{
                                        uri: article?.imageurl ?? 'https://wingandaprayer.live/wp-content/uploads/2018/07/no-image-available.jpg'
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

export default FavoritesPage;