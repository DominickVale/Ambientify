import React from 'react'
import LottieView from 'lottie-react-native';

import { CloudsContainer1, CloudsContainer2 } from './styles'

/**
 * Should probably fix it.
 */
const Clouds = () => (
  <>
    <CloudsContainer1>
      <LottieView style={{ width: '100%', height: '100%' }} source={require('#ambientify-images/cloud2.json')} autoPlay loop />
    </CloudsContainer1>
  </>
)

export default Clouds
