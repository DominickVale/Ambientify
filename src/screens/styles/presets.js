import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const PresetsContainer = styled.View`
  width: 100%;
  padding: 0 40px;
  align-self: center;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  margin-bottom: -18;
`

export const AddPresetButton = styled.TouchableHighlight`
  margin-top: 20;
  padding: 10px;
  border-radius: 50px;
  background-color: ${COLORS.bigPlayButtonBG};
  align-self: center;
  align-items: center;
  justify-content: center;
`

export const Filler = styled.View`
  height: ${props => props.height};
  flex: 1`