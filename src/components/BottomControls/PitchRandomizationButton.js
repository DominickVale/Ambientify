import React from 'react'
import { View, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { useTranslation } from 'react-i18next';

import { StyledPitchButton } from './styles'
import { togglePitch } from '../../actions'
import { COLORS } from '../../constants'


const PitchRandomizationButton = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const pitchEnabled = useSelector(state => state.settings.pitchRandomization)

  const buttonHandler = () => {
    ToastAndroid.showWithGravity(
      `${pitchEnabled ? t('pitch_disabled') : t('pitch_enabled')}`,
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
    );
    dispatch(togglePitch())
  }
  return (
    <View>
      <StyledPitchButton onPress={buttonHandler}>
        <Icon name="music-note" size={32} color={pitchEnabled ? COLORS.bigPlayButtonFore : COLORS.icons} />
      </StyledPitchButton>
    </View >
  )
}

export default PitchRandomizationButton
