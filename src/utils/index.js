import { useEffect, useRef } from 'react'
import { Dimensions, PixelRatio } from 'react-native';

export const usePrev = value => {

  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const useBackHandler = (BackHandler, navigation, callback) => {

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', callback);
    return () => BackHandler.removeEventListener('hardwareBackPress')
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

export const parseStringToValidFileName = (string) => {
  return string.replace(/\s/g, '_')
}

export const parseFileNameToString = (string) => {
  return string.replace(/\_/g, ' ')
}

export const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  const elemWidth = parseFloat(widthPercent);
  return PixelRatio.roundToNearestPixel(screenWidth * elemWidth / 100);
};

export const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  const elemHeight = parseFloat(heightPercent);
  return PixelRatio.roundToNearestPixel(screenHeight * elemHeight / 100);
};

export const normSize = (size) => {
  const SCREEN_WIDTH = Dimensions.get('window').width;
  const SCALE = 375;
  const ratio = size / SCALE;
  const newSize = Math.round(ratio * SCREEN_WIDTH);
  return newSize;
}