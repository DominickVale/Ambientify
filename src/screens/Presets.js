/**
 * TODO:
 *  implement
 */

import React from 'react'
import { Text } from 'react-native'

import { COLORS } from '../constants'

const Presets = (props) => {
  return (
    <>
      <Text> Presets screen</Text>
    </>
  )
}
Presets.options = {
  topBar: {
    title: {
      text: 'Presets',
      color: COLORS.topBarFore,
      alignment: 'center'
    },
    visible: true,
    background: {
      color: COLORS.topBarBG
    }
  }
}
export default Presets
