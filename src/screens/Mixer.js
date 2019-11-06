/**
 * Main screen. The channels container will be rendered inside of here.
 *
 * TODO:
 *  implement
 */

import React from 'react'
import { Text } from 'react-native'

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
    },
  }
}

export default Mixer
