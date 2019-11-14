import React, { useState } from 'react'
import { View, Text, TextInput, Button, BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'

import { addPreset } from '../actions'
import { useBackHandler } from '../utils'

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
    <View onPress={() => navigation.pop()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <View style={{ height: "80%", width: '80%', backgroundColor: "white", justifyContent: "flex-start" }}>
        <Text>Add a new preset</Text>
        {textValue ? (<TextInput value={textValue} autoCorrect={true} onChangeText={textValueHandler} />) : (
          <TextInput placeholder="Enter the new preset name" autoCorrect={true} onChangeText={textValueHandler} />)}

        <Button title="Add" onPress={addPresetHandler} />
        <Button title="Cancel" onPress={() => navigation.goBack()} />
      </View>
    </View>
  )
}

AddPreset.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(AddPreset)