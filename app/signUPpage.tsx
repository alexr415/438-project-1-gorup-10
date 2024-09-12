import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Index() {
 const nav = useNavigation();
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
       />


       <Text>PASSWORD</Text>

       <TextInput
          placeholder = "Pass"
          secureTextEntry={true}
      />


         <Text>RE ENTER PASSWORD</Text>
         <TextInput
            placeholder = "Pass"
            secureTextEntry={true}
        />

      <Button
        title="Sign up"
        onPress={() => nav.navigate('index')}
      />





    </View>
  );
}
