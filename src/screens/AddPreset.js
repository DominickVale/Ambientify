import React, { useState } from 'react'
import { BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next';

import { addPreset } from '../actions'
import { useBackHandler } from '../utils'
import TextInput from '../components/TextInput'
import { ModalStyledText } from '../components/ModalLayout/styles'
import ModalLayout from '../components/ModalLayout'

/**
 * 
 * TODO:
 * add input checks
 */
const AddPreset = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState();

  useBackHandler(BackHandler, navigation, () => navigation.goBack())

  const textValueHandler = (text) => setTextValue(text)
  const addPresetHandler = () => {
    dispatch(addPreset(textValue))
    navigation.goBack();
  }

  return (
    <ModalLayout modalHeight={'60%'} headerTitle={t('add_new_preset')} onSave={addPresetHandler} onCloseModal={() => navigation.goBack()}>
      <ModalStyledText>{t('choose_name')}</ModalStyledText>
      <TextInput
        value={textValue}
        placeholder={" Max 26 " + t('characters')}
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