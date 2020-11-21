import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../../pages';
import Main from '../Main';

const AuthenticationStack = createStackNavigator();

export default function Authentication() {
  return (
    <NavigationContainer>
      <AuthenticationStack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false,
        }}
      >
        <AuthenticationStack.Screen name='Login' component={Login} />
        <AuthenticationStack.Screen name='Main' component={Main} />
      </AuthenticationStack.Navigator>
    </NavigationContainer>
  );
}
