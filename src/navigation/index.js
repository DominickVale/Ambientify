import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import Mixer from '../screens/Mixer'
import Presets from '../screens/Presets'
import SideDrawer from '../screens/SideDrawer'
import { COLORS } from '../constants'

const defaultNavSettings = (Navigation, title) => ({
  title: title,
  headerStyle: {
    backgroundColor: COLORS.topBarBG,
  },
  headerTintColor: COLORS.topBarFore,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
})

const MixerNav = createStackNavigator(
  {
    Mixer: { screen: Mixer }
  },
  { defaultNavigationOptions: ({ Navigation }) => defaultNavSettings(Navigation, 'Ambientify') })

const PresetsNav = createStackNavigator(
  {
    Presets: { screen: Presets }
  },
  { defaultNavigationOptions: ({ Navigation }) => defaultNavSettings(Navigation, 'Presets') })

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