import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const StyledChannelContainer = styled.View`
  background-color: ${COLORS.channelBG};
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  max-width: 30%;
  margin-top: 32px;
  width: 90px;
  min-height: 294px;
`

export const StyledButton = styled.TouchableHighlight`
  background-color: ${COLORS.playButtonBG};
  height: 28px;
  width: 73px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: 6px;
`

export const StyledButtonText = styled.Text`
  color: ${COLORS.buttonText};
`

export const ChannelTitle = styled.Text`
  padding-top: 16px;
  color: ${COLORS.headerFore};
`

export const StyledPlaybackButton = styled.TouchableHighlight`
  height: 38px;
  width: 38px;
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.playButtonBG}
`