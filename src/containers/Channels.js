import React from 'react'
import { Text } from 'react-native'
import Channel from '../components/Channel'

const Channels = (props) => {
  return (
    <>
      <Text> Channels container</Text>
      <Channel id={0} soundName='crows' />
      <Channel id={1} soundName='wildlife' />
      <Channel id={2} soundName='dark' />
    </>
  )
}

export default Channels
