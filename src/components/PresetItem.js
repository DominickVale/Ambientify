import React from 'react'
import { useDispatch } from 'react-redux'

import { View, Text, Button } from 'react-native'
import { loadPreset, deletePreset } from '../actions'

const PresetItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button title={props.presetName} onPress={() => dispatch(loadPreset(props.presetName))} />
      <Button title="X" onPress={() => dispatch(deletePreset(props.presetName))} />
    </View>
  )
}

export default PresetItem
