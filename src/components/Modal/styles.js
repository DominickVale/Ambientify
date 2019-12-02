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
min-height: 240px;
width: 80%;
background-color: ${COLORS.modalBG};
justify-content: space-around;
align-content: center;
border-radius: 12px;
`

export const ModalHeader = styled.View`
flex-direction: row;
justify-content: space-around;
margin: 18px 25px;
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
margin: 18px 25px;
`

export const ModalButtonsContainer = styled.View`
flex: 1;
flex-direction: row;
justify-content: space-around;
align-content: center;
align-items: center;
margin-bottom: 18px;
`

export const ModalButton = styled.TouchableHighlight`
background-color: ${COLORS.modalButtonBG};
height: 47px;
max-width: 141px;
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
color:${COLORS.buttonText}
`