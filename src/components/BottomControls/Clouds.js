import React from 'react'
import { Image, Dimensions } from 'react-native'

import { CloudsContainer1, CloudsContainer2 } from './styles'

/**
 * Should probably fix it.
 */
const screenWidth = Dimensions.get('screen').width;

const Clouds = () => (
  <>
    <CloudsContainer1>
      <Image source={require('#ambientify-images/cloud1.png')} style={{ height: 200, width: screenWidth + 150, left: 20 }} />
    </CloudsContainer1>
    <CloudsContainer1>
      <Image source={require('#ambientify-images/cloud2.png')} style={{ height: 190, width: screenWidth + 100 }} />
    </CloudsContainer1>
    <CloudsContainer1>
      <Image source={require('#ambientify-images/cloud3.png')} style={{ height: 210, width: screenWidth + 200, left: -50 }} />
    </CloudsContainer1>
  </>
)

export default Clouds
