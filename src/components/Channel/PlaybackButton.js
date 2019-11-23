import React, { useState, useEffect, useRef } from 'react'
import BackgroundTimer from 'react-native-background-timer';
import { View, Button, AppState } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { Audio } from 'expo-av'

import { playSound, stopSound, toggleLooping, setLoops } from '../../actions'
import { playFromLastMillis } from '../../utils'
/**
 * 
 * TODO:
 * 
 * Fix resume playing for looping channels
 * Add onComponentUnmount clean up
 * Improve Pitch randomization
 * Refactor and move to own file/component
 * Improve pseudorandom number generator
 * 
 */
const PlaybackButton = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, playing, file, loops, looping, currentSound, volume } = useSelector(state => state.channels[channelId])

  const [playedCount, setPlayedCount] = useState(1)
  const [soundFinishedPlaying, setSoundFinishedPlaying] = useState(false)
  const [playbackButtonTitle, setPlaybackButtonTitle] = useState('>')

  const startTime = useRef(0)
  const soundDuration = useRef(1)
  const elapsedTime = useRef(0)
  const timeoutId = useRef(0);

  useEffect(() => {

    let nextPitch = (Math.random() * (1.8 - 0.6) + 0.6)
    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
        soundDuration.current = playbackStatus.durationMillis;

        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          if (!looping) dispatch(stopSound(channelId))
          setSoundFinishedPlaying(true)
          console.log('next pitch: ', nextPitch)
          soundObject.setRateAsync(nextPitch, false, Audio.PitchCorrectionQuality.Medium)
          if (playedCount === 1) startTime.current = Date.now();
        } else setSoundFinishedPlaying(false)

      });
    }
  }, [soundObject, soundFinishedPlaying, playedCount, startTime, looping, elapsedTime])


  useEffect(() => {

    (async () => {
      if (looping && file && currentSound !== "none" && soundFinishedPlaying && playing) {
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

          console.log('next interval: ', nextInterval,
            ' Played count: ', playedCount,
            'min-max: ', min, '-', max,
            'current elapsed time: ', elapsedTime.current)

          if (soundFinishedPlaying) {
            timeoutId.current = BackgroundTimer.setTimeout(() => {
              if (looping) {
                soundObject.stopAsync();
                soundObject.playAsync();
                setPlayedCount(playedCount => playedCount + 1)

              }
              BackgroundTimer.clearTimeout(timeoutId.current)

            }, nextInterval)
          }
        }
      } else if (!looping && timeoutId.current) BackgroundTimer.clearInterval(timeoutId.current)
    })();
  }, [soundFinishedPlaying, looping, soundDuration, playedCount, loops])



  useEffect(() => {
    (async () => {
      if (file) {
        try {
          if (playing) {
            setPlaybackButtonTitle('||')
            if (!looping) {
              await soundObject.playAsync();
              await soundObject.setIsLoopingAsync(true);
            }
          } else {
            setPlaybackButtonTitle('>')
            await soundObject.stopAsync();
          }
        } catch (e) { console.log(e) }
      }
    })();
  }, [playing])


  const toggleSoundHandler = () => {
    if (file) {
      if (looping) {
        if (playing) {
          setPlayedCount(1)
          console.log('Set starTtime time to 0 because stopped random')
          startTime.current = 0;
          elapsedTime.current = 0;
          dispatch(stopSound(channelId))
          dispatch(toggleLooping(channelId))
        } else {
          playFromLastMillis(soundObject);
        }
      } else dispatch(playing ? stopSound(channelId) : playSound(channelId));
    }
  }

  return (
    <>
      <View>
        <Button title={playbackButtonTitle} onPress={toggleSoundHandler} />
      </View>
    </>
  )
}

export default PlaybackButton;