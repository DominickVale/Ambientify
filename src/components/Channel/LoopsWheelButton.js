import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'

let wheelData = []
const getWheelData = () => {
  let values = [];
  for (let i = 1; i < 60; i++) {
    values.push(`${i}`);
  }
  wheelData = values
}

const LoopsWheelButton = ({ channelId, navigation }) => {
  const { looping, loops } = useSelector(state => state.channels[channelId])
  useEffect(() => {
    getWheelData();
  }, [])

  return (
    <>
      <View>
        <Button title={looping ? `${loops.times}x - ${loops.minutes}m` : '∞'} onPress={() => navigation.push('LoopsWheel', { wheelData, channelId })} />
      </View>
    </>
  )
}

export default withNavigation(LoopsWheelButton)