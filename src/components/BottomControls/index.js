import React from 'react'
import { Dimensions } from 'react-native'
import { AdMobBanner } from 'react-native-admob'

import { BottomControlsContainer, StyledAd } from './styles'
import BigPlaybackButton from './BigPlaybackButton'
import PitchRandomizationButton from './PitchRandomizationButton'
import Clouds from './Clouds'
import Timer from './Timer'

const adHeight = Dimensions.get('screen').height / 12

const BottomControls = () => {
  return (
    <>
      <BottomControlsContainer bottom={adHeight - 10}>
        <Clouds />
        <Timer />
        <BigPlaybackButton />
        <PitchRandomizationButton />
      </BottomControlsContainer>
      <StyledAd maxHeight={adHeight}>
        <AdMobBanner
          adSize="smartBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </StyledAd>
    </>
  )
}

export default BottomControls
