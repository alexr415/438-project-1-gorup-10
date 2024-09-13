import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as SQLite from 'expo-sqlite';
import React, {useState, useEffect} from "react";




 function openDB() {
  const db = SQLite.openDatabaseSync('NewsDB.db');
   db.execSync(`
    PRAGMA journal_mode = WAL;

    CREATE TABLE IF NOT EXISTS user (id INTEGER PRIMARY KEY NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL);
INSERT INTO user (username, password) VALUES ('admin', 'password');
CREATE TABLE IF NOT EXISTS article (
    id INTEGER PRIMARY KEY NOT NULL,
    userID INTEGER NOT NULL,
    imageurl TEXT,
    title TEXT NOT NULL,
    byline TEXT,
    date TEXT NOT NULL,
    abstr TEXT,  -- 'abstract' is a reserved keyword, so 'abstr' is used
    src TEXT,
    section TEXT,
    FOREIGN KEY (userID) REFERENCES user(id) ON DELETE CASCADE
);`

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
    navigation.navigate('homePage');
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
