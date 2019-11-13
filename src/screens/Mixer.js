/**
 * Main screen. The channels container will be rendered inside of here.
 *
 * TODO:
 *  implement
 */

import React, { useEffect } from 'react'
import { Text, BackHandler } from 'react-native'
import RNMinimizeApp from 'react-native-minimize'

import Channels from '../containers/Channels'

const Mixer = (props) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => {
      RNMinimizeApp.minimizeApp();
      return true
    })
    return () => {
      BackHandler.removeEventListener('hardwareBackPress')
    };
  }, [])
  return (
    <>
      <Text>
        Mixer screen
      </Text>
      <Channels />
    </>
  )
}

export default Mixer
