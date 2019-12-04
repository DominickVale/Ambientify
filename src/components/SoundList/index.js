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
import { SoundListContainer, CustomSoundsListContainer, SelectFileButton, AddCustomSoundButton, OpenAddCustomSoundButton } from './styles'

/**
 * 
 * TODO:
 * fix custom sound not disappearing after deletion
 * parse file for correct file name (spaces -> _ )
 */

const index = (props) => {
  const dispatch = useDispatch()
  const [textValue, setTextValue] = useState('');
  const [isModalOpen, setModalOpen] = useState(false)

  const customSounds = useSelector(state => state.presets.customSounds)

  const pickCustomSound = async () => {
    try {
      const res = await DocumentPicker.pick({ type: ['application/ogg', DocumentPicker.types.audio] })

      const from = res.uri;
      const to = FileSystem.documentDirectory + textValue + '.ogg/';
      FileSystem.copyAsync({ from, to })
      dispatch(addCustomSound(textValue, to))

    } catch (error) {
      if (DocumentPicker.isCancel(error)) {
        console.log('Canceled')
      } else throw error;
    }
  }

  const soundDeleteHandler = async (uri, soundName) => {
    await FileSystem.deleteAsync(uri, { idempotent: true }).then(() => ToastAndroid.showWithGravityAndOffset(
      'Custom sound deleted',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0, 100))
    dispatch(deleteCustomSound(soundName))
  }

  const renderSoundList = ({ item }) => {
    console.log(item)
    return (
      <SoundItem soundName={item}
        soundCategory={props.category}
        channelId={props.channelId} />
    )
  }

  const soundsFromCustom = Object.keys(customSounds).map(soundName => (
    <SoundItem isCustomSound={props.category === 'CUSTOM'}
      onCustomSoundDelete={soundDeleteHandler}
      soundName={soundName}
      soundCategory={props.category}
      channelId={props.channelId}
      key={`${props.category}.${soundName}`} />
  ))

  const textValueHandler = (text) => setTextValue(text)


  return (
    <SoundListContainer>


      {props.category === 'CUSTOM' && (
        <>
          <View>
            <Modal
              animationType="slide"
              onRequestClose={() => setModalOpen(false)}
              transparent={true}
              visible={isModalOpen}>
              <ModalLayout headerTitle="Add a custom sound"
                disableButtons
                modalHeight='70%'
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
                <SelectFileButton onPress={pickCustomSound}>
                  <ModalButtonText>Select file</ModalButtonText>
                </SelectFileButton>
              </ModalLayout>
            </Modal>

          </View>
          <AddCustomSoundButton onPress={() => setModalOpen(true)}>
            <MaterialIcon name="add" size={28} color={COLORS.headerFore} onPress={() => setModalOpen(true)} />
          </AddCustomSoundButton>
          < CustomSoundsListContainer >
            {soundsFromCustom}
          </CustomSoundsListContainer>
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
