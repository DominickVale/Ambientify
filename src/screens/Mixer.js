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

import Channels from '../containers/Channels'

const Mixer = (props) => {
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => RNMinimizeApp.minimizeApp());
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

export default withNavigation(Mixer)
