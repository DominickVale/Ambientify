import React from 'react'
import { View, Text } from 'react-native'
import { withNavigation } from 'react-navigation'

const About = () => {
  return (
    <View>
      <Text>About page</Text>
    </View>
  )
}

export default withNavigation(About)
