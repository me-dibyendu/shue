import React from 'react';
import {
    View,
    Text
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Home'
import Search from '../screens/Search'
import Request from '../screens/Request'
import OrdersList from '../screens/OrderList'
import MyAccount from '../screens/MyAccount'
import Fa from 'react-native-vector-icons/FontAwesome5'
import Constants from '../shared/Constants';

const Tab = createBottomTabNavigator()

const TabNavigation = (props) => {

    return (
        <Tab.Navigator initialRouteName='Home' screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
                let iconName
                if (route.name == 'Home') {
                    iconName = 'home'
                }
                else if (route.name == 'Search') {
                    iconName = 'search'
                }
                else if (route.name == 'Request') {
                    iconName = 'tasks'
                }
                else if (route.name == 'Orders') {
                    iconName = 'clipboard-list'
                }
                else if (route.name == 'MyAccount') {
                    iconName = 'user'
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
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Request" component={Request} />
            <Tab.Screen name="Orders" component={OrdersList} />
            <Tab.Screen name="MyAccount" component={MyAccount} />
        </Tab.Navigator>
    );
};

export default TabNavigation