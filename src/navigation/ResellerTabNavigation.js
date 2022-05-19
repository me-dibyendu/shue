import React from 'react';
import {
    View,
    Text,
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Fa from 'react-native-vector-icons/FontAwesome5'
import Constants from '../shared/Constants'
import AddStockReseller from '../screens/AddStockReseller'
import ResellerDashboard from '../screens/ResellerDashboard'
import ProductList from '../screens/ProductList'
import RequestReseller from '../screens/RequestReseller'
import OrderList from '../screens/OrderList';

const Tab = createBottomTabNavigator()

const ResellerTabNavigation = () => {

    return (
        <Tab.Navigator initialRouteName='Dashboard' screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                if (route.name == 'Dashboard') {
                    iconName = 'border-all'
                }
                else if (route.name == 'Request') {
                    iconName = 'tasks'
                }
                else if (route.name == 'AddStock') {
                    iconName = 'layer-group'
                }
                else if (route.name == 'Buy') {
                    iconName = 'cart-plus'
                }
                else if (route.name == 'Order') {
                    iconName = 'clipboard-list'
                }
                return <View style={{
                    height: 55,
                    width: 55,
					borderRadius: 45,
                    marginTop: -12,
                    justifyContent: 'center',
					alignItems: 'center',
                }}>
                    <View style={{backgroundColor: focused?Constants.colors.primary:Constants.colors.white, marginTop: 10, width: 45, height: 45, borderRadius: 45, justifyContent: 'center', alignItems: 'center',}}>
                        <Fa name={iconName} color={color} size={22} style={{}} />
                    </View>
                    <Text style={{fontSize: 10, marginTop: 5,}}>{route.name}</Text>
                </View>

            },
            tabBarActiveTintColor: Constants.colors.white,
            tabBarShowLabel: false,
            tabBarStyle: {
                height: 80,
            },

        })}>
            <Tab.Screen name="Dashboard" component={ResellerDashboard} />
            <Tab.Screen name="Request" component={RequestReseller} />
            <Tab.Screen name="AddStock" component={AddStockReseller} />
            <Tab.Screen name="Buy" component={ProductList} />
            <Tab.Screen name="Order" component={OrderList} />
        </Tab.Navigator>
    );
};

export default ResellerTabNavigation