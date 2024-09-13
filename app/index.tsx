import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';
import React, {useState, useEffect} from "react";




 function openDB() {
  const db = SQLite.openDatabaseSync('NewsDB.db');
   db.execSync(`
    PRAGMA journal_mode = WAL;
    drop table if exists user;
    drop table if exists article;
        CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL);
INSERT INTO user (username, password) VALUES ('admin', 'password');
CREATE TABLE IF NOT EXISTS article (
    id INTEGER PRIMARY KEY NOT NULL,
    userID INTEGER ,
    url TEXT,
    imageurl TEXT,
    title TEXT ,
    byline TEXT,
    date TEXT ,
    abstr TEXT, 
    src TEXT,
    section TEXT,
    FOREIGN KEY (userID) REFERENCES user(id) ON DELETE CASCADE
);`
// INSERT INTO article (userID, url, imageurl, title, byline, date, abstr, src, section)
// VALUES (
//     1,                                  
//     'https://example.com/default.jpg',
//     'https://google.com',
//     'Default Title',                     
//     'Author Name',                       
//     '2024-09-12',                        
//     'This is a default abstract.',       
//     'Example Source',                   
//     'Default Section'                   
// );

    );
    console.log("db created");
  return db;
}

openDB();




export default function Index() {
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');

const handleLogin = () => {
 
  const db = SQLite.openDatabaseSync('NewsDB.db');
  const user = db.getFirstSync('SELECT * FROM user WHERE username = ? AND password = ?', [username, password]);
  if (user) {
    navigation.navigate('homePage',{user});
  }
  else {
    Alert.alert('Invalid username or password');
  }
};
const navigation = useNavigation();
  return (


    <View

      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

       <Text>USERNAME</Text>
       <TextInput
       placeholder = "Name"
       value={username}
       onChangeText={setUsername}
       />

       <Text>PASSWORD</Text>
       <TextInput
      placeholder = "Pass"
      value={password}
      onChangeText={setPassword}
      secureTextEntry={true}
      />

    <Button
    title="Sign up"
    onPress={() => navigation.navigate('signUPpage')}
    />

     <Button
        title="Log In"
        onPress={handleLogin}
        />






    </View>
  );
}
