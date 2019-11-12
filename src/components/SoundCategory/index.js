import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

import SoundItem from './SoundItem'
import { SOUND_FILES } from '../../constants/index'

const index = (props) => {

  useEffect(() => {
    console.log(SOUND_FILES[props.category])
  }, [])

  const soundsFromCategory = Object.keys(SOUND_FILES[props.category]).map(soundName => (
    <SoundItem soundName={soundName} soundCategory={props.category} channelId={props.channelId} key={`${props.category}.${soundName}`} />
  ))

  return (
    <View>
      <Text>{props.category}</Text>
      {soundsFromCategory}
    </View>
  )
}

export default index
