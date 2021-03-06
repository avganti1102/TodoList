import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>To do list</Header>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
  </Background>
)

export default StartScreen
