import React, { useEffect } from 'react'

export const useBackHandler = (BackHandler, navigation, callback) => {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => callback());
    return () => {
      BackHandler.removeEventListener('hardwareBackPress')
    };
  }, [])
}

export const useBackHandlerWithListener = (BackHandler, navigation, listener, callback) => {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => callback())

    const componentDidBlur = navigation.addListener(listener, payload => {
      BackHandler.removeEventListener('hardwareBackPress', () => callback()) // Remove handler if back button is pressed
    })

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', () => callback()) //Remove handler if app closes or component is unloaded
      componentDidBlur.remove();
    }
  }, [])

}