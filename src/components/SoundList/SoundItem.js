import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { loadSound } from '../../actions'
import { SOUND_FILES } from '../../constants/index'

const SoundItem = ({ channelId, navigation, soundName, soundCategory }) => {
  const dispatch = useDispatch();
  const [loadState, setLoadState] = useState('Load')

  const customSounds = useSelector(state => state.presets.customSounds)

  const loadButtonHandler = () => {
    if (soundCategory === 'CUSTOM') {

      dispatch(loadSound(channelId, customSounds[soundName], 'CUSTOM', soundName))
      console.log('loading custom sound')
    } else { dispatch(loadSound(channelId, SOUND_FILES[soundCategory][soundName], soundCategory, soundName)) }
    navigation.popToTop();
  }

  return (
    <View>
      <Button title={soundName} onPress={loadButtonHandler} />
    </View>
  )
}

export default withNavigation(SoundItem)

