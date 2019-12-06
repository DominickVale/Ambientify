import React, { useState, useEffect, useRef } from 'react'
import { View, Image, Dimensions, Animated } from 'react-native'
import { Easing } from 'react-native-reanimated'
import LottieView from 'lottie-react-native';

import { CloudsContainer1, CloudsContainer2 } from './styles'

/**
 * Should probably fix it.
 */
const Clouds = () => {

  return (
    <>
      <CloudsContainer1>
        <LottieView style={{ width: '100%', height: '100%', transform: [{translateY: 12}, {translateX: -130}] }} source={require('#ambientify-images/cloud2.json')} autoPlay loop />
      </CloudsContainer1>
      <CloudsContainer1>
      <LottieView style={{ width: '100%', height: '100%', transform: [{translateY: 16}, {translateX: -120}] }} source={require('#ambientify-images/cloud1.json')} autoPlay loop />
      </CloudsContainer1>
      <CloudsContainer2>
        <LottieView style={{ width: '100%', height: '100%', transform: [{translateY: 0}, {translateX: -100}] }} source={require('#ambientify-images/cloud1.json')} autoPlay loop />
      </CloudsContainer2>
      <CloudsContainer2>
        <LottieView style={{ width: '100%', height: '100%',transform: [{translateY: 18}, {translateX: -150}] }} source={require('#ambientify-images/cloud2.json')} autoPlay loop />
      </CloudsContainer2>
    </>
  )
}

export default Clouds
