import React from 'react'
import { useDispatch } from 'react-redux'

import { View, Text, Button } from 'react-native'
import { addPreset } from '../actions'

const PresetItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>Preset n. {props.id}</Text>
      <Button title="Add preset 1" onPress={() => dispatch(addPreset('testing1'))} />
      <Button title="Add preset 2" onPress={() => dispatch(addPreset('testing2'))} />
      <Button title="Add preset 3" onPress={() => dispatch(addPreset('testing3'))} />
    </View>
  )
}

export default PresetItem
