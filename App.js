/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import Register from './src/screens/register'
import LogIn from './src/screens/login'
import EmailVerification from './src/screens/emailVerification'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function App(){
  return(
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Register">
      <Stack.Screen options={{
          title: 'Register',
          headerStyle: {
            backgroundColor: '#F6F6F6',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="Register" component={Register} />

    <Stack.Screen options={{
          title: 'Email Verification',
          headerStyle: {
            backgroundColor: '#F6F6F6',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="verification" component={EmailVerification} />

    <Stack.Screen options={{
          title: 'Login',
          headerStyle: {
            backgroundColor: '#FFF',
            height:70
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="login" component={LogIn} />


    </Stack.Navigator>
  </NavigationContainer>
  )
}