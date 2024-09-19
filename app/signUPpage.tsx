import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image, Alert, Linking} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useRoute } from '@react-navigation/native';
import { openDatabase } from 'react-native-sqlite-storage';//
import * as SQLite from 'expo-sqlite';
import React, {useState, useEffect} from "react";



//const db = SQLite.openDatabase('NewsDB.db');

export default function SignUp() {
 const nav = useNavigation();

 const[username, setUserN] = useState("");
 const[pass, setPass] = useState("");
 const[rePass, reSetPass] = useState("");



// https://aboutreact.com/example-of-sqlite-database-in-react-native/ did not work for me
const  addNewPerson = () =>
{
    const db = SQLite.openDatabaseSync('NewsDB.db');

    const duplicateChecker = db.getFirstSync('SELECT * FROM user WHERE username = ?', [username]);
    if(duplicateChecker)
    {
        Alert.alert("Error", "Username already exists");
        return;
    }
    //IDK if we want to keep this in but i will leave it for nhow
    if(pass.length < 8)
        {
            Alert.alert("Tip", "Make Pass 8 chars");
            return;
        }
    if(pass === rePass)
    {
         let result = db.runSync(`INSERT INTO user (username, password)
                    VALUES (
                        ?,?
                    )`, [username,pass]);
           // console.log('Results', "SUCCESSFUL");
            //Alert.alert("Results", "SUCCESSFUL");
            nav.navigate('index');
    }
    else{
    console.log("ERROR");
    Alert.alert("Error", "The Info used does not match");
    }
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

            placeholder = "Name"
            value = {username}
            onChangeText ={setUserN}

       />


       <Text>PASSWORD</Text>

       <TextInput
          placeholder = "Pass"
            value = {pass}
            onChangeText ={setPass}
          secureTextEntry={true}
      />


         <Text>RE ENTER PASSWORD</Text>
         <TextInput
            placeholder = "Pass"
            value = {rePass}
            onChangeText = {reSetPass}
            secureTextEntry={true}
        />

      <Button
        title="Sign up"
        onPress={addNewPerson}
      />





    </View>
  );
}
