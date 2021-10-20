import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Cart, Home} from '../screens';
import {APP_SCREEN, RootStackParamList} from './ScreenTypes';
const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigation = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={APP_SCREEN.HOME}
        component={Home}
        // options={{headerShown: false}}
      />
      <RootStack.Screen
        name={APP_SCREEN.CART}
        component={Cart}
        // options={{headerShown: false}}
      />
    </RootStack.Navigator>
  );
};
