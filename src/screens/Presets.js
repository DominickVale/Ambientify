import React from 'react'
import { BackHandler, ImageBackground, ScrollView } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { withNavigation } from 'react-navigation'
import { useSelector } from 'react-redux'

import { PresetsContainer, AddPresetButton, Filler } from './styles/presets'
import BottomControls from '../components/BottomControls'
import { useBackHandlerWithListener } from '../utils'
import PresetItem from '../components/PresetItem'
import { COLORS } from '../constants'

/**
 * TODO: 
 * add dynamic background image
 */

const Presets = ({ navigation }) => {

  const presets = useSelector(state => state.presets);

  const backButtonHandler = () => {
    navigation.navigate('Mixer')
    return true;
  }

  useBackHandlerWithListener(BackHandler, navigation, backButtonHandler);

  return (
    <>
      <ImageBackground source={require('#ambientify-images/bg.jpg')} style={{ width: '100%', height: '100%' }}>
        <ScrollView stickyHeaderIndices={[1]}>
          <Filler height={80} />
          <AddPresetButton>
            <MaterialIcon name="add" size={38} color={COLORS.headerFore} onPress={() => navigation.push('AddPreset')} />
          </AddPresetButton>
          <PresetsContainer>
            <Filler height={50} />
            {Object.keys(presets).map(preset => preset !== 'customSounds' && (<PresetItem presetName={preset} key={preset} />))}
          </PresetsContainer>
        </ScrollView>
        <BottomControls />
      </ImageBackground>
    </>
  )
}

export default withNavigation(Presets)
