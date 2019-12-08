import React from 'react'
import { View } from 'react-native'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next';

import { StyledButton, StyledButtonText } from './styles'


const LoadButton = ({ channelId, navigation }) => {
  const { t } = useTranslation();
  const loadHandler = () => navigation.navigate('SoundPicker', { channelId: channelId })

  return (
    <>
      <View>
        <StyledButton onPress={loadHandler}>
          <StyledButtonText>{t('load')}</StyledButtonText>
        </StyledButton>
      </View>
    </>
  )
}

export default withNavigation(LoadButton)