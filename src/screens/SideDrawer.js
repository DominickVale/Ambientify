import React, { useState } from 'react'
import { TouchableHighlight, Linking, Share } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { useTranslation } from 'react-i18next';

import { StyledContainer, StyledAd, DrawerTitleContainer, DrawerTitle, DrawerSettingsContainer, SideDrawerItem, SideDrawerItemText, SideDrawerItemButton, SideDrawerIcon, Socials } from './styles/sideDrawer'
import { COLORS } from '../constants'

/**
 * TODO:
 * Add modal for language and finish language setting button
 * Add share message + link to appstore
 */

const SideDrawer = (props) => {
  const { t, i18n } = useTranslation();
  const [modalVisible, setModalVisible] = useState(false)

  const socialButtonHandler = () => {

    Share.share({
      message:
        t('share_message'),
    });
  }

  return (
    <>
      <StyledContainer>
        <DrawerTitleContainer>
          <DrawerTitle>{t('menu')}</DrawerTitle>
          <TouchableHighlight onPress={props.navigation.toggleDrawer}>
            <FontistoIcon name="close-a" size={22} color={COLORS.icons} />
          </TouchableHighlight>
        </DrawerTitleContainer>

        <StyledAd height='16%'>
          {/* TODO: Custom "buy premium version" ad here */}
        </StyledAd>

        <SideNavButton screen='Mixer' title={t('mixer')} iconName="equalizer" iconSize={22} navigation={props.navigation} />
        <SideNavButton screen='Presets' title={t('presets')} iconName="save" iconSize={22} navigation={props.navigation} />
        <SideNavButton title={t('get_new_sounds')} iconName="music-note" iconSize={22} onPress={() => Linking.openURL('https://freesound.org/browse/tags/ambient/')} />

        {/*         <DrawerSettingsContainer>
          <DrawerTitle>{t('settings')}</DrawerTitle>
        </DrawerSettingsContainer>

        <SideNavButton title={t('language')} iconName="language" iconSize={22} material onPress={() => { setModalVisible(value => !value) }} /> */}

        <Socials>
          <SocialButton iconName="facebook" iconSize={28} onPress={socialButtonHandler} />
          <SocialButton iconName="twitter" iconSize={26} onPress={socialButtonHandler} />
          <SocialButton iconName="google-plus" iconSize={34} onPress={socialButtonHandler} />
        </Socials>

      </StyledContainer>
    </>
  )
}

export default SideDrawer


const SideNavButton = (props) => (
  <SideDrawerItem activeOpacity={1} underlayColor={COLORS.sideDrawerButtonActive} onPress={() => { props.screen ? props.navigation.navigate({ routeName: props.screen }) : props.onPress && props.onPress() }}>
    <SideDrawerItemButton>
      <SideDrawerIcon>
        {props.material ? <MaterialIcon name={props.iconName} size={props.iconSize} color={COLORS.icons} /> :
          <FontistoIcon name={props.iconName} size={props.iconSize} color={COLORS.icons} />}
      </SideDrawerIcon>
      <SideDrawerItemText>{props.title}</SideDrawerItemText>
      {props.children}
    </SideDrawerItemButton>
  </SideDrawerItem>
)

const SocialButton = (props) => (
  <SideDrawerItem style={{ borderRadius: 50 }} activeOpacity={1} underlayColor={COLORS.sideDrawerButtonActive} onPress={props.onPress}>
    <FontistoIcon name={props.iconName} size={props.iconSize} color={COLORS.icons} />
  </SideDrawerItem>
)