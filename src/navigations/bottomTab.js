import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Consultants from '../../src/screens/consultants'

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="consultant" component={Consultants} />
      {/* <Tab.Screen name="Settings" component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
}