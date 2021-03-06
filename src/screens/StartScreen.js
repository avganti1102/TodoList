import React from 'react'
import {
  View,
  StyleSheet,
} from "react-native";
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

const StartScreen = ({ navigation }) => (
    <View style={styles.waper}>
      <Logo />
    <Header
      title = 'Todo List App'>
    </Header>
    <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    </View>
)
const styles = StyleSheet.create({
	waper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff',
	},
  button:{
    width: '70%',
  }
});

export default StartScreen
