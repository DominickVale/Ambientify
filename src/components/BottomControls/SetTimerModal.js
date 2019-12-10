import React, { useState } from 'react'
import { ToastAndroid } from 'react-native'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { withNavigation } from 'react-navigation'
import { useTranslation } from 'react-i18next';

import ModalLayout from '../../components/ModalLayout'
import { WheelsContainer, StyledWheelPicker, SemiColonSpacer, Filler } from '../../screens/styles/wheels'
import { ModalStyledText } from '../ModalLayout/styles'
import { COLORS } from '../../constants'
import { normSize } from '../../utils'


const SetTimer = (props) => {
  const { t } = useTranslation();
  const [hoursMillis, setHoursMillis] = useState(0)
  const [minutesMillis, setMinutesMillis] = useState(0)

  const parseHoursMillis = (hours) => {
    setHoursMillis((hours * 3600000))
  }

  const parseMinutesMillis = (position) => {
    let minutes = position
    setMinutesMillis(60000 * minutes)
  }

  const _getWheelData = (format) => {
    const MAX_VALUES = format === 'minutes' ? 59 : 12
    const STEP = format === 'minutes' ? 5 : 1
    const array = [];

    for (let i = 0; i <= MAX_VALUES; i += STEP) {
      array.push(`${i}`)
    }
    return array;
  }

  const buttonHandler = () => {
    const value = hoursMillis + minutesMillis;

    console.log(value)
    if (value === 0) {
      ToastAndroid.showWithGravity(
        t('timer_disabled'),
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
      props.onSetTimer(-1)
    } else props.onSetTimer(value);

    props.onCloseModal();
    setHoursMillis(0)
    setMinutesMillis(0)
  }
  return (
    <ModalLayout headerTitle={t('timer_settings')} onSave={buttonHandler} onCloseModal={props.onCloseModal}>
      <ModalStyledText>{t('choose_value')}</ModalStyledText>
      <WheelsContainer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: normSize(90), height: normSize(160) }}
            initPosition={0}
            visibleItemCount={3}
            data={_getWheelData('hours')}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={normSize(24)}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={normSize(4)}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={normSize(20)}
            onItemSelected={parseHoursMillis} />
          <Filler height={2} />
          <ModalStyledText>{t('hours')}</ModalStyledText>
        </StyledWheelPicker>
        <SemiColonSpacer>x</SemiColonSpacer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: normSize(90), height: normSize(160) }}
            initPosition={0}
            data={_getWheelData('hours')}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={normSize(24)}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={normSize(4)}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={normSize(20)}
            onItemSelected={parseMinutesMillis} />
          <Filler height={2} />
          <ModalStyledText>{t('minutes')}</ModalStyledText>
        </StyledWheelPicker>
      </WheelsContainer>
    </ModalLayout>
  )
}

export default withNavigation(SetTimer)