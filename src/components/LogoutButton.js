import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height'

const LogoutButton = ({ navigation }) => (
  <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')} style={styles.container}>
    <Text>Logout</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 10 + getStatusBarHeight(),
    left: 30,
  },
  image: {
    width: 24,
    height: 24,
  },
})

export default LogoutButton
