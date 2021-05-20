import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Consultants from '../screens/consultants'
import Specialities from '../screens/specialities'
import Home from '../screens/home'
import {Image} from 'react-native'


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="home" >
      <Tab.Screen 
      
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home-outline" color={color} size={size} />
        ),
      }}

      name="home" component={Home} />

      <Tab.Screen

   options={{
  tabBarLabel: 'Consultant',
  tabBarIcon: ({ color, size }) => (
    // <MaterialCommunityIcons name="home" color={color} size={size} />
    <Image style={{width:15,height:20}} source={require('../../assets/icons/consultants-icon.png')}/>
  ),
  }}
      

      name="consultant" component={Consultants} />
    </Tab.Navigator>
  );
}