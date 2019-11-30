import React from 'react'
import FontistoIcon from 'react-native-vector-icons/Fontisto'

import {
  OuterContainer, InnerContainer, ModalHeader, ModalHeaderTitle,
  ChildrenContainer,
  ModalButtonsContainer, ModalButton, ModalButtonText, ModalButtonCancel, ModalButtonCancelText
} from './styles'
import { COLORS } from '../../constants'

const index = (props) => {
  return (
    <OuterContainer>
      <InnerContainer>

        {props.headerTitle && (<ModalHeader>
          <ModalHeaderTitle>{props.headerTitle}</ModalHeaderTitle>
          <FontistoIcon name="close-a" size={14} color={COLORS.icons} />
        </ModalHeader>)
        }

        <ChildrenContainer>
          {props.children}
        </ChildrenContainer>

        {!props.disableButtons && (
          <ModalButtonsContainer>
            <ModalButton onPress={() => props.onSave()}>
              <ModalButtonText>Save</ModalButtonText>
            </ModalButton>
            <ModalButtonCancel onPress={() => props.onCloseModal()}>
              <ModalButtonCancelText>
                Cancel
                    </ModalButtonCancelText>
            </ModalButtonCancel>
          </ModalButtonsContainer>
        )}
      </InnerContainer>
    </OuterContainer>
  )
}

export default index
