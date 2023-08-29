import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {StatusBar} from 'react-native';
import MainScreen from '../screens/MainScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {
  Date,
  Main,
  Name,
  SignIn,
  SignUp,
  Success,
  Workout,
} from '../constants/navigation';
import SignInScreen from '../screens/SignInScreen';
import NameScreen from '../screens/NameScreen';
import DateScreen from '../screens/DateScreen';
import WorkoutScreen from '../screens/WorkoutScreen';
import SuccessScreen from '../screens/SuccessScreen';
import KeleyaProvider from '../context/KeleyaProvider';

const Stack = createStackNavigator();

const screenConfig = [
  {
    name: Main,
    component: MainScreen,
  },
  {
    name: SignUp,
    component: SignUpScreen,
  },
  {
    name: SignIn,
    component: SignInScreen,
  },
  {
    name: Name,
    component: NameScreen,
  },
  {
    name: Date,
    component: DateScreen,
  },
  {
    name: Workout,
    component: WorkoutScreen,
  },
  {
    name: Success,
    component: SuccessScreen,
  },
];

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {screenConfig.map(screen => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <KeleyaProvider>
      <AppNavigator />
    </KeleyaProvider>
  );
};

export default App;
