import { Text, View, Button, StyleSheet, ScrollView, TextInput, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Index() {
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
       />

       <Text>PASSWORD</Text>
       <TextInput
      placeholder = "Pass"
      secureTextEntry={true}
      />

    <Button
    title="Sign up"
    onPress={() => navigation.navigate('signUPpage')}
    />

     <Button
        title="Log In"
        onPress={() => navigation.navigate('signUPpage')}
        />






    </View>
  );
}
