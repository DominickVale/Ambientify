import React from 'react'
import { Provider } from 'react-redux'
import { Navigation } from "react-native-navigation";

import Mixer from '../screens/Mixer';
import Presets from '../screens/Presets';
import SideDrawer from "../screens/SideDrawer";
import { MAIN_SCREEN, PRESETS_SCREEN, SIDE_MENU } from './screens'
import configureStore from '../store'

let store = configureStore();

const reduxWrap = (Component) => {
  return (props) => (
    <Provider store={store}>
      <Component {...props} />
    </Provider>)
}

export default () => {
  console.log('Registering screens...')
  Navigation.registerComponent(MAIN_SCREEN, () => reduxWrap(Mixer));
  Navigation.registerComponent(PRESETS_SCREEN, () => reduxWrap(Presets));
  Navigation.registerComponent(SIDE_MENU, () => reduxWrap(SideDrawer));
  console.log('Screens registered.')
}