import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Mixer from '../screens/Mixer'
import Presets from '../screens/Presets'
import AddPreset from '../screens/AddPreset'
import SideDrawer from '../screens/SideDrawer'
import SoundPicker from '../screens/SoundPicker'
import LoopsWheel from '../screens/LoopsWheel'
import About from '../screens/About'
import { COLORS } from '../constants'


const defaultNavSettings = (navigation, title) => ({
  title: title,
  headerStyle: {
    backgroundColor: COLORS.primary,
    height: 78
  },
  headerTintColor: COLORS.headerFore,
  headerLeftContainerStyle: { paddingLeft: 10 },
  headerLeft: () => (
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      <Icon name="menu" size={34} color={COLORS.icons} />
    </TouchableOpacity>
  ),
  headerTitleStyle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 21,
    textAlign: 'center',
    alignSelf: 'center'
  },
  headerRightContainerStyle: { paddingRight: 10 },
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName: 'About' })}>
      <Icon name="info-outline" size={28} color={COLORS.icons} />
    </TouchableOpacity>
  ),
});

const MixerNav = createStackNavigator(
  {
    Mixer: { screen: Mixer },
    SoundPicker: { screen: SoundPicker },
    LoopsWheel: { screen: LoopsWheel }
  },
  {
    defaultNavigationOptions: ({ navigation }) => defaultNavSettings(navigation, 'Ambientify'),
    mode: 'modal',
    transparentCard: true,
    cardStyle: { opacity: 1 }
  });

const PresetsNav = createStackNavigator(
  {
    Presets: { screen: Presets },
    AddPreset: { screen: AddPreset }
  },
  {
    defaultNavigationOptions: ({ navigation }) => defaultNavSettings(navigation, 'Presets'),
    mode: 'modal',
    transparentCard: true,
    cardStyle: { opacity: 1 }
  });

const AppNavigator = createDrawerNavigator(
  {
    Mixer: MixerNav,
    Presets: PresetsNav,
    About: About
  },
  {


    initialRouteName: 'Mixer',
    contentComponent: SideDrawer,


  });

export default AppNavigator