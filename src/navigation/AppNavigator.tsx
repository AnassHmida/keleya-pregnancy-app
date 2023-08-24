import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/MainScreen';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerBackTitle: 'Back'
        }}>
        <Stack.Screen
          name="KeleyaApp"
          component={MainScreen}
          options={{ headerTitle: 'Main Screen' }}
        />
      
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