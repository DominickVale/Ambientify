import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Text, View } from 'react-native'

import VolumeSlider from './VolumeSlider'
import PlaybackButton from './PlaybackButton'
import LoadButton from './LoadButton'
/**
 * TODO:
 * 
 * Implement presets functionality
 * 
 * @param {*} props 
 */

const Channel = ({ channelId }) => {
  const { soundObject, file, currentSound } = useSelector(state => state.channels[channelId])
  const [channelTitle, setChannelTitle] = useState(`Channel ${channelId}`)

  useEffect(() => {
    (async () => {
      if (file) {
        const status = await soundObject.getStatusAsync()
        try {
          if (!status.isLoaded) { // If the sound object is not loaded, load new sound file from redux state
            setChannelTitle('Loading...')
            console.log('Loading file n: ', file)
            await soundObject.loadAsync(file).then(() => setChannelTitle(currentSound.split('_').join(' ')));
          } else {
            // In case of new sound file being loaded by preset dispatch
            // unload current loaded file and load the newly dispatched one
            await soundObject.unloadAsync();
            await soundObject.loadAsync(file);
          }
        } catch (error) {
          console.error('Error in loading sound in handler at Channel', error)
        }
      }
    })()
  }, [file])

  return (
    <>
      <View>
        <Text>
          {channelTitle}
        </Text>
        <LoadButton channelId={channelId} />
        <PlaybackButton channelId={channelId} />
        <VolumeSlider channelId={channelId} />
      </View>
    </>
  )
}

export default Channel;