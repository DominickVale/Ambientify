import React, { useState } from 'react'
import { View, Text, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyledTimerButton } from './styles'
import SetTimerModal from './SetTimerModal'
import { COLORS } from '../../constants'
import { stopSoundAll } from '../../actions';


const Timer = () => {

  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const setTimer = (value) => {
    console.log('Closing in ms: ', value)
    const timedoutId = BackgroundTimer.setTimeout(() => {
      dispatch(stopSoundAll())
      BackgroundTimer.clearTimeout(timedoutId)
    }, value)
  }

  return (
    <View>
      <StyledTimerButton onPress={openModal}>
        <Icon name="timer" size={32} color={COLORS.bigPlayButtonFore} />
      </StyledTimerButton>
      <Modal
        animationType="slide"
        onRequestClose={() => setModalOpen(false)}
        transparent={true}
        visible={isModalOpen}>
        <SetTimerModal onSetTimer={setTimer} onCloseModal={closeModal} />
      </Modal>
    </View >
  )
}

export default Timer
