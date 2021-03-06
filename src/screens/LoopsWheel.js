import React, { useState, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { WheelPicker } from 'react-native-wheel-picker-android'
import { withNavigation } from 'react-navigation'
import { BackHandler } from 'react-native'
import { useTranslation } from 'react-i18next';

import { useBackHandler } from '../utils/'
import { setLoops, toggleRandom, playSound, stopSound } from '../actions'
import { WheelsContainer, StyledWheelPicker, SemiColonSpacer, Filler } from './styles/wheels'
import { ModalStyledText } from '../components/ModalLayout/styles'
import ModalLayout from '../components/ModalLayout'
import { COLORS } from '../constants'
import { normSize } from '../utils'

const LoopsWheel = ({ navigation }) => {
  const { t } = useTranslation();
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
    if ((timesWheelState + minutesWheelState) <= 1 && randomizing) {
      dispatch(stopSound(channelId.current))
      dispatch(toggleRandom(channelId.current));
    } else if (timesWheelState > 0) toggleRandomShuffle();

    navigation.goBack();
  }

  return (
    <ModalLayout headerTitle={t("configure_loops")} onSave={buttonHandler} onCloseModal={() => navigation.goBack()}>
      <ModalStyledText style={{ marginTop: normSize(-24) }}>{t('choose_loops')}</ModalStyledText>
      <WheelsContainer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: normSize(90), height: normSize(160) }}
            initPosition={0}
            visibleItemCount={3}
            selectedItem={timesWheelState}
            data={timesWheelData.current}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={normSize(24)}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={normSize(4)}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={normSize(20)}
            onItemSelected={(value) => setTimesWheelState(value)} />
          <Filler height={2} />
          <ModalStyledText>{t('times')}</ModalStyledText>
        </StyledWheelPicker>
        <SemiColonSpacer>x</SemiColonSpacer>
        <StyledWheelPicker>

          <WheelPicker style={{ width: normSize(90), height: normSize(160) }}
            initPosition={0}
            selectedItem={minutesWheelState}
            data={minutesWheelData.current}
            selectedItemTextColor={COLORS.bigPlayButtonFore}
            selectedItemTextSize={normSize(24)}
            itemTextColor={COLORS.wheelPickerInactive}
            indicatorColor={COLORS.bigPlayButtonFore}
            indicatorWidth={normSize(4)}
            itemTextFontFamily='Montserrat-Regular'
            selectedItemTextFontFamily='Montserrat-Regular'
            itemTextSize={normSize(20)}
            onItemSelected={(value) => setMinutesWheelState(value)} />
          <Filler height={2} />
          <ModalStyledText>{t('minutes')}</ModalStyledText>
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