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

function testDBInsert(){
    const db = SQLite.openDatabaseSync('NewsDB.db');
    db.runSync("INSERT INTO user (username, password) VALUES ('testDBUser', 'ThisIsABadPassword')")
    const addedUser = db.getFirstSync("SELECT * FROM user where username = 'testDBUser'")

    if(addedUser){
        alert("Successfully added testDBUser")
    }else{
        alert("Could not insert testDBUser")
    }
}

function testDBDelete(){
    const db = SQLite.openDatabaseSync('NewsDB.db');
    db.runSync("DELETE FROM user WHERE username = 'testDBUser'")
    const deletedUser = db.getFirstSync("SELECT * FROM user where username = 'testDBUser'")

    if(deletedUser){
        alert("Could not find / delete testDBUser")
    }else{
        alert("Successfully deleted testDBUser or did not exist already")
    }
}

async function testNYTAPIConnection(){
    const url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?&q=testingTheApi&api-key=8duji3hTFBI6T8qSfdg1VWLixNcAnsV8'
    
    try{
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data)

        if (data.status === 'OK') {
            alert("API Connection successful")
        }else{
            alert("Failed to connect to API")
        }
    }catch (error){
        alert(`Error fetching articles: ${error}`)
    }
}

const debug: React.FC = () => {
    // const navigation = useNavigation();
    const route = useRoute();
    const { user } = route.params;
    // const [articles, setArticles] = useState<any[]>([]);

    return (
        <View style={styles.container}>
            <Text>UserID: {user.id}</Text>
            <Text style={styles.articleText}>DATABASE</Text>
            <Button
                title='Test DB SELECT Usernames'
                onPress={testDBConnection}
            />
            <Button
                title='Test DB INSERT testDBUser'
                onPress={testDBInsert}
            />
            <Button
                title='Test DB DELETE testDBUser'
                onPress={testDBDelete}
            />
            
            <Text style={styles.articleText}>API</Text>
            <Button
                title='Test NYT API Connection'
                onPress={testNYTAPIConnection}
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