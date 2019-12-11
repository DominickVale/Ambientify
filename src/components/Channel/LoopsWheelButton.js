import React from 'react'
import { View, ToastAndroid } from 'react-native'
import { withNavigation } from 'react-navigation'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next';

import { StyledButton, StyledButtonText } from './styles'

const LoopsWheelButton = ({ channelId, navigation }) => {
  const { t } = useTranslation();
  const { randomizing, loops, soundObject, currentSound, file } = useSelector(state => state.channels[channelId])

  let timesWheelData;
  let minutesWheelData;

  const _getWheelData = (soundDuration) => {
    timesWheelData = [];
    minutesWheelData = [];
    let minutes = loops.minutes * 60000;
    let timesCanBePlayed = (minutes / soundDuration) + 1

    for (let i = 1; i < 60; i++) {
      minutesWheelData.push(`${i}`);
      if (timesCanBePlayed > i) timesWheelData.push(`${i}`)
    }
  }

  const checkData = async () => {
    try {
      const status = await soundObject.getStatusAsync();
      const soundDuration = status.durationMillis
      if (currentSound !== 'none') _getWheelData(soundDuration);
    } catch (error) { console.error(error) }
  }

  const onButtonPress = async () => {
    if (currentSound !== 'none') {
      await checkData().then(() => navigation.push('LoopsWheel', { minutesWheelData, timesWheelData, channelId }));
    }
    if (!file) ToastAndroid.showWithGravityAndOffset(
      t('select_file_first'),
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0, 100)
  }

  return (
    <>
      <View>
        <StyledButton onPress={onButtonPress}>
          <StyledButtonText>{randomizing ? `${loops.times}x - ${loops.minutes}m` : '∞'}</StyledButtonText>
        </StyledButton>
      </View>
    </>
  )
}

export default withNavigation(LoopsWheelButton)