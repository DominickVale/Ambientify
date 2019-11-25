import React from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

import { StyledButton, StyledButtonText } from './styles'

const LoadButton = ({ channelId, navigation }) => {

  const loadHandler = () => {
    navigation.navigate('SoundPicker', { channelId: channelId })
  }

  return (
    <>
      <View>
        <StyledButton onPress={loadHandler}>
          <StyledButtonText>Load</StyledButtonText>
        </StyledButton>
      </View>
    </>
  )
}

export default withNavigation(LoadButton)