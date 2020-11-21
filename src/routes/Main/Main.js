import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { Home, Repository, Followers, Following } from '../../pages';

const MainStack = createBottomTabNavigator();

export default function Main() {
  return (
    <MainStack.Navigator
      initialRouteName='Home'
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#d1ccc0',
        style: {
          height: 60,
          paddingBottom: 5,
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        },
      }}
    >
      <MainStack.Screen
        name='Home'
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='home' color={color} size={size} />
          ),
        }}
      />
      <MainStack.Screen
        name='Repos'
        component={Repository}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='github' color={color} size={size} />
          ),
        }}
      />
      <MainStack.Screen
        name='Seguidores'
        component={Followers}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='users' color={color} size={size} />
          ),
        }}
      />
      <MainStack.Screen
        name='Seguindo'
        component={Following}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name='users' color={color} size={size} />
          ),
        }}
      />
    </MainStack.Navigator>
  );
}
