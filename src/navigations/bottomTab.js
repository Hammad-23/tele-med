import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Consultants from '../screens/consultants';
import Specialities from '../screens/specialities';
import Home from '../screens/home';
import Appoinments from '../screens/appoinments';
import {Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator initialRouteName="home">
      <Tab.Screen
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="home-outline"
              color={color}
              size={size}
            />
          ),
        }}
        name="home"
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarLabel: 'Consultant',
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Image
              style={{width: 15, height: 20}}
              source={require('../../assets/icons/consultants-icon.png')}
            />
          ),
        }}
        name="consultant"
        component={Consultants}
      />

      <Tab.Screen
       
        options={{
          // tabHeaderRight:(
          //  <Feather name='bell' size={15}  />
          // ),
          headerShown:false,
          tabBarLabel: 'Appoinments',
          tabBarIcon: ({color, size}) => (
            // <MaterialCommunityIcons name="home" color={color} size={size} />
            <Image
              style={{width: 20, height: 20}}
              source={require('../../assets/icons/appoinment.png')}
            />
          ),
        }}
        name="appoinments"
        component={Appoinments}
      />
    </Tab.Navigator>
  );
}
