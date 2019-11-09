import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Slider from '@react-native-community/slider'
import { useSelector } from 'react-redux'


const VolumeSlider = ({ channelId }) => {
  const [localVolume, setLocalVolume] = useState(1)
  const { soundObject, volume, file } = useSelector(state => state.channels[channelId])

  useEffect(() => {
    (() => {
      if (file) volumeHandler(volume)
    })();
  }, [volume])

  const volumeHandler = async (newVolume) => {
    setLocalVolume(newVolume)
    try {
      await soundObject.setVolumeAsync(newVolume)
    } catch (error) {
      console.log(error)
    }
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