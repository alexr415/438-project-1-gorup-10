import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Index from './index';
import homePage from './homePage';
import articlePage from './articlePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="homePage" component={homePage} />
        <Stack.Screen name="articlePage" component={articlePage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
