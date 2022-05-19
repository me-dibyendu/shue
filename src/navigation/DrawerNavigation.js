import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import CustomDrawer from './CustomDrawer'
import HomeStack from './HomeStack'


const Drawer = createDrawerNavigator()

const DrawerNavigation = (props) => {

  return (
    <Drawer.Navigator initialRouteName="HomeStack" screenOptions={{
      headerShown: false,
    }}
      drawerContent={(props) => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeStack" component={HomeStack} />
    </Drawer.Navigator >
  );
};

export default DrawerNavigation