import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const StyledContainer = styled.View`
  background-color: ${COLORS.sideDrawerBG};
  flex: 1;
`

export const DrawerTitleContainer = styled.View`
padding: 20px 10px 20px 20px;
flex-direction: row;
justify-content: space-between;
align-content: center;
`

export const DrawerTitle = styled.Text`
color: ${COLORS.headerFore};
font-family: 'Montserrat-SemiBold';
font-size: 21px;
align-self: flex-start;
`

export const DrawerSettingsContainer = styled(DrawerTitleContainer)`
margin-top: 30%;
margin-bottom: -8px;
`

export const StyledAd = styled.View`
  width: 90%;
  height: ${props => props.height};
  background-color: grey;
  margin: 0 auto 20px auto;
`

export const SideDrawerItem = styled.TouchableHighlight`
background-color: transparent;
padding: 8px;
`

export const SideDrawerItemButton = styled.View`
margin-left: 8px;
background-color: transparent;
flex-direction: row;
align-items: center;
align-content: flex-start;
justify-content: flex-start;
`

export const SideDrawerItemText = styled.Text`
color: ${COLORS.buttonText};
margin-left: 20px;
font-size: 18px;
line-height: 34px;
flex: 2;
`

export const SideDrawerIcon = styled.View`
max-width: 30px;
flex: 1;
`

export const Socials = styled.View`
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 70%;
margin: auto;
margin-bottom: 20px;
`