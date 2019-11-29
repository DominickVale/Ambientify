import React, { useState } from 'react'
import { View, Text, TextInput, Button, BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { addPreset } from '../actions'
import { useBackHandler } from '../utils'
import Modal from '../components/Modal'
/**
 * TODO:
 * 
 * Clean up
 */
const AddPreset = ({ navigation }) => {
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState('');

  useBackHandler(BackHandler, navigation, () => navigation.goBack())

  const textValueHandler = (text) => setTextValue(text)
  const addPresetHandler = () => {
    dispatch(addPreset(textValue))
    navigation.goBack();
  }

  return (
    <Modal headerTitle="Add a new preset" onSave={addPresetHandler} onCloseModal={() => navigation.goBack()}>
      {textValue ? (<TextInput value={textValue} autoCorrect={true} onChangeText={textValueHandler} />) : (
        <TextInput placeholder="Enter the new preset name" autoCorrect={true} onChangeText={textValueHandler} />)}
    </Modal>
  )
}

AddPreset.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(AddPreset)