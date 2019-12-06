/**
 * Main screen. The channels container will be rendered inside of here.
 */

import React from 'react'
import { BackHandler, ImageBackground } from 'react-native'
import { withNavigation } from 'react-navigation'
import RNMinimizeApp from 'react-native-minimize'

import Channels from '../containers/Channels'
import { useBackHandlerWithListener } from '../utils'
import BottomControls from '../components/BottomControls'

/**
 * TODO:
 * add dynamic background image
 */
const Mixer = ({ navigation }) => {

  const backButtonHandler = () => {
    RNMinimizeApp.minimizeApp()
    return true;
  }

  useBackHandlerWithListener(BackHandler, navigation, backButtonHandler);

  return (
    <>
      <ImageBackground source={require('#ambientify-images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <Channels />
        <BottomControls />
      </ImageBackground>
    </>
  )
}

export default withNavigation(Mixer)
