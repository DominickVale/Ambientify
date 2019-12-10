import React from 'react'
import { Image, Dimensions } from 'react-native'

import { CloudsContainer1, CloudsContainer2 } from './styles'
import {normSize} from '../../utils'

/**
 * Should probably fix it.
 */
const screenWidth = Dimensions.get('screen').width;

const Clouds = () => (
  <>
    <CloudsContainer1>
      <Image source={require('#ambientify-images/cloud1.png')} style={{ height: normSize(180), width: screenWidth + normSize(100), left: normSize(20) }} />
    </CloudsContainer1>
    <CloudsContainer1>
      <Image source={require('#ambientify-images/cloud2.png')} style={{ height: normSize(170), width: screenWidth + normSize(50) }} />
    </CloudsContainer1>
    <CloudsContainer1>
      <Image source={require('#ambientify-images/cloud3.png')} style={{ height: normSize(185), width: screenWidth + normSize(180), left: normSize(-50) }} />
    </CloudsContainer1>
  </>
)

export default Clouds
