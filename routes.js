// Arquivo: routes.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import App from './App';
import IndexPage from './pages/index.js'; // Alterado para index.js

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="App">
        <Stack.Screen name="App" component={App} options={{ headerShown: false }} />
        <Stack.Screen name="IndexPage" component={IndexPage} /> {/* Alterado para IndexPage */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
