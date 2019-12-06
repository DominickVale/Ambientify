import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const BottomControlsContainer = styled.View`
position: absolute;
background-color: rgba(80, 20, 20, 0.8);
bottom: 26px;
align-self: center;
justify-content: space-around;
align-items: center;
align-content: center;
flex-direction: row;
height: 16%;
width: 81%;
`

export const MuteButtonContainer = styled.View`
width: 90px;
height: 90px;
border-radius: 70px;
background-color: ${COLORS.bigPlayButtonShadowBG};
justify-content: center;
`

export const MuteButton = styled.TouchableHighlight`
background-color: ${COLORS.bigPlayButtonBG};
width: 70;
height: 70;
border-radius: 50px;
align-content: center;
align-items: center;
justify-content: center;
margin: 0 auto;
`

export const StyledPitchButton = styled.TouchableHighlight`
justify-content: center;
border-radius: 50px;
padding: 10px;
margin: -10px;
`

export const StyledTimerButton = styled(StyledPitchButton)``

export const StyledTimerText = styled.Text`
position: absolute;
text-align: center;
font-size: 13px;
top: 30px;
width: 120px;
right: -45px;
padding-top: 5px;
color: ${COLORS.headerFore};`

export const CloudsContainer1 = styled.View`
position: absolute;
height: 500;
width: 500;
bottom: -100;
left: -100;
flex: 1;
`

export const CloudsContainer2 = styled(CloudsContainer1)`
height: 600;
width: 800;
bottom: -180;
transform: scaleX(-1)
` 