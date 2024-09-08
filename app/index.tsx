import { Text, View,Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";


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
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('homePage')} />

    </View>
  );
}
