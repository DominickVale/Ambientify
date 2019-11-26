import React, { useState } from 'react'
import { Text, View, TouchableHighlight, Picker, Modal } from 'react-native'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

import { StyledContainer, StyledAd, DrawerTitleContainer, DrawerTitle, DrawerSettingsContainer, SideDrawerItem, SideDrawerItemText, SideDrawerItemButton, SideDrawerIcon, Socials } from './styles/sideDrawer'
import { COLORS } from '../constants'

/**
 * TODO:
 * Add modal for language and finish language setting button
 */
const SideDrawer = (props) => {

  const languages = ['English', 'Italian', 'French']
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <StyledContainer>
        <DrawerTitleContainer>
          <DrawerTitle>Menu</DrawerTitle>
          <TouchableHighlight onPress={props.navigation.toggleDrawer}>
            <FontistoIcon name="close-a" size={22} color={COLORS.icons} />
          </TouchableHighlight>
        </DrawerTitleContainer>

        <StyledAd />

        <SideNavButton screen="Mixer" iconName="equalizer" iconSize={22} navigation={props.navigation} />
        <SideNavButton screen="Presets" iconName="save" iconSize={22} navigation={props.navigation} />
        <SideNavButton title="Get new Sounds" iconName="music-note" iconSize={22} onPress={() => console.log('pressed getnewsounds')} />

        <DrawerSettingsContainer>
          <DrawerTitle>Settings</DrawerTitle>
        </DrawerSettingsContainer>

        <SideNavButton title="Language" iconName="language" iconSize={22} material onPress={() => { setModalVisible(value => !value) }} />

        <Socials>
          <SocialButton iconName="facebook" iconSize={22} />
          <SocialButton iconName="twitter" iconSize={22} />
          <SocialButton iconName="google-plus" iconSize={22} />
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
      <SideDrawerItemText>{props.screen || props.title}</SideDrawerItemText>
      {props.children}
    </SideDrawerItemButton>
  </SideDrawerItem>
)

const SocialButton = (props) => (
  <SideDrawerItem style={{ borderRadius: 50 }} activeOpacity={1} underlayColor={COLORS.sideDrawerButtonActive} onPress={() => console.log('icon pressed')}>
    <FontistoIcon name={props.iconName} size={props.iconSize} color={COLORS.icons} />
  </SideDrawerItem>
)