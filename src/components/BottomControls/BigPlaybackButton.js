import React from 'react'
import { View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import { MuteButtonContainer, MuteButton } from './styles'
import { playSoundAll, stopSoundAll } from '../../actions'
import { COLORS } from '../../constants'
import { normSize } from '../../utils'


const BigPlaybackButton = () => {

  const dispatch = useDispatch()
  const isPlaying = useSelector(state => Object.keys(state.channels).some(channel => state.channels[channel].playing))
  const playIcon = <Icon name="play-arrow" size={normSize(39)} color={COLORS.bigPlayButtonFore} />;
  const pauseIcon = <Icon name="pause" size={normSize(39)} color={COLORS.bigPlayButtonFore} />


  return (
    <View>
      <MuteButtonContainer >
        <MuteButton onPress={() => dispatch(isPlaying ? stopSoundAll() : playSoundAll())}>
          {isPlaying ? pauseIcon : playIcon}
        </MuteButton>
      </MuteButtonContainer>
    </View >
  )
}

export default BigPlaybackButton
