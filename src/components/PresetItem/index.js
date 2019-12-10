import React from 'react'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

import { loadPreset, deletePreset } from '../../actions'
import { PresetItemContainer, PresetLoadButton, PresetDeleteButton, StyledText } from './styles'
import { COLORS } from '../../constants'
import { normSize } from '../../utils'

const PresetItem = (props) => {
  const dispatch = useDispatch();

  return (
    <PresetItemContainer>
      <PresetLoadButton onPress={() => {
        dispatch(loadPreset(props.presetName))
        props.navigation.navigate('Mixer')
      }}>
        <StyledText numberOfLines={1}>{props.presetName}</StyledText>
      </PresetLoadButton>
      <PresetDeleteButton onPress={() => dispatch(deletePreset(props.presetName))}>
        <StyledText>
          <FontistoIcon name="close-a" size={normSize(16)} color={COLORS.close} />
        </StyledText>
      </PresetDeleteButton>
    </PresetItemContainer>
  )
}

export default withNavigation(PresetItem)
