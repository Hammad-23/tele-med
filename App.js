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
import ProfileSetup from './src/screens/profileSetup'
import WhatsAppVerification from './src/screens/whatsappVerification'
import Consultants from './src/screens/consultants'
import Specialities from './src/screens/specialities'
import Appoinments from './src/screens/appoinments'
import Home from './src/screens/home'
import Cardiology from './src/screens/cardiology'
import {Image} from 'react-native'
import BottomTabs from './src/navigations/bottomTab'
import ViewConsultant from './src/screens/viewConsultant'
import store from './src/redux/store'
import {Provider} from 'react-redux'
import Feather from 'react-native-vector-icons/Feather'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderStyleInterpolators } from '@react-navigation/stack';
const Stack = createStackNavigator();



export default function App(){
  return(
    <Provider store={store}>
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
          // headerShown:false,
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="login" component={LogIn} />

    <Stack.Screen options={{
          title: 'Profile Setup',
          headerStyle: {
            backgroundColor: '#00B7DD',
            height:70
            
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="profile" component={ProfileSetup} />

    <Stack.Screen options={{
          title: 'Verify Whatsapp',
          headerStyle: {
            backgroundColor: '#FFF',
            
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="whatsApp" component={WhatsAppVerification} />

    <Stack.Screen options={{
          title: 'Consultants',
          headerStyle: {
            backgroundColor: '#00B7DD',
            
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="consultant" component={Consultants} />

    <Stack.Screen options={{
          title: 'Appoinments',
          headerStyle: {
            backgroundColor: '#00B7DD',
            
          },
          headerShown:false,
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="appoinments" component={Appoinments} />

<Stack.Screen options={{
          title: 'Specialities',
          headerStyle: {
            backgroundColor: '#00B7DD',
            
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="specialities" component={Specialities} />

<Stack.Screen options={{
          title: 'Cardiology',
          headerStyle: {
            backgroundColor: '#00B7DD',
            
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="cardiology" component={Cardiology} />

      <Stack.Screen options={{
          title: "",
          headerStyle: {
            backgroundColor: '#00B7DD',
            // height:120
            
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="home" component={BottomTabs}
       
        />



<Stack.Screen options={{
          title: "",
          headerStyle: {
            backgroundColor: '#00B7DD',
            // height:120
            
          },
          headerTintColor: '#FFF',
          headerTitleStyle: {
            fontWeight: 'bold',
          },headerTitleAlign:'center'
        }} name="viewconsultant" component={ViewConsultant}
       
        />



    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
  )
}