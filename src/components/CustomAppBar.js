import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    Pressable,
    StatusBar,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Images from '../assets/images/Images'
import Constants from '../shared/Constants'
import Fa from 'react-native-vector-icons/FontAwesome5'

const CustomAppBar = (props) => {
    const gotoBack = ()=>{
        props.navigation.goBack()
    }
    const gotoNotification = ()=>{

    }
    const gotoCart = ()=>{
        props.navigation.navigate('Cart')
    }
    return (
        <View style={styles.appBar}>
            <StatusBar animated={true} backgroundColor={'#EDEDED'} />
            {
                props.title?<Pressable onPress={gotoBack}><AntDesign name="arrowleft" size={24} color={Constants.colors.primary} style={{marginTop:5,}} /></Pressable>:<Pressable onPress={()=>props.navigation.openDrawer()}><Image source={Images.menu} style={styles.menuIcon} /></Pressable>
            }
            {props.title?<Text style={styles.title}>{props.title}</Text>:<Image source={Images.shiiu} style={styles.logo} />}
            {
                props.reseller?
                <Pressable onPress={gotoNotification}><Fa name='bell' size={25} color={Constants.colors.primary} /></Pressable>:
                <Pressable onPress={gotoCart}><Fa name='shopping-bag' size={25} color={Constants.colors.primary} /></Pressable>
            }
        </View>
    )
}
const styles = StyleSheet.create({
    appBar: {
        flexDirection: 'row',
        backgroundColor: Constants.colors.white,
        justifyContent: 'space-between',
        padding: Constants.padding,
        borderBottomWidth: 2,
        borderBottomColor: '#EDEDED',      
    },
    logo: {
        width: 60,
        height: 30,
        resizeMode: 'contain',
    },
    menuIcon: {
        width: 40,
        height: 30,
        marginTop: 3,
        resizeMode: 'contain',
    },
    cartIcon: {
        marginTop: 4,
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    title: {
        fontFamily: Constants.fontFamily.RobotoBold,
        fontSize: 24,
        color: Constants.colors.primary,
    },
})
export default CustomAppBar