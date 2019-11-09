import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Text, View } from 'react-native'
import { Audio } from 'expo-av'

import { stopSound } from '../../actions'
import VolumeSlider from './VolumeSlider'
import PlaybackButton from './PlaybackButton'
import LoadButton from './LoadButton'
/**
 * TODO:
 * 
 * Add load button prompt + load sound screen implementation
 * 
 * @param {*} props 
 */

const Channel = (props) => {
  const dispatch = useDispatch();
  const { soundObject, file, playing } = useSelector(state => state.channels[props.id])


  // <LoadButton soundName prop is hardcoded only for testing purposes
  return (
    <>
      <View>
        <Text>
          Channel {props.id}
        </Text>
        <LoadButton channelId={props.id} soundName={props.soundName} />
        <PlaybackButton channelId={props.id} />
        <VolumeSlider channelId={props.id} />
      </View>
    </>
  )
}

export default Channel;