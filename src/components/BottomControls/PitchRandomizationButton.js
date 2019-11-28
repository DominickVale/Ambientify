import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyledPitchButton } from './styles'
import { playSoundAll, stopSoundAll, togglePitch } from '../../actions'
import { COLORS } from '../../constants'


const PitchRandomizationButton = () => {

  const dispatch = useDispatch()
  const pitchEnabled = useSelector(state => state.settings.pitchRandomization)

  return (
    <View>
      <StyledPitchButton onPress={() => dispatch(togglePitch())}>
        <Icon name="music-note" size={32} color={pitchEnabled ? 'white' : COLORS.bigPlayButtonFore} />
      </StyledPitchButton>
    </View >
  )
}

export default PitchRandomizationButton
