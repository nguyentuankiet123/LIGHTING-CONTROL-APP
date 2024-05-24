import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './WelcomeScreen';
import SelectionScreen from './SelectionScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import AdminScreen from './AdminScreen';
import HomeScreen from './HomeScreen';
import AdminHomeScreen from './AdminHomeScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        {/**<Stack.Screen name="Welcome" component={WelcomeScreen} />*/}
        <Stack.Screen name="Selection" options={{ headerShown: false }} component={SelectionScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
        <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
