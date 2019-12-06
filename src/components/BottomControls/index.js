import React from 'react'
import { View, Text } from 'react-native'

import { BottomControlsContainer } from './styles'
import BigPlaybackButton from './BigPlaybackButton'
import PitchRandomizationButton from './PitchRandomizationButton'
import Clouds from './Clouds'
import Timer from './Timer'

/**
 * TODO:
 * change icon colors
 */

const BottomControls = () => {
  return (
    <BottomControlsContainer>
      <Clouds />
      <Timer />
      <BigPlaybackButton />
      <PitchRandomizationButton />
    </BottomControlsContainer>
  )
}

export default BottomControls
