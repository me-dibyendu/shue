import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TextInput,
    Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import RBSheet from 'react-native-raw-bottom-sheet'
import PickUpComponent from '../components/PickUpComponent'
import DeliveryComponent from '../components/DeliveryComponent'

const OrderSuccess = (props) => {

    const navigation = useNavigation()
    const gotoProductList = () => {
        navigation.navigate('ProductList')
    }
    return (
        <View style={{ flex: 1, backgroundColor: Constants.colors.white, }}>
            <CustomAppBar title={'Order Place Status'} navigation={props.navigation} />
            <ScrollView style={{ flex: 1, }}>
                <Text style={styles.shippingOptionHeading}>Order Placed Successfully</Text>
                <View style={styles.productCard}>
                    <View style={[styles.pname, { flexDirection: 'row', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, }]}>
                        <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Nike Casual Shoe </Text>
                    </View>
                    <View style={{ flexDirection: 'row', padding: Constants.padding, }}>
                        <Image source={Images.productFour} style={styles.productImg} />
                        <View style={{ marginTop: 12, justifyContent: 'center', }}>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Qty</Text>
                                <Text style={styles.rightText}>: 2</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Size</Text>
                                <Text style={styles.rightText}>: 36</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Color</Text>
                                <Text style={styles.rightText}>: Black</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Price</Text>
                                <Text style={styles.rightText}>: $150</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Pressable onPress={gotoProductList} style={styles.button}><Text style={styles.btnText}>Continue Shopping</Text></Pressable>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    productCard: {
        margin: Constants.margin,
        backgroundColor: Constants.colors.white,
        elevation: 5,
        borderRadius: Constants.borderRadius,
    },
    pname: {
        flex: 1,
        backgroundColor: Constants.colors.primary,
        padding: 8,
        color: Constants.colors.white,
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 18,
        justifyContent: 'space-between',
    },
    productImg: {
        resizeMode: 'contain',
        width: 130,
        height: 130,
        alignSelf: 'center',
        justifyContent: 'center',
        marginRight: Constants.margin,
    },
    productDetails: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Constants.colors.grayBg,
        paddingBottom: 12,
    },
    leftText: {
        width: 55,
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 16,
        color: Constants.colors.primary,
        marginLeft: 15,
    },
    rightText: {
        fontFamily: Constants.fontFamily.PoppinsRegular,
        fontSize: 18,
        color: Constants.colors.primary,
    },
    shippingOptionHeading: {
        color: Constants.colors.green,
        fontFamily: Constants.fontFamily.PoppinsBold,
        fontSize: 20,
        marginBottom: 12,
        marginTop: 25,
        backgroundColor: '#F9F9F9',
        padding: Constants.padding,
    },
    button: {
        padding: 10,
        backgroundColor: Constants.colors.primary,
        borderRadius: Constants.borderRadius,
        marginBottom: 12,
        marginTop: 12,
        alignSelf: 'center',
        width: 210,
    },
    btnText: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        color: Constants.colors.white,
        alignSelf: 'center',
        fontSize: 18,
    },
})

export default OrderSuccess