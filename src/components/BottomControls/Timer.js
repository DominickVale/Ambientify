import React, { useState, useRef } from 'react'
import { View, Text, Modal } from 'react-native'
import { useDispatch } from 'react-redux'
import BackgroundTimer from 'react-native-background-timer';
import Icon from 'react-native-vector-icons/MaterialIcons'

import { StyledTimerButton, StyledTimerText } from './styles'
import SetTimerModal from './SetTimerModal'
import { COLORS } from '../../constants'
import { stopSoundAll } from '../../actions';


const Timer = () => {

  const dispatch = useDispatch()
  const [isModalOpen, setModalOpen] = useState(false)
  const [remainingTimeString, setRemainingTimeString] = useState('')

  const intervalId = useRef()
  const timeoutId = useRef()

  const openModal = () => setModalOpen(true)
  const closeModal = () => setModalOpen(false)

  const clearTimers = () => {
    if (intervalId.current) BackgroundTimer.clearInterval(intervalId.current)
    if (timeoutId.current) BackgroundTimer.clearTimeout(timeoutId.current)
  }

  const setTimer = (value) => {
    console.log('Closing in ms: ', value)

    clearTimers();
    if (value < 0) {
      setRemainingTimeString('');
      return;
    };

    const startHours = new Date(value).getUTCHours()
    const startMinutes = new Date(value).getUTCMinutes()
    setRemainingTimeString(`${startHours > 0 ? startHours + 'h ' : ''}${startMinutes > 0 ? startMinutes + 'm' : ''}`)

    const initialTime = Date.now();



    intervalId.current = BackgroundTimer.setInterval(() => {
      let elapsedTime = Date.now() - initialTime;

      const remainingHours = new Date(value - elapsedTime).getUTCHours()
      const remainingMinutes = new Date(value - elapsedTime).getUTCMinutes()
      setRemainingTimeString(`${remainingHours > 0 ? remainingHours + 'h ' : ''}${remainingMinutes > 0 ? remainingMinutes + 'm' : ''}`)
    }, 58000);

    timeoutId.current = BackgroundTimer.setTimeout(() => {
      dispatch(stopSoundAll())
      setRemainingTimeString('')

      clearTimers();
    }, value)

  }

  return (
    <View>
      <StyledTimerButton onPress={openModal}>
        <Icon name="timer" size={32} color={COLORS.bigPlayButtonFore} />
      </StyledTimerButton>
      <StyledTimerText>{remainingTimeString}</StyledTimerText>
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
