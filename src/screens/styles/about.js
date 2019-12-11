import styled from 'styled-components/native'

import { normSize, heightPercentageToDP, widthPercentageToDP } from '../../utils'

export const ImageContainer = styled.View`
margin-top: ${normSize(-30)};
z-index: -1;
max-width: 100%;
max-height: ${heightPercentageToDP(26)};
align-self: center;
`

export const Filler = styled.View`
height: ${props => heightPercentageToDP(props.height) / 10}%;
`