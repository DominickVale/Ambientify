import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, PanResponder } from 'react-native'
import Slider from '@react-native-community/slider'
import { useSelector } from 'react-redux'

import { setVolume } from '../../actions'

const VolumeSlider = ({ channelId }) => {
  const dispatch = useDispatch()
  const [localVolume, setLocalVolume] = useState(1)
  const { soundObject, volume, file, currentSound } = useSelector(state => state.channels[channelId])

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
    onMoveShouldSetPanResponder: (evt, gestureState) => true,
    onMoveShouldSetPanResponderCapture: (evt, gestureState) => true
  })


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

  const volumeHandler = async (newVolume) => {
    dispatch(setVolume(channelId, newVolume))
  }

  return (
    <>
      <View>
        <Slider
          {...panResponder.panHandlers}
          style={{
            width: 120,
            height: 120,
            transform: [
              { rotateZ: '-90deg' },
            ],
          }}
          minimumValue={0}
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