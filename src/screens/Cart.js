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

const Cart = (props) => {
    const [shippingOption, setShippingOption] = useState('')
    const refRBSheet = useRef()
    const navigation = useNavigation()
    const handelShippingOption = (shippingOption) => {

        setShippingOption(shippingOption)

        refRBSheet.current.open()

    }
    if (shippingOption == 'pickup-selected' || shippingOption == 'delevery-selected') {

        refRBSheet.current.close()

    }
    const applyCoupon = () => {

    }
    const proceedToPay = () => {
        navigation.navigate('Payment')
    }
    return (
        <View style={{ flex: 1, backgroundColor: Constants.colors.white, }}>
            <CustomAppBar title={'Cart'} navigation={props.navigation} />
            <ScrollView style={{ flex: 1, }}>
                <Text style={styles.shippingOptionHeading}>Items In Cart</Text>
                <View style={styles.productCard}>
                    <View style={[styles.pname, { flexDirection: 'row', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, }]}>
                        <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Nike Casual Shoe </Text>
                        <Fontisto name="trash" color={Constants.colors.white} size={16} style={{ margin: 0, backgroundColor: Constants.colors.red, padding: 10, }} />
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
                <Text style={styles.shippingOptionHeading}>Shipping Option</Text>
                <View style={{ padding: Constants.padding }}>
                    <View style={styles.shippingOptions}>
                        <Pressable onPress={() => handelShippingOption('pickup')} style={styles.shippingOptions}>
                            {
                                shippingOption == 'pickup-selected' ? <Fontisto name='radio-btn-active' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} /> : <Fontisto name='radio-btn-passive' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} />
                            }
                            <Text style={styles.radionButtonText}>Pick Up</Text>
                        </Pressable>
                    </View>
                    {
                        shippingOption == 'pickup-selected' ? (
                            <View>
                                <View style={[styles.productCard, { marginStart: 0, marginRight: 0 }]}>
                                    <View style={[styles.pname, { flexDirection: 'row', alignItems: 'center', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, justifyContent: 'space-between', }]}>
                                        <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Drop Point </Text>
                                    </View>
                                    <View>
                                        <View style={{ flex: 1, justifyContent: 'space-between', padding: Constants.padding, }}>
                                            <View style={styles.addressDetails}>
                                                <Text style={styles.leftTextAddress}>Address</Text>
                                                <Text style={styles.rightTextAddress}>Block C, Time Square</Text>
                                            </View>
                                            <View style={styles.addressDetails}>
                                                <Text style={styles.leftTextAddress}></Text>
                                                <Text style={[styles.rightTextAddress, {}]}>Top Floor, World Trade Center</Text>
                                            </View>
                                            <View style={styles.addressDetails}>
                                                <Text style={styles.leftTextAddress}>ZIP Code</Text>
                                                <Text style={styles.rightTextAddress}>10001</Text>
                                            </View>
                                            <View style={styles.addressDetails}>
                                                <Text style={styles.leftTextAddress}>City</Text>
                                                <Text style={styles.rightTextAddress}>New York</Text>
                                            </View>
                                            <View style={[styles.addressDetails, {}]}>
                                                <Text style={styles.leftTextAddress}>State</Text>
                                                <Text style={styles.rightTextAddress}>New York</Text>
                                            </View>
                                            <View style={[styles.addressDetails, {}]}>
                                                <Text style={styles.leftTextAddress}>Country</Text>
                                                <Text style={styles.rightTextAddress}>United State</Text>
                                            </View>
                                            <View style={[styles.addressDetails, { borderBottomWidth: 0, paddingBottom: 0, }]}>
                                                <Text style={styles.leftTextAddress}>Distance</Text>
                                                <Text style={styles.rightTextAddress}>2.5 Miles</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        ) : <View></View>
                    }
                    <View style={{}}>
                        <Pressable onPress={() => handelShippingOption('delevery')} style={styles.shippingOptions}>
                            {
                                shippingOption == 'delevery-selected' ? <Fontisto name='radio-btn-active' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} /> : <Fontisto name='radio-btn-passive' size={20} style={styles.radionButtonIcon} color={Constants.colors.primary} />
                            }
                            <Text style={styles.radionButtonText}>Delivery</Text>
                        </Pressable>
                        {
                            shippingOption == 'delevery-selected' ? (
                                <View>
                                    <View style={[styles.productCard, { marginStart: 0, marginRight: 0 }]}>
                                        <View style={[styles.pname, { flexDirection: 'row', alignItems: 'center', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, justifyContent: 'space-between', }]}>
                                            <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Address </Text>
                                        </View>
                                        <View>
                                            <View style={{ flex: 1, justifyContent: 'space-between', padding: Constants.padding, }}>
                                                <View style={styles.addressDetails}>
                                                    <Text style={styles.leftTextAddress}>Address</Text>
                                                    <Text style={styles.rightTextAddress}>Block C, Time Square</Text>
                                                </View>
                                                <View style={styles.addressDetails}>
                                                    <Text style={styles.leftTextAddress}></Text>
                                                    <Text style={[styles.rightTextAddress, {}]}>Top Floor, World Trade Center</Text>
                                                </View>
                                                <View style={styles.addressDetails}>
                                                    <Text style={styles.leftTextAddress}>ZIP Code</Text>
                                                    <Text style={styles.rightTextAddress}>10001</Text>
                                                </View>
                                                <View style={styles.addressDetails}>
                                                    <Text style={styles.leftTextAddress}>City</Text>
                                                    <Text style={styles.rightTextAddress}>New York</Text>
                                                </View>
                                                <View style={[styles.addressDetails, {}]}>
                                                    <Text style={styles.leftTextAddress}>State</Text>
                                                    <Text style={styles.rightTextAddress}>New York</Text>
                                                </View>
                                                <View style={[styles.addressDetails, {}]}>
                                                    <Text style={styles.leftTextAddress}>Country</Text>
                                                    <Text style={styles.rightTextAddress}>United State</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            ) : <View></View>
                        }
                    </View>
                    <View style={styles.applyCouponContainer}>
                        <TextInput style={styles.textInput} placeholder={'Enter Coupon Code'} />
                        <Pressable onPress={applyCoupon} style={styles.btnApplyCoupon}>
                            <Text style={styles.btnText}>Apply Coupon</Text>
                        </Pressable>
                    </View>
                </View>
                <Text style={styles.shippingOptionHeading}>Payment</Text>
                <View style={{ padding: Constants.padding, paddingBottom: 0, }}>
                    <View style={{ marginTop: -20, }}>
                        <View style={styles.priceDetailsSection}>
                            <Text style={styles.leftTextPrice}>Total Price</Text>
                            <Text style={styles.rightTextPrice}>$150</Text>
                        </View>
                        <View style={styles.priceDetailsSection}>
                            <Text style={styles.leftTextPrice}>Discount</Text>
                            <Text style={styles.rightTextPrice}>$0</Text>
                        </View>
                        <View style={styles.priceDetailsSection}>
                            <Text style={styles.leftTextPrice}>Tax</Text>
                            <Text style={styles.rightTextPrice}>$15</Text>
                        </View>
                        <View style={styles.priceDetailsSection}>
                            <Text style={styles.leftTextPrice}>VAT</Text>
                            <Text style={styles.rightTextPrice}>$12</Text>
                        </View>
                        <View style={[styles.priceDetailsSection, { borderBottomWidth: 0, }]}>
                            <Text style={[styles.leftTextPrice, { fontFamily: Constants.fontFamily.PoppinsBold, }]}>Grand Total</Text>
                            <Text style={[styles.rightTextPrice, { fontFamily: Constants.fontFamily.PoppinsBold, }]}>$177</Text>
                        </View>
                    </View>
                    <Pressable onPress={proceedToPay} style={[styles.button, { width: '100%', padding: 18, marginTop: 30, }]}>
                        <Text style={[styles.btnText, { fontSize: 24, }]}>Proceed To Pay</Text>
                    </Pressable>
                </View>
            </ScrollView>
            <RBSheet
                ref={refRBSheet}
                height={450}
                openDuration={250}
                customStyles={{
                    container: {
                        padding: Constants.padding,
                    }
                }}>
                {
                    shippingOption == 'pickup' ? <PickUpComponent handelShippingOption={handelShippingOption} /> : <DeliveryComponent handelShippingOption={handelShippingOption} />
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
    },
    addressDetails: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: Constants.colors.grayBg,
        padding: 6,
        justifyContent: 'space-between',
    },
    leftText: {
        width: 55,
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 16,
        color: Constants.colors.primary,
        marginLeft: 15,
    },
    leftTextAddress: {
        fontFamily: Constants.fontFamily.PoppinsSemiBold,
        fontSize: 16,
        color: Constants.colors.primary,
    },
    rightText: {
        fontFamily: Constants.fontFamily.PoppinsRegular,
        fontSize: 18,
        color: Constants.colors.primary,
    },
    rightTextAddress: {
        fontFamily: Constants.fontFamily.PoppinsRegular,
        fontSize: 14,
        color: Constants.colors.primary,
    },
    shippingOptionHeading: {
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.PoppinsBold,
        fontSize: 20,
        marginBottom: 12,
        marginTop: 25,
        backgroundColor: '#F9F9F9',
        padding: Constants.padding,
    },
    shippingOptions: {
        flexDirection: 'row',
        marginBottom: 8,
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
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        borderBottomColor: Constants.colors.grayBg,
        paddingBottom: 5,
    },
    leftTextPrice: {
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.Poppins,
        fontSize: 16,
    },
    rightTextPrice: {
        color: Constants.colors.primary,
        fontFamily: Constants.fontFamily.Poppins,
        fontSize: 16,
    },
})

export default Cart