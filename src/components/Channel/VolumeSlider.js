import React, { useEffect, useState } from 'react'
import Slider from '@react-native-community/slider'
import { View, PanResponder } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { setVolume } from '../../actions'
import { COLORS } from '../../constants'

const VolumeSlider = ({ channelId }) => {
  const dispatch = useDispatch()
  const [localVolume, setLocalVolume] = useState(1)
  const { soundObject, volume, file, currentSound } = useSelector(state => state.channels[channelId])

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true
  })

  useEffect(() => {
    (() => {
      if (file) {
        try {
          soundObject.setVolumeAsync(volume)
        } catch (error) {
          console.error(error)
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

  const volumeHandler = async (newVolume) => dispatch(setVolume(channelId, newVolume))

  return (
    <>
      <View>
        <Slider
          {...panResponder.panHandlers}
          style={{
            width: 100,
            height: 120,
            marginTop: 6,
            transform: [
              { rotateZ: '-90deg' },
              { scaleX: 1.3 }, { scaleY: 1.3 }
            ],
          }}
          minimumValue={0}
          maximumValue={1}
          value={localVolume}
          onValueChange={volumeHandler}
          step={0.05}
          minimumTrackTintColor={COLORS.sliderBar}
          maximumTrackTintColor={COLORS.head}
          thumbTintColor={COLORS.sliderTop} />
      </View>
    </>
  )
}

export default VolumeSlider;