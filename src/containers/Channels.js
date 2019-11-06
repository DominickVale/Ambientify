import React from 'react'
import { Text } from 'react-native'
import Channel from '../components/Channel'

const Channels = (props) => {
  return (
    <>
      <Text> Channels container</Text>
      <Channel id={0} />
      <Channel id={1} />
      <Channel id={2} />
    </>
  )
}

export default Channels
