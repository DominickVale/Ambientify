import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { InnerContainer } from '../../components/Modal/styles'

export const SoundCategoryContainer = styled(InnerContainer)`
width: ${props => props.width};
align-self: center;
padding: 0 22px 22px 22px;
margin: auto 0;
`

export const SoundCategoryImageContainer = styled.View`
flex: 1;
height: ${props => props.height};
justify-content: center;
overflow: hidden;
`

export const SoundCategoryText = styled.Text`
position: absolute;
z-index: 1;
color:${COLORS.headerFore};
font-family: 'Montserrat-SemiBold';
align-self: center;
font-size: 28px;
`

export const Filler = styled.View`
flex: 1;
max-height: 5%;
`