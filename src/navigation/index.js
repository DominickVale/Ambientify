import React from 'react'
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import i18n from '../translations';

import Mixer from '../screens/Mixer'
import Presets from '../screens/Presets'
import AddPreset from '../screens/AddPreset'
import SideDrawer from '../screens/SideDrawer'
import SoundPicker from '../screens/SoundPicker'
import LoopsWheel from '../screens/LoopsWheel'
import About from '../screens/About'
import { normSize } from '../utils'
import { COLORS } from '../constants'


const defaultNavSettings = (navigation, title) => ({
  title: i18n.t(title.toLowerCase()),
  headerStyle: {
    backgroundColor: COLORS.primary,
    height: 64
  },
  headerTintColor: COLORS.headerFore,
  headerLeftContainerStyle: { paddingLeft: 12 },
  headerLeft: () => (
    <TouchableOpacity onPress={navigation.toggleDrawer}>
      <Icon name="menu" size={30} color={COLORS.icons} />
    </TouchableOpacity>
  ),
  headerTitleStyle: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: normSize(1),
    textAlign: 'center',
    alignSelf: 'center'
  },
  headerRightContainerStyle: { paddingRight: 14 },
  headerRight: () => (
    <TouchableOpacity onPress={() => navigation.navigate({ routeName: 'About' })}>
      <Icon name="info-outline" size={24} color={COLORS.icons} />
    </TouchableOpacity>
  ),
});

const MixerNav = createStackNavigator(
  {
    Mixer: { screen: Mixer },
    SoundPicker: { screen: SoundPicker },
    LoopsWheel: { screen: LoopsWheel },
    About: { screen: About }
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
  },
  {


    initialRouteName: 'Mixer',
    contentComponent: SideDrawer,


  });

export default AppNavigator