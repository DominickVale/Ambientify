import React, { useState } from 'react'
import { BackHandler } from 'react-native'
import { useDispatch } from 'react-redux'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next';
import { AdMobInterstitial } from 'react-native-admob'

import { addPreset } from '../actions'
import { useBackHandler } from '../utils'
import TextInput from '../components/TextInput'
import { ModalStyledText } from '../components/ModalLayout/styles'
import ModalLayout from '../components/ModalLayout'


const AddPreset = ({ navigation }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [textValue, setTextValue] = useState();

  useBackHandler(BackHandler, navigation, () => navigation.goBack())

  const textValueHandler = (text) => setTextValue(text)
  const addPresetHandler = () => {
    dispatch(addPreset(textValue))
    navigation.goBack();
    AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/8691691433');
    AdMobInterstitial.setTestDevices([AdMobInterstitial.simulatorId]);
    AdMobInterstitial.requestAd().then(() => AdMobInterstitial.showAd());
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