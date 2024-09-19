import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Alert, Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';//
import * as SQLite from 'expo-sqlite';
import React, {useState, useEffect} from "react";



//const db = SQLite.openDatabase('NewsDB.db');

export default function updateInfo() {
 const nav = useNavigation();
 const route = useRoute();
 const { user } = route.params;

 const [usern, setUserN] = useState(user.username);
 const [pass, setPass] = useState(user.password);
 const[rePass, reSetPass] = useState("");




const  editInfo = () =>
{
    const db = SQLite.openDatabaseSync('NewsDB.db');

   const duplicateChecker = db.getFirstSync('SELECT * FROM user WHERE username = ? AND id != ?', [usern, user.id]);
    if(duplicateChecker)
    {
        Alert.alert("Error", "Username already exists");
        return;
    }
    db.runSync('UPDATE user SET username = ?, password = ? WHERE id = ?', [usern, pass, user.id]);
     Alert.alert("Success", "User information updated please log in again");
     nav.navigate('index');
}


const  goBack = () =>
{
    nav.navigate('homePage',{user});
}


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

        placeholder = "USERNAME"
        value = {usern}
        onChangeText ={setUserN}

   />
   <Text>PASSWORD</Text>
   <TextInput

           placeholder = "PASSWORD"
           value = {pass}
           onChangeText ={setPass}

      />

   <Button
       title= "Confirm Edit"
       onPress={editInfo}
   />


    </View>
  );
}
