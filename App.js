import 'react-native-gesture-handler'
import React from 'react'
import { createAppContainer } from 'react-navigation'
import { setCustomText } from 'react-native-global-props';

import AppNavigator from './src/navigation'

const customTextProps = {
  style: {
    fontFamily: 'Montserrat-Regular',
  }
};

setCustomText(customTextProps);

const App = () => {
  //The app component doesn't render anything. Check ./src/navigation for the main screen. (Mixer)
}

export default createAppContainer(AppNavigator);

