import React, { useEffect } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { loadSound } from '../../actions'
import { SOUND_FILES } from '../../constants/index'

const LoadButton = ({ channelId, soundName }) => {
  const dispatch = useDispatch();
  const { soundObject, file } = useSelector(state => state.channels[channelId])

  useEffect(() => {
    (async () => {
      if (file) {
        const status = await soundObject.getStatusAsync()
        try {
          if (!status.isLoaded) { // If the sound object is not loaded, load new sound file from redux state
            await soundObject.loadAsync(file);
          } else {
            // In case of new sound file being loaded by preset dispatch
            // unload current loaded file and load the newly dispatched one
            await soundObject.unloadAsync();
            await soundObject.loadAsync(file);
          }
        } catch (error) {
          console.log(error)
        }
      }
    })()
  }, [file])

  const loadHandler = () => {
    dispatch(loadSound(channelId, soundObject, SOUND_FILES[soundName]))
  }

  return (
    <>
      <View>
        <Button title="Load" onPress={loadHandler} />
      </View>
    </>
  )
}

export default LoadButton;