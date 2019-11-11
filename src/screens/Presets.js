/**
 * TODO:
 *  implement
 */

import React, { useEffect } from 'react'
import { Text, BackHandler } from 'react-native'

import NavHeader from '../components/NavHeader'

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
      <NavHeader title="Presets" />
      <Text> Presets screen</Text>
    </>
  )
}

export default Presets
