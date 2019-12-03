import React, { useEffect, useState } from 'react'
import DocumentPicker from 'react-native-document-picker'
import * as FileSystem from 'expo-file-system'
import { Text, View, Button, FlatList, Modal } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'

import { COLORS } from '../../constants'
import SoundItem from './SoundItem'
import TextInput from '../../components/TextInput'
import ModalLayout from '../../components/ModalLayout'
import { ModalStyledText, ModalButtonText } from '../ModalLayout/styles'
import { SOUND_FILES } from '../../constants'
import { addCustomSound } from '../../actions'
import { SoundListContainer, CustomSoundsListContainer, SelectFileButton, AddCustomSoundButton, OpenAddCustomSoundButton } from './styles'

const index = (props) => {
  const dispatch = useDispatch()
  const [textValue, setTextValue] = useState('');
  const [isModalOpen, setModalOpen] = useState(false)

  const customSounds = useSelector(state => state.presets.customSounds)

  const pickCustomSound = async () => {
    try {
      const res = await DocumentPicker.pick({ type: ['application/ogg'] })

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

  const soundDeleteHandler = async () => {

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
      soundName={soundName}
      soundCategory={props.category}
      channelId={props.channelId}
      soundDeleteHandler={soundDeleteHandler}
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
              <ModalLayout headerTitle="Add a custom sound" modalHeight='70%' onSave={() => setModalOpen(false)} onCloseModal={() => setModalOpen(false)}>
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
