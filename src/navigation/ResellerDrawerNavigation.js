import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import ResellerStack from './ResellerStack'
import CustomResellerDrawer from './CustomResellerDrawer'


const Drawer = createDrawerNavigator()

const ResellerDrawerNavigation = (props) => {

  return (
    <Drawer.Navigator initialRouteName="ResellerStack" screenOptions={{
      headerShown: false,
    }}
      drawerContent={(props) => <CustomResellerDrawer{...props} />}>
      <Drawer.Screen name="ResellerStack" component={ResellerStack} />
    </Drawer.Navigator >
  );
};

export default ResellerDrawerNavigation