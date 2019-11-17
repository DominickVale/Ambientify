import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

let wheelData = []
const getWheelData = () => {
  let values = [];
  for (let i = 1; i < 59; i++) {
    values.push(`${i}`);
  }
  wheelData = values
}

const LoopsWheelButton = ({ channelId, navigation }) => {

  useEffect(() => {
    getWheelData();
  }, [])

  return (
    <>
      <View>
        <Button title="xx - xm" onPress={() => navigation.push('LoopsWheel', { wheelData, channelId })} />
      </View>
    </>
  )
}

export default withNavigation(LoopsWheelButton)