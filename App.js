import React from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation';

import AppNavigator from './src/navigation'

const App = () => {
  return (
    <>
      <Mixer />
    </>
  )
}

export default createAppContainer(AppNavigator);

