import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { normSize, widthPercentageToDP, heightPercentageToDP } from '../../utils'

export const StyledAd = styled.View`
position: relative;
max-height: ${props => props.maxHeight || '80px'};
height: ${props => props.maxHeight || '80px'};
background-color: ${COLORS.primary};
justify-content: center;
align-content: center;
align-items: center;
bottom: 0;
left: 0;
z-index: 10000;
overflow: hidden;
`

export const BottomControlsContainer = styled.View`
position: absolute;
background-color: transparent;
bottom: ${props => props.bottom};
align-self: center;
justify-content: space-around;
align-items: center;
align-content: center;
flex-direction: row;
height: ${heightPercentageToDP(20)};
width: ${widthPercentageToDP(81)};
`

export const MuteButtonContainer = styled.View`
width: ${normSize(90)};
height: ${normSize(90)};
border-radius: 70px;
background-color: ${COLORS.bigPlayButtonShadowBG};
justify-content: center;
`

export const MuteButton = styled.TouchableHighlight`
background-color: ${COLORS.bigPlayButtonBG};
width: ${normSize(60)};
height: ${normSize(60)};
border-radius: 50px;
align-content: center;
align-items: center;
justify-content: center;
margin: 0 auto;
`

export const StyledPitchButton = styled.TouchableHighlight`
justify-content: center;
border-radius: 50px;
padding: ${normSize(10)}px;
margin: ${normSize(-10)}px;
`

export const StyledTimerButton = styled(StyledPitchButton)``

export const StyledTimerText = styled.Text`
position: absolute;
text-align: center;
top: ${normSize(30)};
width: ${normSize(120)};
right: ${normSize(-45)};
padding-top: ${normSize(5)};
color: ${COLORS.headerFore};
font-size: ${normSize(13)};
`

export const CloudsContainer1 = styled.View`
position: absolute;
bottom: ${normSize(-40)};
left: ${normSize(-60)};
flex: 1;
`

export const CloudsContainer2 = styled(CloudsContainer1)`
` 