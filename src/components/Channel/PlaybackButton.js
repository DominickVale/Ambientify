import React, { useState, useEffect, useRef } from 'react'
import BackgroundTimer from 'react-native-background-timer';
import { View, Button, AppState } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import { playSound, stopSound, toggleLooping } from '../../actions'

/**
 * 
 * TODO:
 * 
 * Fix sounds with low times settings ending too soon
 * Refactor and move to own file/component
 * Improve pseudorandom number generator
 * 
 */
const PlaybackButton = ({ channelId }) => {
  const dispatch = useDispatch();
  const { soundObject, playing, file, loops, looping, currentSound } = useSelector(state => state.channels[channelId])

  const [playedCount, setPlayedCount] = useState(1)
  const [soundFinishedPlaying, setSoundFinishedPlaying] = useState(false)
  const [playbackButtonTitle, setPlaybackButtonTitle] = useState('>')

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

      });
    }
  }, [soundObject, soundFinishedPlaying, playedCount, startTime, looping, elapsedTime])


  useEffect(() => {
    if (looping && file && currentSound !== "none" && soundFinishedPlaying) {
      elapsedTime.current = Date.now() - startTime.current

      if (playedCount >= loops.times || elapsedTime.current > (loops.minutes * 60000)) {
        console.log('Stopping because playedCount >= loops.times || elapsedTime > loops.minutes... Played count: ', playedCount, 'elapsed time:', (elapsedTime.current) / 1000)
        setPlayedCount(1)
        startTime.current = 0;
        elapsedTime.current = 0;
        soundObject.stopAsync();
        soundObject.playAsync();
      } else {

        console.log('current elapsed time: ', elapsedTime.current)
        let minutes = loops.minutes * 60000;
        let times = 0;
        let timesCanBePlayed = minutes / soundDuration.current

        times = loops.times > timesCanBePlayed ? timesCanBePlayed : loops.times

        const min = (soundDuration.current / times) - (elapsedTime.current / (100 * playedCount))  //fix
        const max = Math.floor(((minutes / times) - Math.abs((elapsedTime.current / 100)) + (soundDuration.current / playedCount)))//fix

        console.log(min, '-', max)
        let nextInterval = Math.floor((Math.random() * (max - min) + min))
        console.log('next interval: ', nextInterval, ' Played count: ', playedCount)
        if (soundFinishedPlaying) {
          const timeoutId = BackgroundTimer.setTimeout(() => {

            if (looping) {
              soundObject.stopAsync();
              soundObject.playAsync();

              setPlayedCount(playedCount + 1)
            }
            BackgroundTimer.clearTimeout(timeoutId)
          }, nextInterval)
        }
      }
    }

  }, [soundFinishedPlaying, looping, soundDuration, playedCount, loops])



  useEffect(() => {
    (async () => {
      if (file) {
        if (looping) setPlaybackButtonTitle('looping')
        try {
          if (playing) {
            setPlaybackButtonTitle('||')
            await soundObject.playAsync();
          }
          else {
            setPlaybackButtonTitle('>')
            await soundObject.stopAsync();
          }
        }
        catch (e) { console.log(e) }
      }
    })();
  }, [playing])


  const toggleSoundHandler = () => {
    if (file) {
      if (looping && playing) {
        setPlayedCount(1)
        console.log('Set starTtime time to 0 because stopped random')
        startTime.current = 0;
        elapsedTime.current = 0;
        dispatch(stopSound(channelId))
        dispatch(toggleLooping(channelId))

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
