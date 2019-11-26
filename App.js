import 'react-native-gesture-handler'
import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { setCustomText, setCustomTouchableOpacity } from 'react-native-global-props';

import AppNavigator from './src/navigation'

const customTextProps = {
  style: {
    fontFamily: 'Montserrat-Regular',
  }
};

setCustomText(customTextProps);

const App = () => {
  //The app component doesn't render anything at this time. Check ./src/navigation

  return (
    <>
    </>
  )
}

export default createAppContainer(AppNavigator);

