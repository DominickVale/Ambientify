import React, { useState } from 'react'
import { View, Text, TextInput, Button, BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { addPreset } from '../actions'
import { useBackHandler } from '../utils'
import { InputContainer, StyledTextInput, StyledText } from './styles/addPreset'
import { ModalStyledText } from '../components/Modal/styles'

import { COLORS } from '../constants'

import Modal from '../components/Modal'
/**
 * TODO:
 * 
 * Clean up
 */
const AddPreset = ({ navigation }) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState();

  useBackHandler(BackHandler, navigation, () => navigation.goBack())

  const textValueHandler = (text) => setTextValue(text)
  const addPresetHandler = () => {
    dispatch(addPreset(textValue))
    navigation.goBack();
  }

  return (
    <Modal modalHeight={'40%'} headerTitle="Add a new preset" onSave={addPresetHandler} onCloseModal={() => navigation.goBack()}>
      <ModalStyledText>Choose a name</ModalStyledText>
      <InputContainer>
        <StyledTextInput autoFocus={true}
          value={textValue}
          placeholder=" Max 26 characters"
          placeholderTextColor={COLORS.icons}
          selectionColor={COLORS.headerFore}
          autoCorrect={true}
          onChangeText={textValueHandler}
          selectionColor={COLORS.headerFore}
          underlineColorAndroid={COLORS.bigPlayButtonFore}
          clearButtonMode='always'
          style={{ color: COLORS.bigPlayButtonFore }}
        />
      </InputContainer>
    </Modal>
  )
}

AddPreset.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(AddPreset)