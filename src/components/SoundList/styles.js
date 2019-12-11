import styled from 'styled-components/native'

import { normSize, heightPercentageToDP } from '../../utils'
import { COLORS } from '../../constants'
import { ModalButton } from '../ModalLayout/styles'
import { AddPresetButton } from '../../screens/styles/presets'


export const SoundListContainer = styled.View`
flex: 2;
`

export const CustomSoundsListContainer = styled.View`
flex: 1;
margin-top: ${heightPercentageToDP(4)}%;
min-height: ${normSize(100)};
`

export const StyledSoundItem = styled.View`
justify-content: space-between;
align-items: flex-start;
flex-direction: row;
background-color: transparent;
border-radius: 12;
padding: 0;
margin-bottom: ${normSize(18)};
`

export const SelectFileButton = styled(ModalButton)`
max-height: ${normSize(18)};
max-width: ${heightPercentageToDP(10)}%;
min-width: ${heightPercentageToDP(8)}%;
margin-top: ${heightPercentageToDP(2)}%;
border-radius: 50px;
padding: ${normSize(20)}px;
align-self: center;
`

export const AddCustomSoundButton = styled(AddPresetButton)`
`

export const SoundLoadButton = styled.TouchableHighlight`
flex: 4;
padding: ${normSize(4)}px ${normSize(20)}px;
`

export const SoundPreviewButton = styled.TouchableHighlight`
flex: 1;
border-radius: 50;
width: ${normSize(28)};
height: ${normSize(28)};
max-width: ${normSize(28)};
margin: ${normSize(2)}px ${normSize(12)}px 0 ${normSize(12)}px;
`

export const CustomSoundDeleteButton = styled(SoundPreviewButton)`
border: none;
`

export const StyledText = styled.Text`
color:${COLORS.buttonText};
font-size: ${normSize(14)}px;
`

export const Filler = styled.View`
height: ${props => heightPercentageToDP(props.height) / 10}%;
flex: 1`