import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { View, Text, Button, BackHandler } from 'react-native'
import { withNavigation } from 'react-navigation'

import { useBackHandler } from '../utils/'
import { setLoops, toggleLooping, playSound } from '../actions'

const LoopsWheel = ({ navigation }) => {
  const dispatch = useDispatch();
  const { soundObject, file, looping } = useSelector(state => state.channels[navigation.getParam('channelId')])

  const wheelData = navigation.getParam('wheelData')
  const channelId = navigation.getParam('channelId')

  const [timesWheelState, setTimesWheelState] = useState(1)
  const [minutesWheelState, setMinutesWheelState] = useState(1)

  useBackHandler(BackHandler, navigation, () => navigation.goBack());

  const toggleRandomShuffle = async () => {
    if (file) {
      /**
       * Bit of a hacky way to fire didJustFinish event for the soundObject so that it can start shuffling withot having it to play first
       */
      let { durationMillis } = await soundObject.getStatusAsync()
      soundObject.playFromPositionAsync(durationMillis - 1)
      await soundObject.setIsLoopingAsync(false);

      if (!looping) {
        dispatch(toggleLooping(channelId))
        dispatch(playSound(navigation.getParam('channelId')))
      }
    }
  }

  const buttonHandler = () => {
    dispatch(setLoops(channelId, { times: timesWheelState + 1, minutes: minutesWheelState + 1 }))
    if (timesWheelState > 1) toggleRandomShuffle();
    navigation.goBack();
  }

  return (
    <View onPress={() => navigation.pop()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <View style={{ height: "80%", width: '80%', backgroundColor: "white", justifyContent: "flex-start" }}>
        <Text>Choose how many times the sound should be looped</Text>
        <WheelPicker initPosition={0} selectedItem={timesWheelState} data={wheelData} onItemSelected={(value) => setTimesWheelState(value)} />
        <WheelPicker initPosition={0} selectedItem={minutesWheelState} data={wheelData} onItemSelected={(value) => setMinutesWheelState(value)} />
        <Button title="go" onPress={buttonHandler} />
      </View>
    </View>
  )
}

LoopsWheel.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(LoopsWheel)