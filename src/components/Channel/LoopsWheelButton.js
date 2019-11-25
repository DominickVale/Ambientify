import React from 'react'
import { View, Button } from 'react-native'
import { useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'


const LoopsWheelButton = ({ channelId, navigation }) => {
  const { randomizing, loops, soundObject, currentSound } = useSelector(state => state.channels[channelId])

  let timesWheelData = []
  let minutesWheelData = []

  const _getWheelData = (soundDuration) => {
    let minutes = loops.minutes * 60000;
    let timesCanBePlayed = minutes / soundDuration

    for (let i = 1; i < 60; i++) {
      minutesWheelData.push(`${i}`);
      if (timesCanBePlayed > i) timesWheelData.push(`${i}`)
    }
  }

  const checkData = async () => {
    try {
      const status = await soundObject.getStatusAsync();
      const soundDuration = status.durationMillis
      console.log('sound duration is: ', soundDuration)
      if (currentSound !== 'none') {
        _getWheelData(soundDuration)
        console.log(timesWheelData, minutesWheelData)
      }
    } catch (error) { console.log(error) }
  }

  const onButtonPress = async () => {
    if (currentSound !== 'none') {
      await checkData().then(() => navigation.push('LoopsWheel', { minutesWheelData, timesWheelData, channelId }));
    }
  }

  return (
    <>
      <View>
        <Button title={randomizing ? `${loops.times}x - ${loops.minutes}m` : '∞'} onPress={onButtonPress} />
      </View>
    </>
  )
}

export default withNavigation(LoopsWheelButton)