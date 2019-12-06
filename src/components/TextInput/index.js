import React from 'react'

import { InputContainer, StyledTextInput } from './styles'
import { COLORS } from '../../constants'

const index = (props) => (
  <InputContainer>
    <StyledTextInput autoFocus={props.autoFocus}
      value={props.value}
      placeholder={props.placeholder}
      placeholderTextColor={COLORS.icons}
      selectionColor={COLORS.headerFore}
      autoCorrect={true}
      onChangeText={props.onChangeText}
      selectionColor={COLORS.headerFore}
      underlineColorAndroid={COLORS.bigPlayButtonFore}
      clearButtonMode='always'
      style={{ color: COLORS.bigPlayButtonFore }}
    />
  </InputContainer>
)

export default index
