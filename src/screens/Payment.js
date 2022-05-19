import React, { useState, useRef } from 'react'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Pressable,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Fontisto from 'react-native-vector-icons/Fontisto'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import RBSheet from 'react-native-raw-bottom-sheet'
import CardDetails from '../components/payment/CardDetails'
import NetBankingDetails from '../components/payment/NetBankingDetails'

const Payment = (props) => {
    const [paymentMode, setPaymentMode] = useState('')
    const refRBSheet = useRef()
    const handelPaymentOptions = (paymetnMode) => {
        setPaymentMode(paymetnMode)
        if(paymetnMode!='cod')
            refRBSheet.current.open()
    }
    const navigation = useNavigation()
    const addAddress = () => {

    }
    const applyCoupon = () => {

    }
    const orderNow = ()=>{
        navigation.navigate('OrderSuccess')
    }
    return (
        <View style={{ flex: 1, backgroundColor: Constants.colors.white, }}>
            <CustomAppBar title={'Payment'} navigation={props.navigation} />
            <View style={{ flexDirection: 'row', padding: Constants.padding, justifyContent: 'space-between', alignItems: 'center', }}>
                <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, color: Constants.colors.primary, }}>Total Pay</Text>
                <Text style={{ backgroundColor: Constants.colors.primary, color: Constants.colors.white, padding: 12, paddingStart: 20, paddingEnd: 20, borderRadius: 4, fontSize: 15, }}>$275</Text>
            </View>
            <ScrollView style={{ flex: 1, }}>
                <Text style={styles.shippingOptionHeading}>Order Review</Text>
                <View style={styles.productCard}>
                    <View style={[styles.pname, { flexDirection: 'row', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, }]}>
                        <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Nike Casual Shoe </Text>
                    </View>
                    <View>
                        <View style={{ flex: 1, justifyContent: 'space-between', padding: Constants.padding, }}>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>SKU</Text>
                                <Text style={styles.rightText}>#123</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Qty</Text>
                                <Text style={styles.rightText}>2</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Size</Text>
                                <Text style={styles.rightText}>36</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Color</Text>
                                <Text style={styles.rightText}>Black</Text>
                            </View>
                            <View style={[styles.productDetails, { borderBottomWidth: 0, paddingBottom: 0, }]}>
                                <Text style={styles.leftText}>Price</Text>
                                <Text style={styles.rightText}>$150</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.shippingOptionHeading}>Delivery / Pick Up Address</Text>
                <View style={styles.productCard}>
                    <View style={[styles.pname, { flexDirection: 'row', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, }]}>
                        <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Drop Point </Text>
                    </View>
                    <View>
                        <View style={{ flex: 1, justifyContent: 'space-between', padding: Constants.padding, }}>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>Address</Text>
                                <Text style={styles.rightText}>Block C, Time Square</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}></Text>
                                <Text style={[styles.rightText, {flexWrap: 'wrap',}]}>Top Floor, World Trade Center</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>ZIP Code</Text>
                                <Text style={styles.rightText}>10001</Text>
                            </View>
                            <View style={styles.productDetails}>
                                <Text style={styles.leftText}>City</Text>
                                <Text style={styles.rightText}>New York</Text>
                            </View>
                            <View style={[styles.productDetails, { }]}>
                                <Text style={styles.leftText}>State</Text>
                                <Text style={styles.rightText}>New York</Text>
                            </View>
                            <View style={[styles.productDetails, { }]}>
                                <Text style={styles.leftText}>Country</Text>
                                <Text style={styles.rightText}>United State</Text>
                            </View>
                            <View style={[styles.productDetails, { borderBottomWidth: 0, paddingBottom: 0, }]}>
                                <Text style={styles.leftText}>Distance</Text>
                                <Text style={styles.rightText}>2.5 Miles</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.shippingOptionHeading}>Select Payment Mode</Text>
                <View style={{ padding: Constants.padding }}>
                    <View style={styles.shippingOptions}>
                        <Pressable onPress={() => handelPaymentOptions('creditcard')} style={styles.shippingOptions}>
                            {
                                paymentMode == 'creditcard' ? <Fontisto name='radio-btn-active' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} /> : <Fontisto name='radio-btn-passive' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} />
                            }

                            <Text style={styles.radionButtonText}>Credit Card</Text>
                        </Pressable>
                    </View>
                    <View style={styles.shippingOptions}>
                        <Pressable onPress={() => handelPaymentOptions('debitcard')} style={styles.shippingOptions}>
                            {
                                paymentMode == 'debitcard' ? <Fontisto name='radio-btn-active' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} /> : <Fontisto name='radio-btn-passive' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} />
                            }

                            <Text style={styles.radionButtonText}>Debit Card</Text>
                        </Pressable>
                    </View>
                    <View style={styles.shippingOptions}>
                        <Pressable onPress={() => handelPaymentOptions('netbanking')} style={styles.shippingOptions}>
                            {
                                paymentMode == 'netbanking' ? <Fontisto name='radio-btn-active' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} /> : <Fontisto name='radio-btn-passive' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} />
                            }

                            <Text style={styles.radionButtonText}>Net Banking</Text>
                        </Pressable>
                    </View>
                    <View style={[styles.shippingOptions, {flexDirection: 'column'}]}>
                        <Pressable onPress={() => handelPaymentOptions('cod')} style={styles.shippingOptions}>
                            {
                                paymentMode == 'cod' ? <Fontisto name='radio-btn-active' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} /> : <Fontisto name='radio-btn-passive' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} />
                            }

                            <Text style={styles.radionButtonText}>Cash On Delivery</Text>
                        </Pressable>
                        {
                            paymentMode=='cod'? <Pressable onPress={orderNow} style={styles.button}>
                                <Text style={styles.btnText}>Order Now</Text>
                            </Pressable>:null
                        }
                    </View>
                </View>
            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                height={430}
                openDuration={250}
                customStyles={{
                    container: {
                        padding: Constants.padding,
                    }
                }}
            >
                {
                    paymentMode == 'creditcard' || paymentMode == 'debitcard' ? <CardDetails /> : <NetBankingDetails />
                }
            </RBSheet>
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
        backgroundColor: Constants.colors.primary,
        padding: 8,
        color: Constants.colors.white,
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 18,
    },
    productImg: {
        resizeMode: 'contain',
        width: 130,
        height: 130,
        alignSelf: 'center',
        justifyContent: 'center',
    },
    productDetails: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Constants.colors.grayBg,
        padding: 6,
        justifyContent: 'space-between',
    },
    leftText: {
        width: 90,
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 16,
        color: Constants.colors.primary,
    },
    rightText: {
        fontFamily: Constants.fontFamily.PoppinsRegular,
        fontSize: 14,
        color: Constants.colors.primary,
    },
    shippingOptionHeading: {
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.PoppinsBold,
        fontSize: 20,
        marginBottom: 12,
        marginTop: 12,
        backgroundColor: '#F9F9F9',
        padding: Constants.padding,
    },
    shippingOptions: {
        flexDirection: 'row',
        paddingBottom: 10,
    },
    radionButtonIcon: {
        fontWeight: 'bold',
        marginEnd: 12,
        marginTop: 4,
    },
    radionButtonText: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        color: Constants.colors.primary,
        fontSize: 20,
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
    applyCouponContainer: {
        flexDirection: 'row',
        height: 55,
        borderWidth: 2,
        borderColor: Constants.colors.primary,
        marginTop: 12,
        borderRadius: Constants.borderRadius,
    },
    textInput: {
        position: 'absolute',
        left: 12,
        top: 2,
        right: '25%',
    },
    btnApplyCoupon: {
        position: 'absolute',
        top: 0,
        right: 0,
        alignSelf: 'flex-end',
        backgroundColor: Constants.colors.primary,
        height: 51,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 155,
    },
    priceDetailsSection: {
        flexDirection: 'row',
        marginTop: 12,
    },
    leftTextPrice: {
        width: '60%',
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.PoppinsBold,
        fontSize: 16,
    },
    rightTextPrice: {
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 16,
    },
    card: {
        padding: Constants.padding,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: Constants.borderRadius,
        borderWidth: 1,
        marginTop: 12,
    },
    dropPoint: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        fontSize: 16,
        color: Constants.colors.primary,
    },
    bold: {
        fontWeight: 'bold',
    },
})

export default Payment