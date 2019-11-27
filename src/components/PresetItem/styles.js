import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const PresetItemContainer = styled.View`
justify-content: space-between;
flex-direction: row;
background-color:${COLORS.channelBG};
border-radius: 12;
padding: 0 10px;
margin-bottom: 16px;
`

export const PresetLoadButton = styled.TouchableHighlight`
flex: 5;
padding: 20px;
`
export const PresetDeleteButton = styled.TouchableHighlight`
flex: 1;
align-items: center;
justify-content: center;
border-radius: 50;
`

export const StyledText = styled.Text`
color:${COLORS.buttonText};
font-size: 18px;
`