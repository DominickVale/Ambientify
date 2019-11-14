/**
 * TODO:
 *  implement
 */

import React, { useEffect } from 'react'
import { Text, BackHandler } from 'react-native'
import { withNavigation } from 'react-navigation'

import PresetItem from '../components/PresetItem'

const Presets = ({ componentId, navigation }) => {

  const backButtonHandler = () => {
    navigation.navigate('Mixer')
    return true;
  }

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backButtonHandler)

    const componentDidBlur = navigation.addListener('didBlur', payload => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler) // Remove handler if back button is pressed
    })

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', backButtonHandler) //Remove handler if app closes or component is unloaded
      componentDidBlur.remove();
    }
  }, [])

  return (
    <>
      <Text> Presets screen.</Text>
      <PresetItem id={0} presetName="testing" />
      <PresetItem id={1} presetName="testing" />
      <PresetItem id={2} presetName="testing" />
    </>
  )
}

export default withNavigation(Presets)
