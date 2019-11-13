import React, { useEffect } from 'react'
import { Text } from 'react-native'
import Channel from '../components/Channel'
import { Audio } from 'expo-av'

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

  return (
    <>
      <Text> Channels container</Text>
      <Channel channelId={0} />
      <Channel channelId={1} />
      <Channel channelId={2} />
    </>
  )
}

export default Channels
