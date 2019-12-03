import React, { useState } from 'react'
import { View, Text, Button, BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { addPreset } from '../actions'
import { useBackHandler } from '../utils'
import { ModalStyledText } from '../components/ModalLayout/styles'

import TextInput from '../components/TextInput'

import ModalLayout from '../components/ModalLayout'
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
    <ModalLayout modalHeight={'60%'} headerTitle="Add a new preset" onSave={addPresetHandler} onCloseModal={() => navigation.goBack()}>
      <ModalStyledText>Choose a name</ModalStyledText>
      <TextInput
        value={textValue}
        placeholder=" Max 26 characters"
        autoCorrect={true}
        onChangeText={textValueHandler}
      />
    </ModalLayout>
  )
}

AddPreset.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(AddPreset)