import React, { useEffect, useContext } from 'react';
import 'react-native-gesture-handler';

import { NavigationContainer } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/MaterialIcons'

import Gadget from './src/pages/Gadget';
import BPM from './src/pages/BPM';
import Local from './src/pages/Local';
import Setings from './src/pages/setings';
import MapPage from './src/pages/MapPage';
import Landing from './src/pages/Landing';
import Login from './src/pages/Login';
import Register from './src/pages/Register';
import ChangeDatas from './src/pages/ChangeDatas';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import { UserProvider } from './src/context/UserContext';
import { SocketProvider } from './src/context/SocketContext';


const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNavigation(){
  return(
    <Tab.Navigator 
    initialRouteName="Home" 
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
    <Tab.Screen name="Home" component={Landing} options={{
      tabBarIcon: ({ color }) => (
          <Icon name="home" color={color} size={26} />
        ),
      }}/>
    <Tab.Screen name="Local" component={Local} options={{
        tabBarIcon: ({ color }) => (
            <Icon name="location-pin" color={color} size={26} />
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

function StackNavigation(){
  return(
    <Stack.Navigator initialRouteName="Mean" >
      <Stack.Screen name="Mean" component={BottomNavigation} options={{headerShown: false}} />
      <Stack.Screen name="Map" component={MapPage} />
      <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
      <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
      <Stack.Screen name="ChangeDatas" component={ChangeDatas} options={{headerShown: false}} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <SocketProvider>   
      <UserProvider>
        
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      
      </UserProvider>
      </SocketProvider>   
  );
}