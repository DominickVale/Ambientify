import React from 'react'
import { useDispatch } from 'react-redux'

import { View, Text, Button } from 'react-native'
import { addPreset, loadPreset } from '../actions'

const PresetItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Preset n. {props.id}</Text>
      <Button title={`Add preset${props.id}`} onPress={() => dispatch(addPreset(props.presetName + props.id))} />
      <Button title={`Load preset${props.id}`} onPress={() => dispatch(loadPreset(props.presetName + props.id))} />
    </View>
  )
}

export default PresetItem
