/**
 * Main screen. The channels container will be rendered inside of here.
 *
 * TODO:
 *  implement
 */

import React, { useEffect } from 'react'
import { View, BackHandler, ImageBackground } from 'react-native'
import RNMinimizeApp from 'react-native-minimize'
import { withNavigation } from 'react-navigation'

import { useBackHandlerWithListener } from '../utils'
import Channels from '../containers/Channels'
import BottomControls from '../components/BottomControls'

const Mixer = ({ navigation }) => {

  const backButtonHandler = () => {
    RNMinimizeApp.minimizeApp()
    return true;
  }

  useBackHandlerWithListener(BackHandler, navigation, backButtonHandler);

  return (
    <>
      <ImageBackground source={require('../../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <Channels />
        <BottomControls />
      </ImageBackground>
    </>
  )
}

export default withNavigation(Mixer)
