import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './index';
import HomePage from './homePage';
import ArticlePage from './articlePage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index"
      screenOptions={{
headerShown: false,
      }
        
      }
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="homePage" component={HomePage} />
        <Stack.Screen name="articlePage" component={ArticlePage}  />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
