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
      <Stack.Navigator initialRouteName="Index"
      screenOptions={{
headerShown: false,
      }
        
      }
      >
        <Stack.Screen name="Index" component={Index} />
        <Stack.Screen name="homePage" component={homePage} options={{ headerShown: false }}/>
        <Stack.Screen name="articlePage" component={articlePage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
};

export default App;
