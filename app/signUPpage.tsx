import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Index() {
  return (

    const signUP = useNavigation();

    const signUPButton = () => {
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

         <Text>RE ENTER PASSWORD</Text>
         <TextInput
         style={styles.input}
        placeholder = "Pass"
        secureTextEntry={true}
        />
//will need to add a checker for this once database complete
      <Button
        title="Sign up"
        onPress={signUPButton}
      />





    </View>
  );
}
