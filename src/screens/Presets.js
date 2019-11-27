/**
 * TODO:
 *  Render list of presets, add onPress => load preset
 *  Add 'Add preset' button
 */

import React, { useEffect } from 'react'
import { Text, Button, BackHandler, ImageBackground, ScrollView } from 'react-native'
import { useSelector } from 'react-redux'
import { withNavigation } from 'react-navigation'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { PresetsContainer, AddPresetButton, Filler } from './styles/presets'
import { useBackHandlerWithListener } from '../utils'
import PresetItem from '../components/PresetItem'
import { COLORS } from '../constants'

const Presets = ({ componentId, navigation }) => {

  const presets = useSelector(state => state.presets);

  const backButtonHandler = () => {
    navigation.navigate('Mixer')
    return true;
  }

  useBackHandlerWithListener(BackHandler, navigation, backButtonHandler);

  return (
    <>
      <ImageBackground source={require('../../assets/images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView stickyHeaderIndices={[1]}>
          <Filler height={80} />
          <AddPresetButton>
            <MaterialIcon name="add" size={38} color={COLORS.headerFore} onPress={() => navigation.push('AddPreset')} />
          </AddPresetButton>
          <PresetsContainer>
            <Filler height={50} />
            {Object.keys(presets).map(preset => {
              // Maybe add something else (?)
              if (preset !== 'customSounds') return (<PresetItem presetName={preset} key={preset} />)
            })}
          </PresetsContainer>
        </ScrollView>

      </ImageBackground>
    </>
  )
}

export default withNavigation(Presets)
