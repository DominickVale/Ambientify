import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { ModalButton } from '../ModalLayout/styles'
import { AddPresetButton } from '../../screens/styles/presets'


export const SoundListContainer = styled.View`
flex: 2;
`

export const CustomSoundsListContainer = styled.View`
flex: 1;
margin-top: 4%;
min-height: 100px;
`

export const StyledSoundItem = styled.View`
justify-content: space-between;
align-items: flex-start;
flex-direction: row;
background-color: transparent;
border-radius: 12;
padding: 0;
margin-bottom: 8px;
`

export const SelectFileButton = styled(ModalButton)`
max-height: 20%;
max-width: 80%;
min-width: 60%;
margin-top: 10%;
border-radius: 50px;
padding: 20px;
align-self: center;
`

export const AddCustomSoundButton = styled(AddPresetButton)`
`

export const SoundLoadButton = styled.TouchableHighlight`
flex: 4;
padding: 4px 12px;
`

export const SoundPreviewButton = styled.TouchableHighlight`
flex: 1;
border-radius: 50;
width: 28px;
height: 28px;
max-width: 28px;
margin: 2px 12px 0 12px;
`

export const CustomSoundDeleteButton = styled(SoundPreviewButton)`
border: none;
`

export const StyledText = styled.Text`
color:${COLORS.buttonText};
font-size: 14px;
`

export const Filler = styled.View`
height: ${props => props.height};
flex: 1`