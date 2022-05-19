import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Pressable,
    TextInput,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SliderBox } from 'react-native-image-slider-box'
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import Icon from 'react-native-vector-icons/AntDesign'
import Fa from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import NewReleaseSlider from '../components/home/NewReleaseSlider'
import UserReview from '../components/products/UserReview'
import ProductImages from '../components/products/ProductImages'

const ProductDetails = (props) => {
    const [bannerImgs, setBannerImgs] = useState([])
    const [initialQty, setInitialQty] = useState(1)
    const [selectedColor, setSelectedColor] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const navigation = useNavigation()
    useEffect(() => {
        setBannerImgs(
            [
                require('../assets/images/product/green-shoe-image-one.png'),
                require('../assets/images/product/green-shoe-image-two.png'),
                require('../assets/images/product/green-shoe-image-three.png'),
            ]
        )
    }, [])

    const gotoReseller = () => {

    }
    const chatToreseller = () => {

    }
    const decreaseQty = () => {
        if(initialQty>1)
            setInitialQty(parseInt(initialQty) - 1)

    }
    const increaseQty = () => {

        setInitialQty(parseInt(initialQty) + 1)

    }
    const setQty = (qty)=>{

        setInitialQty(qty)

    }
    const getColor = (color)=>{

        setSelectedColor(color)

    }
    const getSize = (size)=>{

        setSelectedSize(size)

    }
    const addToCart = () => {

    }
    return (
        <View style={{ flex: 1, backgroundColor: Constants.colors.white }}>
            <CustomAppBar navigation={navigation} title="Product Details" />
            <ScrollView style={{}}>
                <View style={{ height: 300, }} >
                    {/* <SliderBox images={bannerImgs} width='92%' dotColor={Constants.colors.whiteColor} inactiveDotColor={Constants.colors.transparent} autoplay circleLoop imageLoadingColor={Constants.colors.transparent} paginationBoxStyle={{ position: 'absolute', bottom: -65 }} dotStyle={{ width: 20, height: 6, borderRadius: 12 }} /> */}
                    <ProductImages />
                </View>
                <View style={{ padding: Constants.padding }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, marginBottom: 12, }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                            <Text style={{ fontSize: 28, color: Constants.colors.primary, fontFamily: Constants.fontFamily.RobotoBold, marginEnd: 6, }}>$</Text>
                            <Text style={{ fontSize: 32, color: Constants.colors.primary, fontFamily: Constants.fontFamily.RobotoBold, }}>300.00</Text>
                        </View>
                        <View style={{ flexDirection: 'row', }}>
                            <Icon name='heart' size={20} style={styles.topLeftIocn} />
                            <Icon name='sharealt' size={20} style={[styles.topLeftIocn, { marginEnd: 0,}]} />
                        </View>
                    </View>
                    <Text style={{ fontFamily: Constants.fontFamily.RobotoBold, fontSize: 22, marginBottom: 7, }}>Nike Air Max 2090</Text>
                    <View style={{ flexDirection: 'row', marginTop: 12, marginBottom: 3, }}>
                        <Icon name='star' size={15} color='#F7C000' />
                        <Icon name='star' size={15} color='#F7C000' />
                        <Icon name='star' size={15} color='#F7C000' />
                        <Icon name='star' size={15} color='#F7C000' />
                        <Icon name='staro' size={15} color='#F7C000' />
                        <Text style={{ marginLeft: 12, fontFamily: Constants.fontFamily.RobotoRegular, marginTop: -3, }}>(4.0)</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 12,  }}>
                        <Feather name="map-pin" size={16} style={{ marginTop: 3, marginRight: 12, }} />
                        <Text style={{ fontFamily: Constants.fontFamily.RobotoBold, fontSize: 16, }}>4.6 Miles</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 12, marginBottom: 12, }}>
                        <Fa name="user" size={16} style={{ marginTop: 3, marginRight: 12, }} />
                        <Pressable onPress={gotoReseller}><Text style={{ fontFamily: Constants.fontFamily.RobotoBold, fontSize: 16, }}>Awesome Shop</Text></Pressable>
                    </View>
                    <View>
                        <View style={{ borderBottomWidth: 5, borderBottomColor: '#706f6f', marginBottom: 24, marginTop: 12, alignSelf: 'baseline' }}>
                            <Text style={{ textTransform: 'uppercase', marginTop: 12, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, }}>Qty</Text>
                        </View>
                        <View style={styles.qtyContainer}>
                            <Pressable onPress={decreaseQty} style={[styles.increaseDecreaseBtn, styles.decreate]}><Text style={styles.increaseDecreaseTxt}>-</Text></Pressable>
                            <TextInput keyboardType='number-pad' style={styles.qtyInput} value={String(initialQty)} name="qty" onChangeText={qty=>setQty(qty)} />
                            <Pressable onPress={increaseQty} style={[styles.increaseDecreaseBtn, styles.increse]}><Text style={styles.increaseDecreaseTxt}>+</Text></Pressable>
                        </View>
                    </View>
                    <View>
                        <View style={{ borderBottomWidth: 5, borderBottomColor: '#706f6f', marginBottom: 24, marginTop: 12, alignSelf: 'baseline' }}>
                            <Text style={{ textTransform: 'uppercase', marginTop: 12, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, }}>Colors</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginRight: 12, marginBottom: 20, }}>
                            <Pressable onPress={()=>getColor('red')} style={{ width: 40, height: 40, borderRadius: 30, backgroundColor: Constants.colors.red, marginRight: 12, borderWidth: 4, borderColor: selectedColor=='red'?'#000000':'transparent' }}></Pressable>
                            <Pressable onPress={()=>getColor('black')} style={{ width: 40, height: 40, borderRadius: 30, backgroundColor: Constants.colors.black, marginRight: 12, borderWidth: 4, borderColor: selectedColor=='black'?'#000000':'transparent' }}></Pressable>
                            <Pressable onPress={()=>getColor('green')} style={{ width: 40, height: 40, borderRadius: 30, backgroundColor: Constants.colors.green, marginRight: 12, borderWidth: 4, borderColor: selectedColor=='green'?'#000000':'transparent' }}></Pressable>
                            <Pressable onPress={()=>getColor('gray')} style={{ width: 40, height: 40, borderRadius: 30, backgroundColor: Constants.colors.grayBg, marginRight: 12, borderWidth: 4, borderColor: selectedColor=='gray'?'#000000':'transparent' }}></Pressable>
                        </View>
                    </View>
                    <View style={{}}>
                        <View style={{ borderBottomWidth: 5, borderBottomColor: '#706f6f', marginBottom: 16, alignSelf: 'baseline' }}>
                            <Text style={{ textTransform: 'uppercase', marginTop: 12, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, }}>Size</Text>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', }}>
                            <Pressable onPress={() => { getSize(6) }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==6?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>6</Text></Pressable>
                            <Pressable onPress={() => { getSize(6.5) }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==6.5?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>6.5</Text></Pressable>
                            <Pressable onPress={() => { getSize(7) }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==7?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>7</Text></Pressable>
                            <Pressable onPress={() => { getSize(7.5)  }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==7.5?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>7.5</Text></Pressable>
                            <Pressable onPress={() => { getSize(8)  }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==8?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>8</Text></Pressable>
                            <Pressable onPress={() => { getSize(8.5)  }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==8.5?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>8.5</Text></Pressable>
                            <Pressable onPress={() => { getSize(9) }} style={{ marginTop: 15, width: 75, height: 75, borderRadius: Constants.borderRadius, borderWidth: 2, borderColor: selectedSize==9?Constants.colors.primary : Constants.colors.border, alignItems: 'center', justifyContent: 'center', }}><Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.primary, fontSize: 20, }}>9</Text></Pressable>
                        </View>
                    </View>
                    <View style={{ borderBottomWidth: 5, borderBottomColor: '#706f6f', marginBottom: 16, marginTop: 16, alignSelf: 'baseline' }}>
                        <Text style={{ textTransform: 'uppercase', marginTop: Constants.padding, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, }}>Product Description</Text>
                    </View>
                    <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 15, }}>Lorem Ipsum some awesome description here about the products and its features</Text>
                    <View style={{ borderBottomWidth: 5, borderBottomColor: '#706f6f', marginBottom: 16, alignSelf: 'baseline' }}>
                        <Text style={{ textTransform: 'uppercase', marginTop: Constants.padding, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, }}>Shipping Policy</Text>
                    </View>
                    <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 15, }}>Lorem Ipsum some awesome description here about the products and its features</Text>
                    <View style={{ borderBottomWidth: 5, borderBottomColor: '#706f6f', marginBottom: 16, alignSelf: 'baseline' }}>
                        <Text style={{ textTransform: 'uppercase', marginTop: Constants.padding, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 20, }}>Return Policy</Text>
                    </View>
                    <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 15, }}>Lorem Ipsum some awesome description here about the products and its features</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: Constants.margin, marginBottom: 0, backgroundColor: Constants.colors.grayBg, paddingTop: 20, paddingBottom: 20, paddingStart: 20, }}>
                    <Image source={Images.box} style={{ width: 28, height: 28, marginRight: 14 }} />
                    <Text style={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.RobotoBold, fontSize: 21, marginLeft: 12, textTransform: 'uppercase', }}>Similar Products</Text>
                </View>
                <View style={{ padding: Constants.padding, paddingEnd: 0, }}>
                    <NewReleaseSlider />
                </View>
                <View style={{ flexDirection: 'row', marginTop: Constants.margin, marginBottom: 0, backgroundColor: Constants.colors.grayBg, paddingTop: 20, paddingBottom: 20, paddingStart: 20, }}>
                    <Image source={Images.reviewIcon} style={{ width: 28, height: 28, marginRight: 14 }} />
                    <Text style={{ color: Constants.colors.primary, fontFamily: Constants.fontFamily.RobotoBold, fontSize: 21, marginLeft: 12, textTransform: 'uppercase', }}>Reviews</Text>
                </View>
                <View style={{ padding: Constants.padding }}>
                    <UserReview />
                </View>
            </ScrollView>
            <View style={styles.buttonContainer}>
                <Pressable onPress={chatToreseller} style={styles.addTocartBtn}><Text style={{ fontFamily: Constants.fontFamily.Roboto, fontSize: 18, color: Constants.colors.primary, }}>Chat To Reseller</Text></Pressable>
                <Pressable onPress={addToCart} style={[styles.addTocartBtn, styles.buyNow]}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.white, fontSize: 18, }}>Buy Now</Text></Pressable>
            </View>
        </View>
    )

}
const styles = StyleSheet.create({
    topLeftIocn: {
        padding: 12,
        backgroundColor: Constants.colors.grayBg,
        borderRadius: Constants.borderRadius,
        marginEnd: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: Constants.padding,
        paddingRight: Constants.padding,
        marginBottom: 12,
    },
    addTocartBtn: {
        flex: 0.48,
        padding: 5,
        paddingTop: 23,
        paddingBottom: 23,
        backgroundColor: '#F9F9F9',
        borderRadius: 6,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#706f6f',
    },
    buyNow: {
        backgroundColor: Constants.colors.primary,
        borderWidth: 0,
    },
    qtyContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 2,
        marginBottom: 16,
        width: '58%',
    },
    increaseDecreaseBtn:{
        backgroundColor: Constants.colors.primary,
        width: '32%',
        padding: 10,
    },
    increaseDecreaseTxt: {
        fontSize: 20,
        fontFamily: Constants.fontFamily.PoppinsBold,
        color: Constants.colors.white,
        alignSelf: 'center',
    },
    qtyInput: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        fontSize: 20,
        width: '15%',
        textAlign: 'center',
    },
})
export default ProductDetails