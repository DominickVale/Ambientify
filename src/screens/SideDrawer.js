/**
 * TODO:
 *  implement
 */
import React from 'react'
import { Text, View, Dimensions, StyleSheet } from 'react-native'

const SideDrawer = (props) => {
  return (
    <>
      <View style={[style.container, { width: Dimensions.get("window").width * 0.8 }]}>
        <Text>
          Side Drawer
        </Text>
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
