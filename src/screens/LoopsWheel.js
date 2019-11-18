import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { View, Text, Button, BackHandler } from 'react-native'
import { withNavigation } from 'react-navigation'

import { useBackHandler } from '../utils/'
import { setLoops } from '../actions'

const LoopsWheel = ({ navigation }) => {
  const wheelData = navigation.getParam('wheelData')
  const channelId = navigation.getParam('channelId')

  const dispatch = useDispatch();
  const [timesWheelState, setTimesWheelState] = useState(1)
  const [minutesWheelState, setMinutesWheelState] = useState(1)

  useBackHandler(BackHandler, navigation, () => navigation.goBack());

  const buttonHandler = () => {
    dispatch(setLoops(channelId, { times: timesWheelState + 1, minutes: minutesWheelState + 1 }))
    navigation.goBack();
  }

  return (
    <View onPress={() => navigation.pop()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <View style={{ height: "80%", width: '80%', backgroundColor: "white", justifyContent: "flex-start" }}>
        <Text>Choose how many times the sound should be looped</Text>
        <WheelPicker selectedItem={timesWheelState} data={wheelData} onItemSelected={(value) => setTimesWheelState(value)} />
        <WheelPicker selectedItem={minutesWheelState} data={wheelData} onItemSelected={(value) => setMinutesWheelState(value)} />
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