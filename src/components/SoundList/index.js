import React, { useEffect, useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import * as FileSystem from 'expo-file-system'
import { Text, View, Button, FlatList, Modal, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from '../../constants'
import SoundItem from './SoundItem'
import TextInput from '../../components/TextInput'
import ModalLayout from '../../components/ModalLayout'
import { ModalStyledText, ModalButtonText } from '../ModalLayout/styles'
import { SOUND_FILES } from '../../constants'
import { addCustomSound, deleteCustomSound } from '../../actions'
import { SoundListContainer, Filler, SelectFileButton, AddCustomSoundButton, OpenAddCustomSoundButton } from './styles'
import { parseStringToValidFileName } from '../../utils'


const index = (props) => {
  const dispatch = useDispatch()
  const [textValue, setTextValue] = useState('');
  const [isModalOpen, setModalOpen] = useState(false)

  const customSounds = useSelector(state => state.presets.customSounds)


  const pickCustomSound = async () => {

    const res = await DocumentPicker.pick({ type: ['application/ogg', DocumentPicker.types.audio] })

    const from = res.uri;
    const fileType = res.uri.match(/(\.\w+$)/igm)
    const to = FileSystem.documentDirectory + parseStringToValidFileName(textValue) + fileType + '/';
    FileSystem.copyAsync({ from, to })
    dispatch(addCustomSound(textValue, to))
  }

  const soundDeleteHandler = async (uri, soundName) => {
    await FileSystem.deleteAsync(uri, { idempotent: true }).then(() => ToastAndroid.showWithGravityAndOffset(
      'Custom sound deleted',
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
            <ModalLayout headerTitle="Add a custom sound"
              disableButtons
              modalHeight='50%'
              onSave={() => setModalOpen(false)}
              onCloseModal={() => setModalOpen(false)}>
              <ModalStyledText>Choose your new sound's name</ModalStyledText>
              <ModalStyledText fontSize={12}>(Valid file formats are: .ogg and .mp3)</ModalStyledText>
              <TextInput
                value={textValue}
                placeholder=" Max 26 characters"
                autoCorrect={true}
                autoFocus={false}
                onChangeText={textValueHandler}
              />
              <Filler height={20} />
              <SelectFileButton onPress={pickCustomSound}>
                <ModalButtonText>Select file</ModalButtonText>
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
                  <MaterialIcon name="add" size={28} color={COLORS.headerFore} onPress={() => setModalOpen(true)} />
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
