import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, Button, View } from 'react-native'
import Slider from '@react-native-community/slider'
import { Audio } from 'expo-av'

import { loadSound, playSound, stopSound, setVolume } from '../actions'
import { SOUND_FILES } from '../constants/index'
/**
 * TODO:
 * Split sound logic into new class or renderless component
 * @param {*} props 
 */

const Channel = (props) => {
  const dispatch = useDispatch();
  const { soundObject, file, playing, volume } = useSelector(state => state.channels[props.id])
  const soundObjectStatus = async () => await soundObject.getStatusAsync();

  useEffect(() => {
    console.log(`Channel ${props.id} loaded`)
    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          dispatch(stopSound(props.id)) // Set playing: false when the sound has finished playing
        }
      });
    }
  }, [])

  useEffect(() => {

    (async () => {

      if (file) {
        try {
          if (playing)
            await soundObject.playAsync();
          else
            await soundObject.stopAsync();

          await soundObject.setVolumeAsync(volume)
        } catch (e) {
          console.log(e)
        }
      }

    })();

  }, [playing, volume, file])

  const loadHandler = () => dispatch(loadSound(props.id, soundObject, SOUND_FILES[props.soundName]))

  const toggleSoundHandler = () => {
    if (file) {
      dispatch(playing ? stopSound(props.id) : playSound(props.id));
    }
  }

  const volumeHandler = (newVolume) => {
    dispatch(setVolume(props.id, +newVolume.toFixed(2)))
  }
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
          value={volume}
          onValueChange={volumeHandler}
          step={0.05}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000" />
      </View>
    </>
  )
}

export default Channel;