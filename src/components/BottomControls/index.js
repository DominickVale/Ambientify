import React from 'react'

import { BottomControlsContainer } from './styles'
import BigPlaybackButton from './BigPlaybackButton'
import PitchRandomizationButton from './PitchRandomizationButton'
import Clouds from './Clouds'
import Timer from './Timer'


const BottomControls = () => {
  return (
    <BottomControlsContainer>
      <Timer />
      <BigPlaybackButton />
      <PitchRandomizationButton />
    </BottomControlsContainer>
  )
}

export default BottomControls
