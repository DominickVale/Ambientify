import React from 'react'
import { Text, Button, View } from 'react-native'
import Slider from '@react-native-community/slider'
/**
 * TODO:
 * Add Load button
 * Add Play&Stop button
 * Add volume slider
 * @param {*} props 
 */

const loadHandler = () => { }

const toggleSoundHandler = () => { }

const Channel = (props) => {
  return (
    <>
      <View>
        <Text>
          Channel {props.id}
        </Text>
        <Button title="Load" onPress={loadHandler} />
        <Button title=" > " onPress={toggleSoundHandler} />
        <Slider minimumValue={0}
          maximumValue={1}
          step={0.05}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000" />
      </View>
    </>
  )
}

export default Channel
