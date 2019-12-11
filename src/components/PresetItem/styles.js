import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { normSize } from '../../utils'

export const PresetItemContainer = styled.View`
justify-content: space-between;
flex-direction: row;
background-color:${COLORS.channelBG};
border-radius: 12;
padding: 0 ${normSize(10)}px;
margin-bottom: ${normSize(16)}px;
`

export const PresetLoadButton = styled.TouchableHighlight`
flex: 5;
padding: ${normSize(16)}px ${normSize(12)}px;
`
export const PresetDeleteButton = styled.TouchableHighlight`
flex: 1;
align-items: center;
justify-content: center;
border-radius: 50;
`

export const StyledText = styled.Text`
color:${COLORS.buttonText};
font-size: ${normSize(14)}px;
`