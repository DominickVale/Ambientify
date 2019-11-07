import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av'
import { initChannel } from '../actions'
/**
 * TODO:
 * Add test button functionalities x redux
 * @param {*} props 
 */

const Channel = (props) => {
  const dispatch = useDispatch();
  const channel = useSelector(state => state.channels[props.id])

  useEffect(() => {
    dispatch(initChannel(props.id, new Audio.Sound()))
    return () => {
      cleanup();
    };
  }, [])

  useEffect(() => {
    console.log("Channel loaded")
  }, [channel.loaded])

  const cleanup = async () => { }
  const loadHandler = () => { console.log(channel) }
  const toggleSoundHandler = () => { }

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
