import React, { useState, useEffect, useRef } from 'react'
import BackgroundTimer from 'react-native-background-timer';
import { View, Button, AppState } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Audio } from 'expo-av'

import { StyledPlaybackButton, StyledButtonText } from './styles'
import { playSound, stopSound, toggleRandom, setLoops } from '../../actions'
import { playFromLastMillis } from '../../utils'
import { COLORS } from '../../constants';
/**
 * 
 * TODO:
 * 
 * Improve Pitch randomization
 * Refactor and move to own file/component
 * Improve pseudorandom number generator
 * 
 */
const playIcon = <Icon name="play-arrow" size={30} />;
const pauseIcon = <Icon name="pause" size={30} />

const PlaybackButton = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, playing, file, loops, randomizing, currentSound, volume } = useSelector(state => state.channels[channelId])
  const { pitchRandomization } = useSelector(state => state.settings)

  const [playedCount, setPlayedCount] = useState(1)
  const [soundFinishedPlaying, setSoundFinishedPlaying] = useState(false)
  const [playbackButtonTitle, setPlaybackButtonTitle] = useState(playIcon)

  const startTime = useRef(0)
  const soundDuration = useRef(1)
  const elapsedTime = useRef(0)
  const timeoutId = useRef(0);

  useEffect(() => {

    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
        soundDuration.current = playbackStatus.durationMillis;

        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          if (!randomizing) dispatch(stopSound(channelId))
          setSoundFinishedPlaying(true)

          if (pitchRandomization) {
            let nextPitch = (Math.random() * (1.8 - 0.6) + 0.6)
            console.log('next pitch: ', nextPitch)
            soundObject.setRateAsync(nextPitch, false, Audio.PitchCorrectionQuality.Medium)
          }

          if (playedCount === 1) startTime.current = Date.now();
        } else setSoundFinishedPlaying(false)

      });
    }
  }, [soundObject, soundFinishedPlaying, playedCount, startTime, randomizing, elapsedTime, pitchRandomization])


  useEffect(() => {

    /**
     * Random shuffling / randomizing function.
     * Sets up a timeout with a dynamic pseudo-random interval value such that given n minutes it will play ~n times before n minutes time span.
     * It isn't good enough but it gets the job done pretty decently given the simplicity of it... 
     */
    (async () => {
      if (randomizing && currentSound !== "none" && soundFinishedPlaying && playing) {
        elapsedTime.current = Date.now() - startTime.current

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
  }, [soundFinishedPlaying, randomizing, soundDuration, playedCount, loops])

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

  const toggleSoundHandler = () => {
    if (file) {
      if (randomizing) {
        if (playing) {
          setPlayedCount(1)
          console.log('Set starTtime time to 0 because stopped random')
          startTime.current = 0;
          elapsedTime.current = 0;
          dispatch(stopSound(channelId))
          BackgroundTimer.clearInterval(timeoutId.current)
        } else {
          dispatch(playSound(channelId))
          playFromLastMillis(soundObject)
        }
      } else dispatch(playing ? stopSound(channelId) : playSound(channelId));
    }
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