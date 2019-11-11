import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Mixer from './src/screens/Mixer'
import Presets from './src/screens/Presets'
import SideDrawer from './src/screens/SideDrawer'

const App = () => {
  return (
    <>
      <Mixer />
    </>
  )
}

App.navigationOptions = {
  title: 'Ambientify',
};

const AppNavigator = createDrawerNavigator(
  {
    Home: App,
    Presets: Presets,
  },
  {
    initialRouteName: 'Home',
    contentComponent: SideDrawer,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

export default createAppContainer(AppNavigator);

