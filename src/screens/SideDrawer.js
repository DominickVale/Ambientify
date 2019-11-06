/**
 * TODO:
 *  implement
 */
import React from 'react'
import { Text, View, Dimensions, StyleSheet, Button } from 'react-native'
import { Navigation } from 'react-native-navigation'

import { MAIN_SCREEN, PRESETS_SCREEN } from '../navigation/screens'

const SideDrawer = (props) => {

  const openPushScreen = (screen) => {
    console.log("open push screen")

    Navigation.push('appStack', {
      component: {
        name: screen,
        id: screen,
      }

    })
    Navigation.mergeOptions('menu', {
      sideMenu: {
        left: {
          visible: false,
        },
      },
    })
  }

  return (
    <>
      <View style={[style.container, { width: Dimensions.get("window").width * 0.8 }]}>
        <Text>
          Side Drawer
        </Text>
        <Button title="Presets" onPress={() => { openPushScreen(PRESETS_SCREEN) }} />
        <Button title="Mixer" onPress={() => { openPushScreen(MAIN_SCREEN) }} />
      </View>
    </>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  }
})

export default SideDrawer
