import React from 'react'
import { View, Button } from 'react-native'
import { withNavigation } from 'react-navigation'

const LoadButton = ({ channelId, navigation }) => {

  const loadHandler = () => {
    navigation.navigate('SoundPicker', { channelId: channelId })
  }

  return (
    <>
      <View>
        <Button title="Load" onPress={loadHandler} />
      </View>
    </>
  )
}

export default withNavigation(LoadButton)