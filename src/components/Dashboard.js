import { View, Text, SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'

export default function Dashboard({route,navigation}) {
  console.warn(route.params)
  return (
    <SafeAreaView style={styles.container}>
      <Text></Text>
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: {
      flex:1,
      backgroundColor: '#fff',
  },
})