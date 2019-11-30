import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { InnerContainer } from '../../components/Modal/styles'

export const SoundCategoryContainer = styled(InnerContainer)`
width: ${props => props.width};
align-self: center;
border: 1px solid red;
padding: 0 22px 22px 22px;
margin: auto 0;
`

export const SoundCategoryImageContainer = styled.View`
height: ${props => props.height};
justify-content: center;
`
export const SoundCategoryText = styled.Text`
position: absolute;
z-index: 1;
color:${COLORS.headerFore};
font-family: 'Montserrat-SemiBold';
align-self: center;
font-size: 28px;
`