import React, { useEffect } from 'react'

export const useBackHandler = (BackHandler, navigation, callback) => {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', () => callback());
    return () => {
      BackHandler.removeEventListener('hardwareBackPress')
    };
  }, [])
}