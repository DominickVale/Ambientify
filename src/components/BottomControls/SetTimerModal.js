import React, { useState } from 'react'
import { View, Text, Alert, Button, ToastAndroid } from 'react-native'
import { WheelPicker, TimePicker } from 'react-native-wheel-picker-android'
import { withNavigation } from 'react-navigation'

import Modal from '../../components/Modal'
import { WheelsContainer, StyledWheelPicker, SemiColonSpacer } from '../../screens/styles/wheels'
import { ModalStyledText } from '../Modal/styles'
import { COLORS } from '../../constants'


const SetTimer = (props) => {

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
        'Timer disabled',
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
    <Modal headerTitle="Timer settings" onSave={buttonHandler} onCloseModal={props.onCloseModal}>
      <ModalStyledText>Choose a value</ModalStyledText>
      <WheelsContainer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: 104, height: 190 }}
            initPosition={0}
            visibleItemCount={3}
            data={_getWheelData('hours')}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={26}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={4}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={22}
            onItemSelected={parseHoursMillis} />
          <ModalStyledText>Hours</ModalStyledText>
        </StyledWheelPicker>
        <SemiColonSpacer>x</SemiColonSpacer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: 103, height: 190 }}
            initPosition={0}
            data={_getWheelData('minutes')}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={26}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={4}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={22}
            onItemSelected={parseMinutesMillis} />
          <ModalStyledText>Minutes</ModalStyledText>
        </StyledWheelPicker>
      </WheelsContainer>
    </Modal>
  )
}

export default withNavigation(SetTimer)