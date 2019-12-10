import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { normSize, widthPercentageToDP, heightPercentageToDP } from '../../utils'

export const WheelsContainer = styled.View`
flex-direction: row;
justify-content: center;
align-content: center;
align-self: center;
max-width: ${widthPercentageToDP(49)};
margin: ${heightPercentageToDP(4)}px auto 0 auto;
`

export const StyledWheelPicker = styled.View`
flex: 1;
align-self: center;
margin: 0;
padding: 0;
`

export const Filler = styled.View`
height: ${props => heightPercentageToDP(props.height)}%;
`

export const SemiColonSpacer = styled.Text`
color: ${COLORS.bigPlayButtonFore};
margin: ${normSize(-10)}px;
padding-bottom: ${normSize(35)};
align-self: center;
text-align: center;
font-size: ${normSize(24)};
`