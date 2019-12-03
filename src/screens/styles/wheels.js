import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const WheelsContainer = styled.View`
flex-direction: row;
justify-content: center;
align-content: center;
align-self: center;
max-width: 74%;
margin: 16% auto 0 auto;
`

export const StyledWheelPicker = styled.View`
flex: 1;
align-self: center;
margin: 0;
padding: 0;
`

export const SemiColonSpacer = styled.Text`
color: ${COLORS.bigPlayButtonFore};
margin: -10px;
padding-bottom: 35px;
align-self: center;
text-align: center;
font-size: 26px;
`