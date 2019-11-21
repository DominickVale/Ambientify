import React, { useEffect, useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import * as FileSystem from 'expo-file-system'
import { Text, View, Button, TextInput } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import SoundItem from './SoundItem'
import { SOUND_FILES } from '../../constants'
import { addCustomSound } from '../../actions'

const index = (props) => {
  const dispatch = useDispatch()
  const [textValue, setTextValue] = useState('');

  const customSounds = useSelector(state => state.presets.customSounds)

  useEffect(() => {
    console.log(SOUND_FILES[props.category])
  }, [])

  const pickCustomSound = async () => {
    try {
      const res = await DocumentPicker.pick({ type: ['application/ogg'] })

      const from = res.uri;
      const to = FileSystem.documentDirectory + textValue + '.ogg/';
      FileSystem.copyAsync({ from, to })
      dispatch(addCustomSound(textValue, to))

    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Canceled')
      } else throw error;
    }
  }

  const soundsFromCategory = Object.keys(SOUND_FILES[props.category]).map(soundName => (
    <SoundItem soundName={soundName} soundCategory={props.category} channelId={props.channelId} key={`${props.category}.${soundName}`} />
  ))

  const soundsFromCustom = Object.keys(customSounds).map(soundName => (
    <SoundItem soundName={soundName} soundCategory={props.category} channelId={props.channelId} key={`${props.category}.${soundName}`} />
  ))

  const textValueHandler = (text) => setTextValue(text)


  return (
    <View>
      <Text>{props.category}</Text>

      {props.category == 'CUSTOM' && (
        <View>
          {textValue ?
            (<TextInput value={textValue} autoCorrect={true} onChangeText={textValueHandler} />) : (
              <TextInput placeholder="Enter the new sound name" autoCorrect={true} onChangeText={textValueHandler} />
            )}
          <Button title="load custom sound" onPress={pickCustomSound} />
          {soundsFromCustom}
        </View>)}

      {soundsFromCategory}
    </View>
  )
}

export default index
