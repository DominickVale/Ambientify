import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { toggleLooping } from '../../actions'

let wheelData = []
const getWheelData = () => {
  let values = [];
  for (let i = 1; i < 59; i++) {
    values.push(`${i}`);
  }
  wheelData = values
}

const LoopsWheelButton = ({ channelId, navigation }) => {
  const dispatch = useDispatch()
  const { soundObject, looping } = useSelector(state => state.channels[channelId])
  useEffect(() => {
    getWheelData();
  }, [])

  const toggleRandomShuffle = async () => {
    dispatch(toggleLooping(channelId))
    await soundObject.setStatusAsync({ didJustFinish: true })
  }
  return (
    <>
      <View>
        <Button title="xx - xm" onPress={() => navigation.push('LoopsWheel', { wheelData, channelId })} />
        <Button title={looping ? 'x' : '∞'} onPress={toggleRandomShuffle} />
      </View>
    </>
  )
}

export default withNavigation(LoopsWheelButton)