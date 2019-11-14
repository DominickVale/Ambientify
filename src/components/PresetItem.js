import React from 'react'
import { useDispatch } from 'react-redux'

import { View, Text, Button } from 'react-native'
import { loadPreset } from '../actions'

const PresetItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button title={props.presetName} onPress={() => dispatch(loadPreset(props.presetName))} />
    </View>
  )
}

export default PresetItem
