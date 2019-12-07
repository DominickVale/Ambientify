import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const ImageContainer = styled.View`
margin-top: -50px;
z-index: -1;
width: auto;
height: auto;
align-self: center;
`

export const Filler = styled.View`
height: ${props => props.height};
`