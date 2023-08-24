import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitle: 'Back'
        }}>
      
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  
  return (
      <AppNavigator />
  );
};

export default App;