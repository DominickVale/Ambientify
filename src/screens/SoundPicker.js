import React, { useEffect } from 'react'
import { View, Text, TouchableOpacity, BackHandler } from 'react-native'
import { withNavigation } from 'react-navigation'

import { useBackHandler } from '../utils/'
import SoundCategory from '../components/SoundCategory'
import { SOUND_FILES } from '../constants'

const SoundPicker = ({ navigation }) => {

  useBackHandler(BackHandler, navigation, () => navigation.goBack());

  return (
    <View onPress={() => navigation.pop()} style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
      <View style={{ height: "80%", width: '80%', backgroundColor: "white", justifyContent: "flex-start" }}>
        <Text>Sound Picker Modal</Text>
        {
          /**
           * Renders the list of categories. 
           * TODO:
           * Render wrapped in a horizontally scrollable view as per design. Hint: use FlatList
           */
          Object.keys(SOUND_FILES).map(category => (
            <SoundCategory category={category} channelId={navigation.getParam('channelId')} key={category} />
          )
          )}

      </View>
    </View>
  )
}

SoundPicker.navigationOptions = {
  header: null,
  headerMode: 'none'
}

export default withNavigation(SoundPicker)
