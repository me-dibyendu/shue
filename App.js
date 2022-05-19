import 'react-native-gesture-handler'
import React, { useState } from 'react'
import {
  StatusBar,
} from 'react-native'
import AppNavigation from './src/navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'
import Constants from './src/shared/Constants'
import { Provider } from 'react-redux'
import store from './src/shared/redux/store'

const App = () => {

  return (
    <NavigationContainer>
      <StatusBar animated={true} backgroundColor={Constants.colors.white} />
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    </NavigationContainer>
  )
}

export default App;
