import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import { useSelector } from 'react-redux'

import { setVolume } from '../../actions'
import Slider from './Slider'

const VolumeSlider = ({ channelId }) => {
  const dispatch = useDispatch()
  const [localVolume, setLocalVolume] = useState(1)
  const { soundObject, volume, file, currentSound } = useSelector(state => state.channels[channelId])

  useEffect(() => {
    (async () => {
      if (file) {
        try {
          await soundObject.setVolumeAsync(volume)
        } catch (error) {
          console.log(error)
        }
      }
    })();
  }, [volume])

  useEffect(() => {
    /**
     * Set local volume when a preset is loaded.
     * This prevents any unwanted flickering of the slider 
     * that would be caused by dispatching on each slider value update
     */
    setLocalVolume(volume)
  }, [file, currentSound, soundObject])

  const volumeHandler = (newVolume) => {
    dispatch(setVolume(channelId, newVolume))
  }

  return (
    <>
      <View>
        <Slider onChange={volumeHandler} />
      </View>
    </>
  )
}

export default VolumeSlider;