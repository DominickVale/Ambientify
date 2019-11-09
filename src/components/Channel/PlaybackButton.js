import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { playSound, stopSound } from '../../actions'

const PlaybackButton = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, playing, file } = useSelector(state => state.channels[channelId])

  useEffect(() => {
    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          dispatch(stopSound(channelId)) // Set playing: false when the sound has finished playing
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
        }
        catch (e) { console.log(e) }
      }
    })();
  }, [playing])


  const toggleSoundHandler = () => {
    if (file) {
      dispatch(playing ? stopSound(channelId) : playSound(channelId));
    }
  }

  return (
    <>
      <View>
        <Button title={playing ? ' || ' : ' > '} onPress={toggleSoundHandler} />
      </View>
    </>
  )
}

export default PlaybackButton;