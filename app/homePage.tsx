import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";


import { Modal, Alert, TouchableOpacity, Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Linking } from "react-native";
import { Dropdown } from 'react-native-element-dropdown';

import * as SQLite from 'expo-sqlite';
import { useRoute } from '@react-navigation/native';



const API_KEY = '8duji3hTFBI6T8qSfdg1VWLixNcAnsV8';


// News Desk Filter Drowpdown data
const data = [
    { label: '', value: 1 },
    { label: "Adventure Sports", value: 2 },
    { label: "Arts & Leisure", value: 3 },
    { label: "Arts", value: 4 },
    { label: "Automobiles", value: 5 },
    { label: "Blogs", value: 6 },
    { label: "Books", value: 7 },
    { label: "Booming", value: 8 },
    { label: "Business Day", value: 9 },
    { label: "Business", value: 10 },
    { label: "Cars", value: 11 },
    { label: "Circuits", value: 12 },
    { label: "Classifieds", value: 13 },
    { label: "Connecticut", value: 14 },
    { label: "Crosswords & Games", value: 15 },
    { label: "Culture", value: 16 },
    { label: "DealBook", value: 17 },
    { label: "Dining", value: 18 },
    { label: "Editorial", value: 19 },
    { label: "Education", value: 20 },
    { label: "Energy", value: 21 },
    { label: "Entrepreneurs", value: 22 },
    { label: "Environment", value: 23 },
    { label: "Escapes", value: 24 },
    { label: "Fashion & Style", value: 25 },
    { label: "Fashion", value: 26 },
    { label: "Favorites", value: 27 },
    { label: "Financial", value: 28 },
    { label: "Flight", value: 29 },
    { label: "Food", value: 30 },
    { label: "Foreign", value: 31 },
    { label: "Generations", value: 32 },
    { label: "Giving", value: 33 },
    { label: "Global Home", value: 34 },
    { label: "Health & Fitness", value: 35 },
    { label: "Health", value: 36 },
    { label: "Home & Garden", value: 37 },
    { label: "Home", value: 38 },
    { label: "Jobs", value: 39 },
    { label: "Key", value: 40 },
    { label: "Letters", value: 41 },
    { label: "Long Island", value: 42 },
    { label: "Magazine", value: 43 },
    { label: "Market Place", value: 44 },
    { label: "Media", value: 45 },
    { label: "Men's Health", value: 46 },
    { label: "Metro", value: 47 },
    { label: "Metropolitan", value: 48 },
    { label: "Movies", value: 49 },
    { label: "Museums", value: 50 },
    { label: "National", value: 51 },
    { label: "Nesting", value: 52 },
    { label: "Obits", value: 53 },
    { label: "Obituaries", value: 54 },
    { label: "Obituary", value: 55 },
    { label: "OpEd", value: 56 },
    { label: "Opinion", value: 57 },
    { label: "Outlook", value: 58 },
    { label: "Personal Investing", value: 59 },
    { label: "Personal Tech", value: 60 },
    { label: "Play", value: 61 },
    { label: "Politics", value: 62 },
    { label: "Regionals", value: 63 },
    { label: "Retail", value: 64 },
    { label: "Retirement", value: 65 },
    { label: "Science", value: 66 },
    { label: "Small Business", value: 67 },
    { label: "Society", value: 68 },
    { label: "Sports", value: 69 },
    { label: "Style", value: 70 },
    { label: "Sunday Business", value: 71 },
    { label: "Sunday Review", value: 72 },
    { label: "Sunday Styles", value: 73 },
    { label: "T Magazine", value: 74 },
    { label: "T Style", value: 75 },
    { label: "Technology", value: 76 },
    { label: "Teens", value: 77 },
    { label: "Television", value: 78 },
    { label: "The Arts", value: 79 },
    { label: "The Business of Green", value: 80 },
    { label: "The City Desk", value: 81 },
    { label: "The City", value: 82 },
    { label: "The Marathon", value: 83 },
    { label: "The Millennium", value: 84 },
    { label: "The Natural World", value: 85 },
    { label: "The Upshot", value: 86 },
    { label: "The Weekend", value: 87 },
    { label: "The Year in Pictures", value: 88 },
    { label: "Theater", value: 89 },
    { label: "Then & Now", value: 90 },
    { label: "Thursday Styles", value: 91 },
    { label: "Times Topics", value: 92 },
    { label: "Travel", value: 93 },
    { label: "U.S.", value: 94 },
    { label: "Universal", value: 95 },
    { label: "Upshot", value: 96 },
    { label: "UrbanEye", value: 97 },
    { label: "Vacation", value: 98 },
    { label: "Washington", value: 99 },
    { label: "Wealth", value: 100 },
    { label: "Weather", value: 101 },
    { label: "Week in Review", value: 102 },
    { label: "Week", value: 103 },
    { label: "Weekend", value: 104 },
    { label: "Westchester", value: 105 },
    { label: "Wireless Living", value: 106 },
    { label: "Women's Health", value: 107 },
    { label: "Working", value: 108 },
    { label: "Workplace", value: 109 },
    { label: "World", value: 110 },
    { label: "Your Money", value: 111 },
];

async function fetchDB() {
    console.log("opening db");
    const db = await SQLite.openDatabaseAsync('NewsDB.db');
    const firstRow = await db.getFirstAsync('SELECT * FROM user');
    console.log(firstRow.id, firstRow.username, firstRow.password)
}


const homePage: React.FC = () => {
    const route = useRoute();
    const { user } = route.params;
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [beginDate, setBeginDate] = useState('');
    const [endDate, setEndDate] = useState('');


    // Filter Usestates
    const [gLocationFilter, setGLocation] = useState('');
    const [newsDeskFilter, setNewsDesk] = useState('');
    const [sourceFilter, setSource] = useState('');

    // Filter Modal VisualuseState
    const [modalVisible, setModalVisible] = useState(false); // starts disabled

    // News Desk dropdown UseState
    const [value, setValue] = useState(null);

    const navigation = useNavigation();

    const fetchArticles = async (searchQuery = '', beginDate = '', endDate = '', gLocation = '', newsDesk = '', source = '') => {
        console.log(user.id)
        setLoading(true);
        let url = `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=${API_KEY}`;
        if (searchQuery.trim() || beginDate || endDate) {
            url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=${encodeURIComponent(searchQuery)}&api-key=${API_KEY}`;
            if (beginDate) {
                url += `&begin_date=${beginDate.replace(/-/g, '')}`;
            }
            if (endDate) {
                url += `&end_date=${endDate.replace(/-/g, '')}`;
            }

            // Check for any filters. If none, continue with unfiltered search
            if (gLocation || newsDesk || source) {
                url += `&fq=`;
                if (gLocation) {
                    if (url.charAt(url.length - 1) != '=') {
                        url += 'AND'
                    }
                    url += `glocations:("${gLocation.trim()}")`;
                }
                if (newsDesk) {
                    if (url.charAt(url.length - 1) != '=') {
                        url += 'AND'
                    }
                    url += `news_desk:("${newsDesk.trim()}")`;
                }
                if (source) {
                    if (url.charAt(url.length - 1) != '=') {
                        url += 'AND'
                    }
                    url += `source:("${source.trim()}")`;
                }
            }

            // sanity check
            console.log('===== API URL CALLED =====')
            console.log(url);
            console.log('==========================')

            try {

                const response = await fetch(url);
                const data = await response.json();
                // console.log(data);
                if (data.status === 'OK') {
                    setArticles(data.response.docs);
                    console.log("fetch successful");

                }
            } catch (error) {
                console.error('Error fetching articles:', error);
            } finally {
                setLoading(false);
            }
        } else {
            // sanity check
            console.log('===== API URL CALLED =====')
            console.log(url);
            console.log('==========================')

            try {
                const response = await fetch(url);
                const data = await response.json();
                // console.log(data);
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
        fetchDB();
    }, []);

    const handleSearch = () => {
        fetchArticles(query, beginDate, endDate, gLocationFilter, newsDeskFilter, sourceFilter);
    };

    const handleArticlePress = (url: string) => {

        Linking.openURL(url)
    };

    const updateAccount = () =>
    {
        navigation.navigate('updateInfo', {user});
    };




    return (

        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Search for articles"
                value={query}
                onChangeText={setQuery}
            />
            <TextInput
                style={styles.input}
                placeholder="Begin Date (YYYY-MM-DD)"
                value={beginDate}
                onChangeText={setBeginDate}
                keyboardType="numeric"
            />

            <TextInput
                style={styles.input}
                placeholder="End Date (YYYY-MM-DD)"
                value={endDate}
                onChangeText={setEndDate}
                keyboardType="numeric"
            />

            <Button title="Search" onPress={handleSearch} />

            {/* Popup window for filters */}
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                    setModalVisible(!modalVisible);
                }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        {/* Visible inside Modal */}
                        <Text style={styles.modalTitle}>Filters</Text>

                        {/* Location Filter */}
                        <Text style={styles.modalText}>Location</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter Location"
                            value={gLocationFilter}
                            onChangeText={setGLocation}
                        />

                        {/* Source Filter */}
                        <Text style={styles.modalText}>Source</Text>
                        <TextInput
                            style={styles.modalInput}
                            placeholder="Enter Source"
                            value={sourceFilter}
                            onChangeText={setSource}
                        />

                        {/* News Desk Filter */}
                        <Text style={styles.modalText}>News Desk</Text>
                        <Dropdown
                            style={styles.dropdown}
                            placeholderStyle={styles.placeholderStyle}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={data}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder="Select item"
                            searchPlaceholder="Search..."
                            value={value}
                            onChange={item => {
                                setValue(item.value);
                                setNewsDesk(item.label)
                            }}
                        />


                        {/* Button to close modal */}
                        <Button
                            title="Hide Filters"
                            onPress={() => setModalVisible(!modalVisible)}>
                        </Button>
                        {/* End of Modal Visibility */}
                    </View>
                </View>
            </Modal>

            <Button title="Add Search Filters" onPress={() => setModalVisible(true)} />
            <Button title='Favorites' onPress={() => navigation.navigate('favoritesPage', { user })} />

            <ScrollView contentContainerStyle={styles.scrollViewContent}>

                {loading ? (
                    <Text>Loading...</Text>
                ) : articles?.length > 0 ? (
                    articles.map((article, index) => (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate('articlePage', { article, user })}>
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
            <Button
                   title="Account"
                   onPress={updateAccount}
                 />
        </View>




    );
};

const styles = StyleSheet.create({
    dropdown: {
        height: 50,
        width: 200,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
        marginBottom: 20
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        paddingVertical: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        width: 250,
    },
    modalText: {
        textAlign: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    modalInput: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        width: 200,
        textAlign: 'center',
        marginBottom: 20
    },
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