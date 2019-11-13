import React, { useEffect } from 'react'
import { View, Text } from 'react-native'
import { createAppContainer } from 'react-navigation'

import AppNavigator from './src/navigation'

const App = () => {
  //The app component doesn't render anything at this time. Check ./src/navigation

  return (
    <>
    </>
  )
}

export default createAppContainer(AppNavigator);

