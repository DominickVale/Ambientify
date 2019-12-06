import React, { useEffect } from 'react'
import { ScrollView } from 'react-native'
import Channel from '../components/Channel'
import { Audio } from 'expo-av'

import { StyledChannelsContainer, Filler } from './styles'
import { NUMBER_OF_CHANNELS } from '../constants'

function _initSounds() {
  Audio.setAudioModeAsync({
    allowsRecordingIOS: false,
    staysActiveInBackground: true,
    interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
    playsInSilentModeIOS: true,
    shouldDuckAndroid: false,
    interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    playThroughEarpieceAndroid: true,
  });
}

const Channels = (props) => {

  useEffect(() => _initSounds()
    , [])

  const _getChannels = () => {
    let channels = [];
    for (let i = 0; i < NUMBER_OF_CHANNELS; i++) {
      channels.push(<Channel channelId={i} key={i} />)
    }
    return channels
  }

  return (
    <>
      <ScrollView>
        <StyledChannelsContainer>
          {_getChannels()}
        </StyledChannelsContainer>
        <Filler />
      </ScrollView>
    </>
  )
}

export default Channels