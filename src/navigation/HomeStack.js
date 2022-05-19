import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TabNavigation from './TabNavigation'
import ProductList from '../screens/ProductList'
import ProductDetails from '../screens/ProductDetails'
import Profile from '../screens/Profile'
import OrderList from '../screens/OrderList'
import Cart from '../screens/Cart'
import Payment from '../screens/Payment'
import OrderSuccess from '../screens/OrderSuccess';
import Wishlist from '../screens/Wishlist';

const Stack = createNativeStackNavigator()

const HomeStack = () => {

  return (
    <Stack.Navigator initialRouteName='Tabs' screenOptions={{headerShown: false,}}>
      <Stack.Screen name="Tabs" component={TabNavigation} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="OrderList" component={OrderList} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  )
}

export default HomeStack