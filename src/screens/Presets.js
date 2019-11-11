/**
 * TODO:
 *  implement
 */

import React, { useEffect } from 'react'
import { Text, BackHandler } from 'react-native'

const Presets = ({ componentId }) => {

  const backButtonHandler = () => {
    return true;
  }

  useEffect(() => {
    /*     BackHandler.addEventListener('hardwareBackPress', backButtonHandler)
        const componentDidDisappear = Navigation.events().registerComponentDidDisappearListener(({ componentId: compId }) => {
          if (componentId === compId) {
            BackHandler.removeEventListener('hardwareBackPress', backButtonHandler)
          }
        })
    
        return () => {
        } */
  }, [])

  return (
    <>
      <Text> Presets screen</Text>
    </>
  )
}

export default Presets
