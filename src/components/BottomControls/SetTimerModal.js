import React, { useState } from 'react'
import { View, Text, Alert, Button, ToastAndroid } from 'react-native'
import { WheelPicker, TimePicker } from 'react-native-wheel-picker-android'
import { withNavigation } from 'react-navigation'

/**
 * TODO:
 * 
 * Replace TimePicker with 2 custom WheelPickers
 */
const SetTimer = (props) => {

  const [localValue, setLocalValue] = useState(0)

  const parseMillisFromNow = (date) => {
    setLocalValue((Number(date) - Date.now()))
  }

  const buttonHandler = () => {
    if (localValue < 2000) {
      ToastAndroid.showWithGravity(
        'Please choose a different date',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    } else {
      props.onSetTimer(localValue);
      props.onCloseModal();
    }
  }
  return (
    <View onPress={() => navigation.pop()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <View style={{ height: "80%", width: '80%', backgroundColor: "white", justifyContent: "flex-start" }}>
        <Text>Set timer</Text>
        <TimePicker onTimeSelected={parseMillisFromNow} />
        <Button title="ok" onPress={buttonHandler} />
      </View>
    </View>
  )
}

export default withNavigation(SetTimer)