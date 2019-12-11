import styled from 'styled-components/native'

import { COLORS } from '../../constants'
import { normSize, widthPercentageToDP } from '../../utils'

export const OuterContainer = styled.View`
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${COLORS.modalContainerBG};
`

export const InnerContainer = styled.View`
height: ${props => props.modalHeight};
min-height: ${normSize(290)};
width: ${widthPercentageToDP(80)};
background-color: ${COLORS.modalBG};
justify-content: space-around;
align-content: center;
border-radius: 12px;
padding: 0 ${normSize(28)}px;
`

export const ModalHeader = styled.View`
flex-direction: row;
justify-content: space-between;
margin: ${normSize(18)}px auto ${normSize(24)}px auto;
align-content: center;
align-items: center;
`

export const ModalHeaderTitle = styled.Text`
font-size: ${normSize(20)};
font-family: 'Montserrat-SemiBold';
color: ${COLORS.headerFore};
flex: 1;
text-align: center;
`

export const ChildrenContainer = styled.View`
flex: 4;
margin: ${normSize(18)}px auto;
min-height: ${normSize(80)};
`

export const ModalButtonsContainer = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;
margin-bottom: ${normSize(18)}px;
min-height: ${normSize(40)};
`

export const ModalButton = styled.TouchableHighlight`
background-color: ${COLORS.modalButtonBG};
height: ${normSize(46)};
max-width: ${widthPercentageToDP(30)};
border-radius: 50px;
justify-content: center;
align-content: center;
flex: 1;
`

export const ModalButtonCancel = styled(ModalButton)`
background-color:${COLORS.modalButtonCancelBG};
`

export const ModalButtonText = styled.Text`
color: ${COLORS.bigPlayButtonFore};
font-size: ${normSize(18)};
align-self: center;
text-align: center;
margin: auto;
`

export const ModalButtonCancelText = styled(ModalButtonText)`
color:${COLORS.buttonText};
`

export const ModalStyledText = styled.Text`
color: ${props => props.secondary ? COLORS.icons : COLORS.buttonText};
align-self: center;
text-align: center;
font-size: ${props => props.fontSize ? props.fontSize : normSize(16)}px;
`