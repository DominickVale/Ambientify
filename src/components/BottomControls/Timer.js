import React, { useState, useEffect } from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyledTimerButton } from './styles'
import { COLORS } from '../../constants'
import { stopSoundAll } from '../../actions';


const Timer = () => {

  const dispatch = useDispatch()

  const openDatePicker = () => {
    /*     const timedoutId = BackgroundTimer.setTimeout(() => {
          dispatch(stopSoundAll())
          BackgroundTimer.clearTimeout(timedoutId)
        }, 10000) */
  }

  return (
    <View>
      <StyledTimerButton onPress={openDatePicker}>
        <Icon name="timer" size={32} color={COLORS.bigPlayButtonFore} />
      </StyledTimerButton>
    </View >
  )
}

export default Timer
