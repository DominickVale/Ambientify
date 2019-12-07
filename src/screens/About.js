import React from 'react'
import { BackHandler, Image, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'

import ModalLayout from '../components/ModalLayout'
import { useBackHandler } from '../utils'
import { ModalStyledText } from '../components/ModalLayout/styles'
import { ImageContainer, Filler } from './styles/about'
import packageJson from '../../package.json'
import { CREDITS } from '../constants'

const About = ({ navigation }) => {

  useBackHandler(BackHandler, navigation, () => navigation.goBack())

  const renderCredits = ({ item }) => (
    <>
      <ModalStyledText fontSize={13} secondary>{item}</ModalStyledText>
      <Filler height={12} />
    </>
  )
  return (
    <ModalLayout disableButtons modalHeight={'90%'} headerTitle="About" onCloseModal={() => navigation.goBack()}>
      <ImageContainer>
        <Image source={require('#ambientify-images/about.png')} style={{ width: 270, height: 150, resizeMode: 'contain' }} />
      </ImageContainer>
      <Filler height={15} />
      <ModalStyledText fontSize={20}>Ambientify</ModalStyledText>
      <ModalStyledText fontSize={13} secondary>v{packageJson.version}</ModalStyledText>

      <Filler height={15} />
      <ModalStyledText fontSize={13} secondary>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora autem, vitae voluptates eum rem</ModalStyledText>
      <Filler height={30} />

      <ModalStyledText fontSize={20}>Credits</ModalStyledText>
      <Filler height={10} />
      <FlatList
        data={CREDITS}
        renderItem={renderCredits}
        keyExtractor={(_, index) => index.toString()} />
    </ModalLayout>
  )
}

About.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(About)