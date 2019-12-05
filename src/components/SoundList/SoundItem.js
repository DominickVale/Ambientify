import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { Audio } from 'expo-av'
import * as FileSystem from 'expo-file-system'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

import { COLORS } from '../../constants'
import { loadSound } from '../../actions'
import { SOUND_FILES } from '../../constants/index'
import { ParseFileNameToString, parseFileNameToString } from '../../utils'
import { SoundLoadButton, SoundPreviewButton, StyledSoundItem, StyledText, CustomSoundDeleteButton } from './styles'

const SoundItem = ({ isCustomSound, onCustomSoundDelete, channelId, navigation, soundName, soundCategory }) => {
  const dispatch = useDispatch();
  const [playing, setPlaying] = useState(false)
  const customSounds = useSelector(state => state.presets.customSounds)

  const playIcon = <MaterialIcon name="play-arrow" size={24} color={COLORS.bigPlayButtonFore} />;
  const pauseIcon = <MaterialIcon name="pause" size={24} color={COLORS.bigPlayButtonFore} />
  const deleteIcon = <FontistoIcon name="close-a" size={14} color={COLORS.close} />

  useEffect(() => {
    let soundObject;

    (async () => {
      if (playing) {
        try {
          soundObject = new Audio.Sound()
          await soundObject.loadAsync(soundCategory === 'CUSTOM' ? customSounds[soundName] : SOUND_FILES[soundCategory][soundName])
            .then(async () => soundObject.playAsync());
          soundObject.setOnPlaybackStatusUpdate((playbackStatus) => { if (playbackStatus.didJustFinish) setPlaying(false) });
        } catch (error) { console.log(error) }
      } else {
        if (soundObject) {
          soundObject.stopAsync();
          soundObject.unloadAsync();
        }
      }
    })();

    return (() => {
      if (soundObject) {
        soundObject.stopAsync();
        soundObject.unloadAsync();
      }
    })
  }, [playing])

  const loadButtonHandler = () => {
    if (soundCategory === 'CUSTOM') {

      dispatch(loadSound(channelId, customSounds[soundName], 'CUSTOM', soundName))
      console.log('loading custom sound')
    } else { dispatch(loadSound(channelId, SOUND_FILES[soundCategory][soundName], soundCategory, soundName)) }
    navigation.popToTop();
  }

  const soundDeleteHandler = () => {
    const uri = customSounds[soundName].uri
    onCustomSoundDelete(uri, soundName)
  }

  return (
    <StyledSoundItem>

      <SoundPreviewButton onPress={() => setPlaying(playing => !playing)}>
        <StyledText>{playing ? pauseIcon : playIcon}</StyledText>
      </SoundPreviewButton>
      <SoundLoadButton onPress={loadButtonHandler}>
        <StyledText numberOfLines={1}>{parseFileNameToString(soundName)}</StyledText>
      </SoundLoadButton>
      {isCustomSound && (
        <CustomSoundDeleteButton onPress={soundDeleteHandler}>
          <StyledText>{isCustomSound && deleteIcon}</StyledText>
        </CustomSoundDeleteButton>)
      }
    </StyledSoundItem>
  )
}

export default withNavigation(SoundItem)