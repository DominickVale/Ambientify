import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Mixer from '../screens/Mixer'
import Presets from '../screens/Presets'
import SideDrawer from '../screens/SideDrawer'
import SoundPicker from '../screens/SoundPicker'
import { COLORS } from '../constants'

/**
 * TODO: 
 * Add SoundPicker modal
 */

const defaultNavSettings = (navigation, title) => ({
  title: title,
  headerStyle: {
    backgroundColor: COLORS.headerBG
  },
  headerTintColor: COLORS.headerFore,
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
    Mixer: { screen: Mixer },
    SoundPicker: { screen: SoundPicker }
  },
  {
    defaultNavigationOptions: ({ navigation }) => defaultNavSettings(navigation, 'Ambientify'),
    mode: 'modal',
    transparentCard: true,
    cardStyle: { opacity: 1 }
  })

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
    //First screen to show up will be Mixer
    initialRouteName: 'Mixer',
    contentComponent: SideDrawer,
  });

export default AppNavigator