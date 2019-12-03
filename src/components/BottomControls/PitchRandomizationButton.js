import React, { useState, useEffect } from 'react'
import { View, Text, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyledPitchButton } from './styles'
import { playSoundAll, stopSoundAll, togglePitch } from '../../actions'
import { COLORS } from '../../constants'


const PitchRandomizationButton = () => {

  const dispatch = useDispatch()
  const pitchEnabled = useSelector(state => state.settings.pitchRandomization)

  const buttonHandler = () => {
    ToastAndroid.showWithGravity(
      `Pitch randomization ${pitchEnabled ? 'disabled' : 'enabled'}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    dispatch(togglePitch())
  }
  return (
    <View>
      <StyledPitchButton onPress={buttonHandler}>
        <Icon name="music-note" size={32} color={pitchEnabled ? COLORS.bigPlayButtonFore : COLORS.buttonText} />
      </StyledPitchButton>
    </View >
  )
}

export default PitchRandomizationButton
