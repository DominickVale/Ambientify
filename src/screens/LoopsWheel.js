import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { withNavigation } from 'react-navigation'
import { BackHandler } from 'react-native'

import { useBackHandler } from '../utils/'
import { setLoops, toggleRandom, playSound } from '../actions'
import { WheelsContainer, StyledWheelPicker, SemiColonSpacer } from './styles/wheels'
import { ModalStyledText } from '../components/ModalLayout/styles'
import ModalLayout from '../components/ModalLayout'
import { COLORS } from '../constants'

const LoopsWheel = ({ navigation }) => {
  const dispatch = useDispatch();
  const { file, randomizing } = useSelector(state => state.channels[navigation.getParam('channelId')])

  const timesWheelData = useRef(navigation.getParam('timesWheelData'))
  const minutesWheelData = useRef(navigation.getParam('minutesWheelData'))
  const channelId = useRef(navigation.getParam('channelId'))

  const [timesWheelState, setTimesWheelState] = useState(1)
  const [minutesWheelState, setMinutesWheelState] = useState(1)

  useBackHandler(BackHandler, navigation, () => navigation.goBack());

  const toggleRandomShuffle = async () => {
    if (file && !randomizing) {
      dispatch(toggleRandom(channelId.current))
      dispatch(playSound(navigation.getParam('channelId')))
    }
  }

  const buttonHandler = () => {
    dispatch(setLoops(channelId.current, { times: timesWheelState + 1, minutes: minutesWheelState + 1 })) //Set loops with state values +1. React Native Wheel Picker maps values by id starting from 0 to n, whereas wheelData starts from 1.
    if (timesWheelState + 1 > 1) toggleRandomShuffle();
    navigation.goBack();
  }

  return (
    <ModalLayout headerTitle="Configure loops" onSave={buttonHandler} onCloseModal={() => navigation.goBack()}>
      <ModalStyledText>Choose how many times the sound should be looped for.</ModalStyledText>
      <WheelsContainer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: 104, height: 190 }}
            initPosition={0}
            visibleItemCount={3}
            selectedItem={timesWheelState}
            data={timesWheelData.current}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={26}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={4}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={22}
            onItemSelected={(value) => setTimesWheelState(value)} />
          <ModalStyledText>Times</ModalStyledText>
        </StyledWheelPicker>
        <SemiColonSpacer>x</SemiColonSpacer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: 103, height: 190 }}
            initPosition={0}
            selectedItem={minutesWheelState}
            data={minutesWheelData.current}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={26}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={4}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={22}
            onItemSelected={(value) => setMinutesWheelState(value)} />
          <ModalStyledText>Minutes</ModalStyledText>
        </StyledWheelPicker>
      </WheelsContainer>
    </ModalLayout>
  )
}

LoopsWheel.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(LoopsWheel)