import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {RootNavigation} from './RootNavigator';

export const AppContainer = () => {
  return (
    <NavigationContainer>
      <RootNavigation />
    </NavigationContainer>
  );
};
