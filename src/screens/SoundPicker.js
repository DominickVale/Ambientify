import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'

const SoundPicker = ({navigation}) => {
  return (
      <View onPress={() => navigation.pop()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
        <View style={{ height: "80%", width: '80%', backgroundColor: "white", justifyContent: "flex-start" }}>
          <Text>Sound Picker Modal</Text>
        </View>
      </View>
  )
}

SoundPicker.navigationOptions={
  header: null,
  headerMode: 'none'
}

export default withNavigation(SoundPicker)
