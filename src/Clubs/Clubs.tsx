import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BadgeCard from '../Badges/BadgeCard'

const Clubs = () => {
  return (
    <View style={styles.container}>
      <BadgeCard/>
    </View>
  )
}

export default Clubs

const styles = StyleSheet.create({
    container: {
        padding: 8
    }
})