import React from 'react'
import { Provider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { theme } from '../core/theme'
import {
    StartScreen,
    LoginScreen,
    Dashboard,
  } from '../screens'
import Detail from '../screens/Detail'
import Create from '../screens/Create'

const Stack = createStackNavigator();

const NavigationApp = () => {
    return (
        <Provider theme={theme}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="StartScreen"
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="StartScreen" component={StartScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Detail" component={Detail} />
            <Stack.Screen name="Create" component={Create} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    );
  }

  export default NavigationApp;