/**
 * Main screen. The channels container will be rendered inside of here.
 *
 * TODO:
 *  implement
 */

import React, { useEffect } from 'react'
import { Text, BackHandler } from 'react-native'
import RNMinimizeApp from 'react-native-minimize'
import { withNavigation } from 'react-navigation'

import { useBackHandlerWithListener } from '../utils'
import Channels from '../containers/Channels'

const Mixer = ({ navigation }) => {

  const backButtonHandler = () => {
    RNMinimizeApp.minimizeApp()
    return true;
  }

  useBackHandlerWithListener(BackHandler, navigation, 'didBlur', backButtonHandler);

  return (
    <>
      <Text>
        Mixer screen
      </Text>
      <Channels />
    </>
  )
}

export default withNavigation(Mixer)
