/**
 * TODO:
 *  implement
 */
import React from 'react'
import { Text, View, Dimensions, StyleSheet, Button } from 'react-native'

const SideDrawer = (props) => {

  const openPushScreen = () => {
  }

  return (
    <>
      <View style={[style.container]}>
        <Text>
          Side Drawer
        </Text>
        <Button title="Presets" onPress={() => { props.navigation.navigate('Presets') }} />
        <Button title="Mixer" onPress={() => { props.navigation.navigate('Mixer') }} />
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
