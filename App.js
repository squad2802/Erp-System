import React from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import WelcomeScreen from './src/screens/WelcomeScreen';
import HomeScreen from './src/screens/HomeScreen';
import LoginScreen from './src/screens/LoginScreen';
import OtpVerify from './src/screens/OtpVerify';
import AdminDashBoard from './src/screens/AdminDashBoard';
import AdminHome from './src/screens/AdminHome';
import UserRegister from './src/screens/UserRegister';

const Stack = createStackNavigator();

const AuthScreen = () => {
  return (
    <Stack.Navigator initialRouteName="UserLogin">
      <Stack.Screen name="UserLogin" component={LoginScreen} />
      <Stack.Screen name="Verify" component={OtpVerify} />
      <Stack.Screen name="Admin" component={AdminDashBoard} />
      <Stack.Screen name="AHome" component={AdminHome} />
      <Stack.Screen
        name="AddUser"
        component={UserRegister}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Authentication"
          component={AuthScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
