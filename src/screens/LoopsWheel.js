import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { View, Text, Button, BackHandler } from 'react-native'
import { withNavigation } from 'react-navigation'

import { useBackHandler, playFromLastMillis } from '../utils/'
import { setLoops, toggleRandom, playSound } from '../actions'
import Modal from '../components/Modal'

const LoopsWheel = ({ navigation }) => {
  const dispatch = useDispatch();
  const { soundObject, file, randomizing } = useSelector(state => state.channels[navigation.getParam('channelId')])

  const timesWheelData = useRef(navigation.getParam('timesWheelData'))
  const minutesWheelData = useRef(navigation.getParam('minutesWheelData'))
  const channelId = useRef(navigation.getParam('channelId'))

  const [timesWheelState, setTimesWheelState] = useState(1)
  const [minutesWheelState, setMinutesWheelState] = useState(1)

  useBackHandler(BackHandler, navigation, () => navigation.goBack());

  const toggleRandomShuffle = async () => {
    if (file && !randomizing) {
      dispatch(toggleRandom(channelId.current))
      dispatch(playSound(navigation.getParam('channelId')))
    }
  }

  const buttonHandler = () => {
    dispatch(setLoops(channelId.current, { times: timesWheelState + 1, minutes: minutesWheelState + 1 })) //Set loops with state values +1. React Native Wheel Picker maps values by id starting from 0 to n, whereas wheelData starts from 1.
    console.log('times: ', timesWheelState, 'minutes: ', minutesWheelState)
    if (timesWheelState + 1 > 1) toggleRandomShuffle();
    navigation.goBack();
  }

  return (
    <Modal headerTitle="Configure loops" onSave={buttonHandler} onCloseModal={() => navigation.goBack()}>
      <Text>Choose how many times the sound should be looped</Text>
      <WheelPicker initPosition={0} selectedItem={timesWheelState} data={timesWheelData.current} onItemSelected={(value) => setTimesWheelState(value)} />
      <WheelPicker initPosition={0} selectedItem={minutesWheelState} data={minutesWheelData.current} onItemSelected={(value) => setMinutesWheelState(value)} />
    </Modal>
  )
}

LoopsWheel.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(LoopsWheel)