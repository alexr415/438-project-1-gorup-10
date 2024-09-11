import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Index() {
  return (

    const moveH = useNavigation();//once logged in will move you to home
    const signOut = useNavigation();//for later use once u are logged in

     const logInButton = () => {
        navigation.moveH('homePage');
     }
      const signOutButton = () => {
             navigation.moveH('index');
          }
    <View

      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

       <Text>USERNAME</Text>
       <TextInput
       style={styles.input}
       placeholder = "Name"
       />

       <Text>PASSWORD</Text>
       <TextInput
       style={styles.input}
      placeholder = "Pass"
      secureTextEntry={true}
      />

      <Button
        title="Sign up"
        onPress={logInButton}
      />

        <Button
          title="Sign out"
          onPress={signOutButton}
        />




    </View>
  );
}
