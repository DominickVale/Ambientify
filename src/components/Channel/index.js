import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastAndroid } from 'react-native'

import VolumeSlider from './VolumeSlider'
import LoopsWheelButton from './LoopsWheelButton'
import PlaybackButton from './PlaybackButton'
import LoadButton from './LoadButton'

import { StyledChannelContainer, ChannelTitle } from './styles'

import { SOUND_FILES } from '../../constants'
import { playFromLastMillis } from '../../utils'
import { loadSound, playSound, stopSound } from '../../actions'


const Channel = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, file, currentSoundCategory, currentSound, playing, randomizing } = useSelector(state => state.channels[channelId])
  const [channelTitle, setChannelTitle] = useState(`Channel ${channelId + 1}`)

  const loadSoundWithTitle = async (soundFile) => {
    await soundObject.loadAsync(soundFile)
      .then(async () => {
        setChannelTitle(currentSound.split('_').join(' '));
        dispatch(stopSound(channelId))
        if (playing) {
          if (randomizing) {
            playFromLastMillis(soundObject);
            dispatch(playSound(channelId))
          } else dispatch(playSound(channelId))
        }
      });
  }

  useEffect(() => {
    (async () => {
      if (currentSoundCategory !== 'none') {
        let soundFile;
        if (currentSoundCategory !== 'CUSTOM') soundFile = SOUND_FILES[currentSoundCategory][currentSound];
        else soundFile = file;
        if (file) {
          const soundStatus = await soundObject.getStatusAsync()

          try {

            setChannelTitle('Loading...')
            if (soundStatus.isLoaded) {
              await soundObject.unloadAsync().then(async () => {
                loadSoundWithTitle(soundFile)
              });
            } else loadSoundWithTitle(soundFile)
          } catch (error) { console.error('Error in loading sound in handler at Channel: ', channelId, error) }
        }
        else if (currentSound != 'none') dispatch(loadSound(channelId, soundFile, currentSoundCategory, currentSound))
      }
    })()
  }, [file, currentSound, currentSoundCategory])


  return (
    <>
      <StyledChannelContainer>
        <ChannelTitle numberOfLines={1} onPress={() => ToastAndroid.showWithGravityAndOffset(
          channelTitle,
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
          0, 100)}> {channelTitle} </ChannelTitle>

        <LoadButton channelId={channelId} />
        <LoopsWheelButton channelId={channelId} />
        <VolumeSlider channelId={channelId} />
        <PlaybackButton channelId={channelId} />
      </StyledChannelContainer>
    </>
  )
}

export default Channel;