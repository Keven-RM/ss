import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Gadget from './src/pages/Gadget';
import BPM from './src/pages/BPM';
import Local from './src/pages/Local';
import Setings from './src/pages/setings';
import MapPage from './src/pages/MapPage';
import Main from './src/pages/Main'

import { PositionProvider } from './src/context/MapContext'

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
const Tab = createMaterialBottomTabNavigator();

function BottomNavigation(){
  return(
    <Tab.Navigator initialRouteName="BPM" 
    initialRouteName="Feed"
    shifting={true}
    labeled={false}
    sceneAnimationEnabled={false}
    activeColor="#31639C"
    inactiveColor="#95a5a6"
    renderTouchable={false}
    barStyle={{ backgroundColor: '#ffff' }}
    >
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
    <Tab.Screen name="Home" component={Main} options={{
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
  )
}

const Stack = createStackNavigator();

function StackNavigation(){
  return(
    <Stack.Navigator>
      <Stack.Screen name="Mean" component={BottomNavigation}  options={{headerShown: false}} />
      <Stack.Screen name="Map" component={MapPage} />
    </Stack.Navigator>
  )
}


export default function App() {
  return (
      <PositionProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
      </PositionProvider>
  );
}