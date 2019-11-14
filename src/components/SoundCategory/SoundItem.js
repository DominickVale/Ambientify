import React, { useEffect, useState } from 'react'
import { View, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { loadSound } from '../../actions'
import { SOUND_FILES } from '../../constants/index'

const SoundItem = ({ channelId, navigation, soundName, soundCategory }) => {
  const dispatch = useDispatch();
  const [loadState, setLoadState] = useState('Load')

  const loadButtonHandler = () => {
    dispatch(loadSound(channelId, SOUND_FILES[soundCategory][soundName], soundCategory, soundName))
    navigation.popToTop();
  }

  return (
    <View>
      <Button title={soundName} onPress={loadButtonHandler} />
    </View>
  )
}

export default withNavigation(SoundItem)

