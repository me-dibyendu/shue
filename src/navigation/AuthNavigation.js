import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Login'
import Signup from '../screens/Signup'
import ResellerLogin from '../screens/ResellerLogin'
import ResellerSignup from '../screens/ResellerSignup'

const Stack = createNativeStackNavigator()

const AuthNavigation = (props) => {
  return (
    <Stack.Navigator initialRouteName='/' screenOptions={{ headerShown: false, }}>
      <Stack.Screen name="/" component={()=><Login {...props} />} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="ResellerLogin" component={()=><ResellerLogin {...props} />} />
      <Stack.Screen name="ResellerSignup" component={ResellerSignup} />
    </Stack.Navigator>
  )
}

export default AuthNavigation