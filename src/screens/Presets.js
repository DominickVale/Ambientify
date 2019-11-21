/**
 * TODO:
 *  Render list of presets, add onPress => load preset
 *  Add 'Add preset' button
 */

import React, { useEffect } from 'react'
import { Text, Button, BackHandler } from 'react-native'
import { useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { useBackHandlerWithListener } from '../utils'
import PresetItem from '../components/PresetItem'

const Presets = ({ componentId, navigation }) => {

  const presets = useSelector(state => state.presets);

  const backButtonHandler = () => {
    navigation.navigate('Mixer')
    return true;
  }

  useBackHandlerWithListener(BackHandler, navigation, backButtonHandler);

  return (
    <>
      <Text> Presets screen.</Text>
      <Button title="+" onPress={() => navigation.push('AddPreset')} />
      {Object.keys(presets).map(preset => {
        // Maybe add something else (?)
        if (preset !== 'customSounds') return (<PresetItem presetName={preset} key={preset} />)
      })}
    </>
  )
}

export default withNavigation(Presets)
