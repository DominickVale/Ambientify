import styled from 'styled-components/native'

import { normSize } from '../utils'

export const StyledChannelsContainer = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: ${normSize(36)}px;
`

export const Filler = styled.View`
height: ${normSize(100)};
`