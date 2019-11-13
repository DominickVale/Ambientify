import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View } from 'react-native'
import Slider from '@react-native-community/slider'
import { useSelector } from 'react-redux'

import { setVolume } from '../../actions'

const VolumeSlider = ({ channelId }) => {
  const dispatch = useDispatch()
  const [localVolume, setLocalVolume] = useState(1)
  const { soundObject, volume, file } = useSelector(state => state.channels[channelId])

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

  const volumeHandler = async (newVolume) => {
    dispatch(setVolume(channelId, newVolume))
  }

  return (
    <>
      <View>
        <Slider minimumValue={0}
          maximumValue={1}
          value={localVolume}
          onValueChange={volumeHandler}
          step={0.05}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="#000000" />
      </View>
    </>
  )
}

export default VolumeSlider;