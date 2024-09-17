import React from 'react';
import { Alert, View, Text, Image, Button, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import * as SQLite from 'expo-sqlite';




const articlePage: React.FC = () => {
    const route = useRoute();
    const { article, user } = route.params;

    const addTag = (tag: string, articleID: number) => {
        const db = SQLite.openDatabaseSync('NewsDB.db');
        console.log('adding tag:', tag);
        console.log('articleID:', articleID);
        db.runSync(`INSERT INTO tag (articleID, name) VALUES (?,?)`, [articleID, tag]);
    }

    const handleFavorite = () => {
        const db = SQLite.openDatabaseSync('NewsDB.db');

        const favorite = db.getFirstSync('SELECT * FROM article WHERE url = ? AND userID = ?', [(article?.web_url ?? article.url), user.id]);
        if (favorite) {
            Alert.alert('Article already in favorites');
            return;
        }
        else {
            console.log('adding article to favorites');
            console.log("USER ID:" + user.id);
            let userID = user.id;
            console.log(article?.web_url ?? article.url);
            let url = article?.web_url ?? article.url;
            console.log(article?.multimedia?.[0]?.url ?? article?.media?.[0]?.['media-metadata']?.[2]?.url);
            let imageurl = article?.media?.[0]?.['media-metadata']?.[2]?.url
                ?? (article?.multimedia?.[0]?.url ? `https://www.nytimes.com/${article.multimedia[0].url}` : null);
            console.log(article?.headline?.main ?? article.title);
            let title = article?.headline?.main ?? article.title;
            console.log(article?.byline?.original ?? article.byline);
            let byline = article?.byline?.original ?? article.byline;
            console.log(article?.pub_date ?? article?.published_date);
            let date = article?.pub_date ?? article?.published_date;
            console.log(article.abstract);
            let abstr = article.abstract;
            console.log(article.source);
            let src = article.source;
            console.log(article?.section_name ?? article.section);
            let section = article?.section_name ?? article.section;
            let result = db.runSync(`INSERT INTO article (userID, url, imageurl, title, byline, date, abstr, src, section)
            VALUES (
                ?,?,?,?,?,?,?,?,?                  
            )`, [userID, url, imageurl, title, byline, date, abstr, src, section]);
            console.log('lastInsertRowId:', result.lastInsertRowId);
            if (article?.des_facet) {
                article.des_facet.forEach((tag: string) => {
                    addTag(tag, result.lastInsertRowId);
                });
            } else if (article?.keywords) {
                article.keywords.forEach((keyword: { value: string }) => {
                    addTag(keyword.value, result.lastInsertRowId);
                });
            }
            // db.execSync(`INSERT INTO article (userid, imageurl, title, date) VALUES (?,?,?,?);`, [userID, imageurl, title, date]);
            Alert.alert('Article added to favorites');
        }

    }

    console.log(article)
    
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
            <Text style={styles.articleTitle}>Title: {article?.headline?.main ?? article.title} </Text>
            <Text>By: {article?.byline?.original ?? article.byline} </Text>
            <Text>Published: {new Date(article?.pub_date ?? article?.published_date).toLocaleDateString()}</Text>

            <Text>Abstract: {article.abstract}</Text>



            <Text>Source: {article.source}</Text>
            <Text>Section: </Text>
            <TouchableOpacity style={styles.sectionButton} onPress={() => console.log(article?.section_name ?? article.section)}>
                <Text style={styles.sectionButtonText}>{article?.section_name ?? article.section}</Text>
            </TouchableOpacity>





            <Text> userID: {user.id}</Text>
            <Text>Tags:</Text>
            <View style={styles.tagsContainer}>
                {article?.des_facet ? (
                    article.des_facet.map((tag: string, index: number) => (
                        <TouchableOpacity key={index} style={styles.tagButton} onPress={() => console.log(tag)}>
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

            <Button title="Add To favorites" onPress={handleFavorite} />

            <Text>{'\n'}</Text>

            <Button title="Read more" onPress={() => Linking.openURL(article?.web_url ?? article.url)} />

            <Text>{article.content}</Text>

        </View>
    );
};

const styles = StyleSheet.create({

    view: {

    },
    tagsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        justifyContent: 'flex-start',
        marginHorizontal: 10,
    },
    sectionButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 15,
        padding: 1,
    },
    sectionButton: {
        marginHorizontal: 10,
        backgroundColor: 'green',
        borderRadius: 20,
        paddingVertical: 3,
        paddingHorizontal: 5,
        margin: 1,
        alignSelf: 'flex-start', // Add this line
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
        fontSize: 10,
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
        paddingHorizontal: 2,
        // borderRadius: 4,
        // margin: 5,

    },
});

export default articlePage;