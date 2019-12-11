import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { normSize, heightPercentageToDP } from '../../utils'

export const PresetsContainer = styled.View`
width: 100%;
padding: 0 ${normSize(40)}px;
align-self: center;
flex-direction: column;
justify-content: space-between;
flex: 1;
margin-bottom: ${normSize(-18)}px;
z-index: -1;
`

export const AddPresetButton = styled.TouchableHighlight`
margin-top: ${heightPercentageToDP(3.4)}px;
padding: ${normSize(10)}px;
border-radius: 50px;
background-color: ${COLORS.bigPlayButtonBG};
align-self: center;
align-items: center;
justify-content: center;
z-index: 100;
`

export const Filler = styled.View`
height: ${props => heightPercentageToDP(props.height) / 10};
flex: 1
`