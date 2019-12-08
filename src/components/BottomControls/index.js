import React from 'react'
import { AdMobBanner } from 'react-native-admob'

import { BottomControlsContainer, StyledAd } from './styles'
import BigPlaybackButton from './BigPlaybackButton'
import PitchRandomizationButton from './PitchRandomizationButton'
import Clouds from './Clouds'
import Timer from './Timer'


const BottomControls = () => {
  return (
    <>
      <StyledAd>
        <AdMobBanner
          adSize="smartBanner"
          adUnitID="ca-app-pub-3940256099942544/6300978111"
          testDevices={[AdMobBanner.simulatorId]}
          onAdFailedToLoad={error => console.error(error)}
        />
      </StyledAd>
      <BottomControlsContainer>
        <Clouds />
        <Timer />
        <BigPlaybackButton />
        <PitchRandomizationButton />
      </BottomControlsContainer>
    </>
  )
}

export default BottomControls
