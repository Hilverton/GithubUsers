import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Followers } from '../../pages';

const ViewerStack = createStackNavigator();

export default function Viewer() {
  return (
    <ViewerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ViewerStack.Screen name='Seguidores' component={Followers} />
      <ViewerStack.Screen name='Viewer' component={Home} />
    </ViewerStack.Navigator>
  );
}
