import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home, Followers } from '../../pages';

const ViewerStack = createStackNavigator();

export default function FollowingRoute() {
  return (
    <ViewerStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <ViewerStack.Screen name='Seguindo' component={Followers} />
      <ViewerStack.Screen name='Viewer' component={Home} />
    </ViewerStack.Navigator>
  );
}
