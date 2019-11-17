import React, { useState, useEffect, useRef } from 'react'
import BackgroundTimer from 'react-native-background-timer';
import { View, Button, AppState } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { playSound, stopSound, toggleLooping } from '../../actions'

/**
 * 
 * TODO:
 * 
 * Fix short audios (< ~2 seconds) getting stuck between playbackStatusUpdates
 * Refactor and move to own file/component
 * Improve pseudorandom number generator
 * Implement in presets
 * Fix eventual future problems with presets because that's just how it is
 * 
 */
const PlaybackButton = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, playing, file, loops, looping } = useSelector(state => state.channels[channelId])

  const [playedCount, setPlayedCount] = useState(1)
  const [soundFinishedPlaying, setSoundFinishedPlaying] = useState(false)

  const startTime = useRef(0)
  const soundDuration = useRef(1)
  const elapsedTime = useRef(0)

  useEffect(() => {

    if (soundObject) {
      soundObject.setOnPlaybackStatusUpdate((playbackStatus) => {
        soundDuration.current = playbackStatus.durationMillis;

        if (playbackStatus.didJustFinish && !playbackStatus.isLooping) {
          if (!looping) dispatch(stopSound(channelId))
          setSoundFinishedPlaying(true)
          if (playedCount === 1) startTime.current = Date.now();
        } else setSoundFinishedPlaying(false)

        if (soundFinishedPlaying && looping) {
          elapsedTime.current = Date.now() - startTime.current

          if (playedCount >= loops.times || elapsedTime.current > (loops.minutes * 60000)) {
            console.log('Stopping because playedCount >= loops.times || elapsedTime > loops.minutes... Played count: ', playedCount, 'elapsed time:', (elapsedTime.current) / 1000)
            setPlayedCount(1)
            startTime.current = 0;
            elapsedTime.current = 0;
            dispatch(stopSound(channelId))
            dispatch(playSound(channelId))
          } else {

            console.log('current elapsed time: ', elapsedTime.current)
            let minutes = loops.minutes * 60000;
            let times = 0;
            let timesCanBePlayed = minutes / soundDuration.current

            times = loops.times > timesCanBePlayed ? timesCanBePlayed : loops.times

            const min = 0  //fix
            const max = Math.floor((minutes / times) + (soundDuration.current / playedCount)) //fix

            console.log(min, '-', max)
            let nextInterval = Math.floor((Math.random() * (max - min) + min))
            console.log('next interval: ', nextInterval, ' Played count: ', playedCount)

            const timeoutId = BackgroundTimer.setTimeout(async () => {
              await soundObject.stopAsync();
              await soundObject.playAsync();

              setPlayedCount(playedCount + 1)

              BackgroundTimer.clearTimeout(timeoutId)
            }, nextInterval)

          }
        }
      });
    }
  }, [soundObject, soundFinishedPlaying, playedCount, startTime, looping])


  useEffect(() => {
    (async () => {
      if (file) {
        try {
          if (playing) {
            await soundObject.playAsync();
          }
          else await soundObject.stopAsync();
        }
        catch (e) { console.log(e) }
      }
    })();
  }, [playing])


  const toggleSoundHandler = () => {
    if (file) {
      if (looping) {
        setPlayedCount(1)
        console.log('Set starTtime time to 0 because stopped random')
        dispatch(toggleLooping(channelId))
        startTime.current = 0;
        elapsedTime.current = 0;
        dispatch(stopSound(channelId))
      }
      dispatch(playing ? stopSound(channelId) : playSound(channelId));
    }
  }

  return (
    <>
      <View>
        <Button title={playing ? ' || ' : ' > '} onPress={toggleSoundHandler} />
      </View>
    </>
  )
}

export default PlaybackButton;
