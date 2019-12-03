import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const SoundListContainer = styled.View`
flex: 2;
`

export const StyledSoundItem = styled.View`
justify-content: space-between;
flex-direction: row;
background-color: transparent;
border-radius: 12;
padding: 0;
margin-bottom: 6px;
`

export const SoundLoadButton = styled.TouchableHighlight`
flex: 4;
padding: 4px 12px;
`
export const SoundPreviewButton = styled.TouchableHighlight`
flex: 1;
align-items: center;
justify-content: center;
border-radius: 50;
width: 28px;
height: 28px;
max-width: 28px;
margin: 4px 12px;
`

export const StyledText = styled.Text`
color:${COLORS.buttonText};
font-size: 14px;
`