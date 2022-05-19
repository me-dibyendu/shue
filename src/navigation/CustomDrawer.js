import React from 'react'
import {
    StyleSheet,
    View,
    Image,
} from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'
import Ionicon from 'react-native-vector-icons/Ionicons'
import Constants from '../shared/Constants'
import Images from '../assets/images/Images'

function CustomDrawer(props) {
    return (
        <DrawerContentScrollView {...props}>
            <View style={styles.header}>
                <View style={styles.logoBg}>
                    <Image source={Images.logo} style={styles.logo} />
                </View>
            </View>
            <View style={styles.content}>
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='HOME'
                    activeTintColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="home" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => props.navigation.navigate('Home')} />
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='SELLER LIST'
                    activeBackgroundColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="apps-outline" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => {props.navigation.navigate('ResellerDashboard') }} />
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='PRODUCT LIST'
                    activeBackgroundColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="boat" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => { props.navigation.navigate('ProductList') }} />
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='MY CART'
                    activeBackgroundColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="cart" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => props.navigation.navigate('Cart')} />
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='ORDERS'
                    activeBackgroundColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="document-text-outline" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => props.navigation.navigate('OrderList')} />
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='WISHLIST'
                    activeBackgroundColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="heart-outline" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => props.navigation.navigate('Wishlist')} />
                <DrawerItem style={{
                    borderBottomWidth: 2,
                    paddingBottom: 8,
                    borderColor: Constants.colors.grayBg,
                }}
                    label='PROFILE'
                    activeBackgroundColor={Constants.colors.lightGray}
                    icon={() => <Ionicon style={styles.drawerIcon} name="person" />}
                    labelStyle={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.Roboto, fontSize: 16, }}
                    onPress={() => {props.navigation.navigate('Profile')}} />
            </View>
        </DrawerContentScrollView>
    )
}
const styles = StyleSheet.create({
    header: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        height: 200,
        padding: Constants.padding,
        backgroundColor: Constants.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoBg: {
        width: 140,
        height: 140,
        backgroundColor: Constants.colors.white,
        borderRadius: 130,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 110,
        height: 110,
    },
    content: {

    },
    drawerIcon: {
        color: Constants.colors.white,
        backgroundColor: Constants.colors.primary,
        fontSize: 16,
        padding: 10,
        paddingLeft: 12,
        paddingRight: 12,
        borderRadius: 40,
    },
})
export default CustomDrawer