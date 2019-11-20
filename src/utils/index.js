import React, { useEffect } from 'react'

export const useBackHandler = (BackHandler, navigation, callback) => {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', callback);
    console.log('added backhandler')
    return () => {
      BackHandler.removeEventListener('hardwareBackPress')
      console.log('removed backhandler')
    };
  }, [])
}

export const useBackHandlerWithListener = (BackHandler, navigation, callback) => {

  useEffect(() => {
    navigation.addListener('didFocus', payload => {
      BackHandler.addEventListener('hardwareBackPress', callback)
    })

    const componentDidBlur = navigation.addListener('didBlur', payload => {
      BackHandler.removeEventListener('hardwareBackPress', callback) // Remove handler if back button is pressed
    })

    return () => {
      BackHandler.removeEventListener('hardwareBackPress', callback) //Remove handler if app closes or component is unloaded
      componentDidBlur.remove();
      console.log('removed backhandler with listener')
    }
  }, [navigation.state])

}

export const playFromLastMillis = async (soundObject) => {
  /**
  * Bit of a hacky way to fire didJustFinish event for the soundObject so that it can start shuffling withot having it to play first
  */
  let { durationMillis } = await soundObject.getStatusAsync()
  soundObject.playFromPositionAsync(durationMillis - 1)
  await soundObject.setIsLoopingAsync(false);
}