import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { normSize } from '../../utils'

export const StyledChannelContainer = styled.View`
  background-color: ${COLORS.channelBG};
  flex-direction: column;
  align-items: center;
  border-radius: 12px;
  margin-top: ${normSize(12)};
  width: ${normSize(90)};
  min-height: ${normSize(294)};
`

export const StyledButton = styled.TouchableHighlight`
  background-color: ${COLORS.playButtonBG};
  height: ${normSize(28)};
  width: ${normSize(70)};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  align-content: center;
  margin-top: ${normSize(6)};
`

export const StyledButtonText = styled.Text`
  color: ${COLORS.buttonText};
  font-size: ${normSize(12)};
`

export const ChannelTitle = styled.Text`
  padding-top: ${normSize(16)};
  padding-bottom: ${normSize(10)};
  color: ${COLORS.headerFore};
  font-size: ${normSize(12)};
`

export const StyledPlaybackButton = styled.TouchableHighlight`
  height: ${normSize(38)};
  width: ${normSize(38)};
  border-radius: 50px;
  align-items: center;
  justify-content: center;
  background-color: ${COLORS.playButtonBG}
`