import React from 'react'
import FontistoIcon from 'react-native-vector-icons/Fontisto'
import { useTranslation } from 'react-i18next';

import {
  OuterContainer, InnerContainer, ModalHeader, ModalHeaderTitle,
  ChildrenContainer,
  ModalButtonsContainer, ModalButton, ModalButtonText, ModalButtonCancel, ModalButtonCancelText
} from './styles'
import { COLORS } from '../../constants'

const index = (props) => {
  const { t } = useTranslation();

  return (
    <OuterContainer>
      <InnerContainer modalHeight={props.modalHeight || '80%'}>

        {props.headerTitle && (<ModalHeader>
          <ModalHeaderTitle>{props.headerTitle}</ModalHeaderTitle>
          <FontistoIcon name="close-a" size={14} color={COLORS.icons} onPress={() => props.onCloseModal()} style={{ position: 'absolute', right: 0 }} />
        </ModalHeader>)
        }

        <ChildrenContainer>
          {props.children}
        </ChildrenContainer>

        {!props.disableButtons && (
          <ModalButtonsContainer>
            <ModalButton onPress={() => props.onSave()}>
              <ModalButtonText>{t('save')}</ModalButtonText>
            </ModalButton>
            <ModalButtonCancel onPress={() => props.onCloseModal()}>
              <ModalButtonCancelText>
                {t('cancel')}
              </ModalButtonCancelText>
            </ModalButtonCancel>
          </ModalButtonsContainer>
        )}
      </InnerContainer>
    </OuterContainer>
  )
}

export default index
