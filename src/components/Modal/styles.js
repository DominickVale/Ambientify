import styled from 'styled-components/native'

import { COLORS } from '../../constants'

export const OuterContainer = styled.View`
flex: 1;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ${COLORS.modalContainerBG};
`

export const InnerContainer = styled.View`
height: ${props => props.modalHeight};
min-height: 290px;
width: 80%;
background-color: ${COLORS.modalBG};
justify-content: space-around;
align-content: center;
border-radius: 12px;
padding: 0 28px;
`

export const ModalHeader = styled.View`
flex-direction: row;
justify-content: space-around;
margin: 18px auto 40px auto;
align-content: center;
align-items: center;
`

export const ModalHeaderTitle = styled.Text`
font-size: 20px;
font-family: 'Montserrat-SemiBold';
color: ${COLORS.headerFore};
flex: 1;
text-align: center;
`

export const ChildrenContainer = styled.View`
flex: 4;
margin: 18px auto;
min-height: 80px;
`

export const ModalButtonsContainer = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;
margin-bottom: 18px;
min-height: 40px;
`

export const ModalButton = styled.TouchableHighlight`
background-color: ${COLORS.modalButtonBG};
height: 46px;
max-width: 130px;
border-radius: 12px;
justify-content: center;
align-content: center;
flex: 1;
`

export const ModalButtonCancel = styled(ModalButton)`
background-color:${COLORS.modalButtonCancelBG};
`

export const ModalButtonText = styled.Text`
color: ${COLORS.bigPlayButtonFore};
font-size: 18px;
align-self: center;
`

export const ModalButtonCancelText = styled(ModalButtonText)`
color:${COLORS.buttonText};
`

export const ModalStyledText = styled.Text`
color: ${COLORS.buttonText};
align-self: center;
text-align: center;
font-size: 16px;
`