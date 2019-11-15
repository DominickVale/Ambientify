import React from 'react'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { View, Text, Button } from 'react-native'
import { loadPreset, deletePreset } from '../actions'

const PresetItem = (props) => {
  const dispatch = useDispatch();

  return (
    <View>
      <Button title={props.presetName} onPress={() => {
        dispatch(loadPreset(props.presetName))
        props.navigation.navigate('Mixer')
      }} />
      <Button title="X" onPress={() => dispatch(deletePreset(props.presetName))} />
    </View>
  )
}

export default withNavigation(PresetItem)
