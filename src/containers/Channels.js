import React, { useEffect } from 'react'
import { Text, ScrollView } from 'react-native'
import Channel from '../components/Channel'
import { Audio } from 'expo-av'

import { StyledChannelsContainer } from './styles'
import { NUMBER_OF_CHANNELS } from '../constants'

async function initSounds() {
  await Audio.setAudioModeAsync({
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

  useEffect(() => {
    initSounds();
  }, [])

  const getChannels = () => {
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
          {getChannels()}
        </StyledChannelsContainer>
      </ScrollView>
    </>
  )
}

export default Channels