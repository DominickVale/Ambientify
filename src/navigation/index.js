import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Mixer from '../screens/Mixer'
import Presets from '../screens/Presets'
import SideDrawer from '../screens/SideDrawer'
import { COLORS } from '../constants'

const defaultNavSettings = (navigation, title) => ({
  title: title,
  headerStyle: {
    backgroundColor: COLORS.topBarBG,
  },
  headerTintColor: COLORS.topBarFore,
  headerLeftContainerStyle: { paddingLeft: 10 },
  headerLeft: () => {
    return (
      <TouchableOpacity onPress={navigation.toggleDrawer}>
        <Icon name="menu" size={30} color={COLORS.icons} />
      </TouchableOpacity>
    )
  },
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

const MixerNav = createStackNavigator(
  {
    Mixer: { screen: Mixer }
  },
  { defaultNavigationOptions: ({ navigation }) => defaultNavSettings(navigation, 'Ambientify') })

const PresetsNav = createStackNavigator(
  {
    Presets: { screen: Presets }
  },
  { defaultNavigationOptions: ({ navigation }) => defaultNavSettings(navigation, 'Presets') })

const AppNavigator = createDrawerNavigator(
  {
    Mixer: MixerNav,
    Presets: PresetsNav,
  },
  {
    initialRouteName: 'Mixer',
    contentComponent: SideDrawer,
  });

export default AppNavigator