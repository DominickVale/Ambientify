import React from 'react'
import { BackHandler, Image, FlatList } from 'react-native'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next';

import ModalLayout from '../components/ModalLayout'
import { useBackHandler } from '../utils'
import { ModalStyledText } from '../components/ModalLayout/styles'
import { ImageContainer, Filler } from './styles/about'
import packageJson from '../../package.json'
import { CREDITS } from '../constants'
import { normSize, heightPercentageToDP, widthPercentageToDP } from '../utils'

const About = ({ navigation }) => {
  const { t } = useTranslation();
  useBackHandler(BackHandler, navigation, () => navigation.goBack())

  const renderCredits = ({ item }) => (
    <>
      <ModalStyledText fontSize={normSize(13)} secondary>{item}</ModalStyledText>
      <Filler height={4} />
    </>
  )
  return (
    <ModalLayout disableButtons modalHeight={'90%'} headerTitle={t('about')} onCloseModal={() => navigation.goBack()}>
      <ImageContainer>
        <Image source={require('#ambientify-images/about.png')} style={{ width: widthPercentageToDP(60), height: heightPercentageToDP(18), resizeMode: 'contain' }} />
      </ImageContainer>
      <Filler height={6} />
      <ModalStyledText fontSize={normSize(20)}>Ambientify</ModalStyledText>
      <ModalStyledText fontSize={normSize(10)} secondary>v{packageJson.version}</ModalStyledText>

      <Filler height={6} />
      <ModalStyledText fontSize={normSize(13)} secondary>{t('info_body')}</ModalStyledText>
      <Filler height={10} />

      <ModalStyledText fontSize={normSize(20)}>Credits</ModalStyledText>
      <Filler height={3} />
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