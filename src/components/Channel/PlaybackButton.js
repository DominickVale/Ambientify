import React, { useState, useEffect, useRef } from 'react'
import BackgroundTimer from 'react-native-background-timer';
import { View, ToastAndroid } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Audio } from 'expo-av'

import { StyledPlaybackButton, StyledButtonText } from './styles'
import { playSound, stopSound } from '../../actions'
import { playFromLastMillis } from '../../utils'
/**
 * 
 * TODO:
 * 
 * Improve Pitch randomization
 * Refactor and move to own file/component (optional at this point)
 * Improve pseudorandom number generator
 * 
 */
const playIcon = <Icon name="play-arrow" size={30} />;
const pauseIcon = <Icon name="pause" size={30} />

const PlaybackButton = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, playing, file, loops, randomizing, currentSound, volume } = useSelector(state => state.channels[channelId])
  const { pitchRandomization, muted } = useSelector(state => state.settings)

  const [playedCount, setPlayedCount] = useState(1)
  const [soundFinishedPlaying, setSoundFinishedPlaying] = useState(false)
  const [playbackButtonTitle, setPlaybackButtonTitle] = useState(playIcon)

  const startTime = useRef(0)
  const soundDuration = useRef(1)
  const elapsedTime = useRef(0)
  const timeoutId = useRef(0);

  const OFFSET_PITCH_MIN = 0.8;
  const OFFSET_PITCH_MAX = 1.5;


  /**
   * Expo-av status handler.
   */

  useEffect(() => {
    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
        soundDuration.current = playbackStatus.durationMillis;

        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          if (!randomizing) dispatch(stopSound(channelId))
          setSoundFinishedPlaying(true)

          if (playedCount === 1) startTime.current = Date.now();
        } else setSoundFinishedPlaying(false)
      });
    }
  }, [soundObject, soundFinishedPlaying, playedCount, startTime, randomizing, pitchRandomization])


  /**
  * Random shuffling and pitch randomization function.
  * Sets up a timeout with a dynamic pseudo-random interval value such that given n minutes it will play ~n times before n minutes time span.
  * Also handles pitch randomization.
  * It isn't good enough but it gets the job done pretty decently given the simplicity of it... 
  */

  useEffect(() => {
    (async () => {
      if (randomizing && currentSound !== "none" && soundFinishedPlaying && playing) {
        elapsedTime.current = Date.now() - startTime.current

        if (pitchRandomization) {
          let nextPitch = (Math.random() * (1.8 - 0.6) + 0.6)
          console.log('next pitch: ', nextPitch)
          soundObject.setRateAsync(nextPitch, false, Audio.PitchCorrectionQuality.Medium)
        } else { soundObject.setRateAsync(1.0) }

        if (playedCount - 1 >= loops.times || elapsedTime.current > (loops.minutes * 60000)) {
          console.log('Stopping because playedCount >= loops.times || elapsedTime > loops.minutes... Played count: ', playedCount - 1, 'elapsed time:', (elapsedTime.current) / 1000)
          setPlayedCount(1)
          startTime.current = 0;
          elapsedTime.current = 0;
          playFromLastMillis(soundObject);
        } else {

          let minutes = loops.minutes * 60000;
          let times = 0;
          times = loops.times
          const max = (minutes / times) - (elapsedTime.current / 100) // fix
          const min = max / (playedCount % (times) + 1) // fix
          let nextInterval = Math.floor((Math.random() * (max - min) + min))

          console.log(
            ' next interval: ', nextInterval,
            ' Played count: ', playedCount,
            ' min-max: ', min, '-', max,
            ' current elapsed time: ', elapsedTime.current)

          if (soundFinishedPlaying) {
            timeoutId.current = BackgroundTimer.setTimeout(() => {

              if (randomizing && playing) {
                soundObject.stopAsync();
                soundObject.playAsync();
                setPlayedCount(count => count + 1)
              }
              BackgroundTimer.clearTimeout(timeoutId.current)
            }, nextInterval)
          }
        }

      } else if (!randomizing && timeoutId.current) BackgroundTimer.clearInterval(timeoutId.current)
    })();
  }, [soundFinishedPlaying, randomizing, pitchRandomization, soundDuration, playedCount, loops])


  /**
   * Main playback status handler.
  */

  useEffect(() => {
    (async () => {
      if (file) {
        try {
          if (playing) {
            setPlaybackButtonTitle(pauseIcon)
            if (!randomizing) {
              await soundObject.playAsync();
              await soundObject.setIsLoopingAsync(true);
            }
          } else {
            setPlaybackButtonTitle(playIcon)
            await soundObject.stopAsync();
          }
        } catch (e) { console.log(e) }
      }
    })();
  }, [playing])


  /**
   * Random shuffling status handler.
   */

  useEffect(() => {
    (async () => {
      if (file) {
        if (randomizing) {
          if (!playing) {
            console.log('Stopped randomizing sound')
            setPlayedCount(1)
            startTime.current = 0;
            elapsedTime.current = 0;
            BackgroundTimer.clearInterval(timeoutId.current)
          } else {
            playFromLastMillis(soundObject)
          }
        }
      }
    })();
  }, [randomizing, playing])


  const toggleSoundHandler = () => {
    if (file) dispatch(playing ? stopSound(channelId) : playSound(channelId));
    else ToastAndroid.showWithGravityAndOffset(
      'Please load a sound first',
      ToastAndroid.SHORT,
      ToastAndroid.BOTTOM,
      0, 100)
  }

  return (
    <>
      <View>
        <StyledPlaybackButton onPress={toggleSoundHandler}>
          <StyledButtonText>{playbackButtonTitle}</StyledButtonText>
        </StyledPlaybackButton>
      </View>
    </>
  )
}

export default PlaybackButton;