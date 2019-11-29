import React, { useState } from 'react'
import { View, Text, Alert, Button, ToastAndroid } from 'react-native'
import { WheelPicker, TimePicker } from 'react-native-wheel-picker-android'
import { withNavigation } from 'react-navigation'

import Modal from '../../components/Modal'

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
    const STEP = format === 'minutes' ? 1 : 1
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
    <Modal headerTitle="Choose a value" onSave={buttonHandler} onCloseModal={props.onCloseModal}>
      <Text>Set timer</Text>
      <WheelPicker onItemSelected={parseHoursMillis} data={_getWheelData('hours')} />
      <WheelPicker onItemSelected={parseMinutesMillis} data={_getWheelData('minutes')} />
    </Modal>
  )
}

export default withNavigation(SetTimer)