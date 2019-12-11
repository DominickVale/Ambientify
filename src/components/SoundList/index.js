import React, { useEffect, useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import * as FileSystem from 'expo-file-system'
import { FlatList, Modal, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { useTranslation } from 'react-i18next';

import { COLORS } from '../../constants'
import SoundItem from './SoundItem'
import TextInput from '../../components/TextInput'
import ModalLayout from '../../components/ModalLayout'
import { ModalStyledText, ModalButtonText } from '../ModalLayout/styles'
import { SOUND_FILES } from '../../constants'
import { addCustomSound, deleteCustomSound } from '../../actions'
import { SoundListContainer, Filler, SelectFileButton, AddCustomSoundButton, OpenAddCustomSoundButton } from './styles'
import { parseStringToValidFileName, normSize, heightPercentageToDP } from '../../utils'


const index = (props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch()
  const [textValue, setTextValue] = useState('');
  const [isModalOpen, setModalOpen] = useState(false)

  const customSounds = useSelector(state => state.presets.customSounds)


  const pickCustomSound = async () => {
    let res;

    try { res = await DocumentPicker.pick({ type: ['application/ogg', DocumentPicker.types.audio] }) }
    catch (error) {
      if (DocumentPicker.isCancel(error))
        setModalOpen(false)
    }
    if (res) {
      const from = res.uri;
      const fileType = res.uri.match(/(\.\w+$)/igm)
      const to = FileSystem.documentDirectory + parseStringToValidFileName(textValue) + fileType + '/';
      FileSystem.copyAsync({ from, to })
      dispatch(addCustomSound(textValue, to))
    }
  }

  const soundDeleteHandler = async (uri, soundName) => {
    await FileSystem.deleteAsync(uri, { idempotent: true }).then(() => ToastAndroid.showWithGravityAndOffset(
      t('custom_sound_deleted'),
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0, 100))
    dispatch(deleteCustomSound(soundName))
  }

  const renderSoundList = ({ item }) => (
    <SoundItem soundName={item}
      soundCategory={props.category}
      channelId={props.channelId} />
  )

  const renderCustomSoundList = ({ item }) => (
    <SoundItem isCustomSound={props.category === 'CUSTOM'}
      onCustomSoundDelete={soundDeleteHandler}
      soundName={item}
      soundCategory={props.category}
      channelId={props.channelId}
      key={`${props.category}.${item}`} />
  )

  const textValueHandler = (text) => setTextValue(text)

  return (
    <SoundListContainer>

      {props.category === 'CUSTOM' && (
        <>
          <Modal
            animationType="slide"
            onRequestClose={() => setModalOpen(false)}
            transparent={true}
            visible={isModalOpen}>
            <ModalLayout headerTitle={t('channel')}
              disableButtons
              modalHeight={heightPercentageToDP(50)}
              onSave={() => setModalOpen(false)}
              onCloseModal={() => setModalOpen(false)}>
              <ModalStyledText>{t('choose_sound_name')}</ModalStyledText>
              <ModalStyledText fontSize={normSize(12)} secondary>{t('supported_files')}</ModalStyledText>
              <TextInput
                value={textValue}
                placeholder={" Max 26 " + t('characters')}
                autoCorrect={true}
                autoFocus={false}
                onChangeText={textValueHandler}
              />
              <Filler height={20} />
              <SelectFileButton onPress={pickCustomSound}>
                <ModalButtonText>{t('select_file')}</ModalButtonText>
              </SelectFileButton>
            </ModalLayout>
          </Modal>
          <FlatList
            stickyHeaderIndices={[1]}
            data={Object.keys(customSounds)}
            renderItem={renderCustomSoundList}
            keyExtractor={item => `${props.soundCategory}.${item}`}
            stickyHeaderIndices={[0]}
            ListHeaderComponent={(
              <>
                <AddCustomSoundButton onPress={() => setModalOpen(true)}>
                  <MaterialIcon name="add" size={normSize(28)} color={COLORS.headerFore} onPress={() => setModalOpen(true)} />
                </AddCustomSoundButton>
                <Filler height={20} />
              </>
            )} />

        </>
      )
      }

      <FlatList
        data={Object.keys(SOUND_FILES[props.category])}
        renderItem={renderSoundList}
        keyExtractor={item => `${props.soundCategory}.${item}`} />
    </SoundListContainer >
  )
}

export default index
