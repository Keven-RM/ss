import 'react-native-gesture-handler';

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Gadget from './src/pages/Gadget';
import Home from './src/pages/Home';
import BPM from './src/pages/BPM';
import Local from './src/pages/Local';
import Setings from './src/pages/setings';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Config">
          <Tab.Screen name="Gadget" component={Gadget} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="watch" color={color} size={26} />
              ),
            }}/>
          <Tab.Screen name="BPM" component={BPM} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="favorite" color={color} size={26} />
              ),
            }}/>
          <Tab.Screen name="Home" component={Home} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="home" color={color} size={26} />
              ),
            }}/>
          <Tab.Screen name="Local" component={Local} options={{
              tabBarIcon: ({ color }) => (
                  <Icon name="room" color={color} size={26} />
                ),
          }}/>
          <Tab.Screen name="Config" component={Setings} options={{
            tabBarIcon: ({ color }) => (
                <Icon name="settings" color={color} size={26} />
              ),
          }}/>
          </Tab.Navigator>
      </NavigationContainer>
  );
}