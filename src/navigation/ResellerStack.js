import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ResellerTabNavigation from './ResellerTabNavigation'
import ResellerRequest from '../screens/ResellerRequest';
import ProductDetails from '../screens/ProductDetails';
import Cart from '../screens/Cart';
import Payment from '../screens/Payment';
import OrderSuccess from '../screens/OrderSuccess';
import ProductList from '../screens/ProductList';
import Wishlist from '../screens/Wishlist';

const Stack = createNativeStackNavigator()

const ResellerStack = () => {

  return (
    <Stack.Navigator initialRouteName='ResellerTabs' screenOptions={{headerShown: false,}}>
      <Stack.Screen name="ResellerTabs" component={ResellerTabNavigation} />
      <Stack.Screen name="ResellerRequest" component={ResellerRequest} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
      <Stack.Screen name="Cart" component={Cart} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
      <Stack.Screen name="Wishlist" component={Wishlist} />
    </Stack.Navigator>
  )
}

export default ResellerStack