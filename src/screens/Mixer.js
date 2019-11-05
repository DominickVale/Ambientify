/**
 * Main screen. The channels container will be rendered inside of here.
 *
 * TODO:
 *  implement
 */

import React from 'react'
import { Text } from 'react-native'
import { COLORS } from '../constants'

const Mixer = (props) => {
  return (
    <>
      <Text>
        Mixer screen
      </Text>
    </>
  )
}

Mixer.options = {
  topBar: {
    title: {
      text: 'Ambientify',
      color: COLORS.topBarFore
    },
    visible: true,
    background: {
      color: COLORS.topBarBG
    }
  }
}

export default Mixer
