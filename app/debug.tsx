import React, { useState, useEffect } from 'react';
import { useNavigation } from "@react-navigation/native";
import { Modal, Alert, TouchableOpacity, Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Linking } from "react-native";
import * as SQLite from 'expo-sqlite';
import { useRoute } from '@react-navigation/native';

const API_KEY = '8duji3hTFBI6T8qSfdg1VWLixNcAnsV8';

// test every function that does stuff, populate names, pull from DB and API 
function testDBConnection(){
    const db = SQLite.openDatabaseSync('NewsDB.db');
    const usernames = db.getAllSync("SELECT username FROM user")
    
    let usernamesString = ""
    usernames.map((username) => (
        usernamesString += username.username +', '
    ))
    alert(`All usernames: ${usernamesString}`)
}

const debug: React.FC = () => {
    // const navigation = useNavigation();
    const route = useRoute();
    const { user } = route.params;
    // const [articles, setArticles] = useState<any[]>([]);

    return (
        <View style={styles.container}>
            <Text>UserID: {user.id}</Text>
            <Button
                title='Test DB Connection: Usernames'
                onPress={testDBConnection}
            />
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

export default debug;