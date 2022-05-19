import React from 'react';
import {
    View,
    Text,
    Image,
    FlatList,
    StyleSheet,
    Pressable,
    ScrollView
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import CustomAppBar from '../components/CustomAppBar'
import ProductCard from '../components/products/ProductCard'
import Constants from '../shared/Constants'

const ProductList = (props) => {
    const products = [
        {
            id: 'image-slider-item-one',
            image: require('../assets/images/product/product-one.png'),
            title: 'Fast Running Green Shoes',
        },
        {
            id: 'image-slider-item-two',
            image: require('../assets/images/product/product-two.png'),
            title: 'Fast Running Green',
        },
        {
            id: 'image-slider-item-three',
            image: require('../assets/images/product/green-shoe-image-three.png'),
            title: 'Fast Running Green',
        },
        {
            id: 'image-slider-item-four',
            image: require('../assets/images/product/product-one.png'),
            title: 'Fast Running Green',
        },
        {
            id: 'image-slider-item-five',
            image: require('../assets/images/product/product-two.png'),
            title: 'Fast Running',
        },
        {
            id: 'image-slider-item-six',
            image: require('../assets/images/product/green-shoe-image-three.png'),
            title: 'Sporty Shoes',
        },
    ]
    const categories = [
        {
            id: 1,
            image: require('../assets/images/category/shoe.png'),
            title: 'Shoes',
        },
        {
            id: 2,
            image: require('../assets/images/category/sunglass.png'),
            title: 'Sunglass',
        },
        {
            id: 3,
            image: require('../assets/images/category/watch.png'),
            title: 'Watch',
        },
        {
            id: 4,
            image: require('../assets/images/category/backpack.png'),
            title: 'Backpack',
        },
    ]
    const navigation = useNavigation()
    const _rendereritem = ({ item }) => {
        return (
            <Pressable style={{marginBottom: 25,}}>
                <View style={{...styles.categoryIcon,elevation: 10, marginStart: 8, marginTop: 4,}}>
                    <Image source={item.image} style={{ width: 48, height: 48, resizeMode: 'contain' }} />
                </View>
                <Text style={{ color: Constants.fontFamily.PoppinsRegular, fontSize: 15, alignSelf: 'center', marginTop: 12, }}>{item.title}</Text>
            </Pressable>
        )
    }
    return (
        <View showsVerticalScrollIndicator={false}>
            <CustomAppBar navigation={navigation} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: Constants.padding, backgroundColor: Constants.colors.white,}}>
                <Text style={{ fontFamily: Constants.fontFamily.RobotoBold, fontSize: 24, color: Constants.colors.primary }}>Our Products</Text>
                <View style={{ flexDirection: 'row', borderWidth: 1, padding: 3, paddingLeft: 10, paddingRight: 10, }}>
                    <AntDesign name="filter" color={Constants.colors.white} style={{ height: 18, width: 18, lineHeight: 18, marginTop: 3, borderRadius: 12, backgroundColor: Constants.colors.primary, textAlign: 'center', marginRight: 6,}} />
                    <Text style={{ fontFamily: Constants.fontFamily.RobotoBold, fontSize: 16, color: Constants.colors.primary }}>Filter</Text>
                </View>
            </View>
            <ScrollView style={{backgroundColor: Constants.colors.white,}}>
                <FlatList
                    style={{ paddingLeft: Constants.padding, paddingRight: Constants.padding+120,}}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categories}
                    keyExtractor={item => item?.id?.toString()}
                    renderItem={_rendereritem}
                />
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style={{ padding: Constants.padding, marginBottom: 120, }}
                    data={products}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item?.id?.toString()}
                    renderItem={(item) => <ProductCard product={item} navigation={props.navigation} />}
                />
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    categoryIcon: {
        marginStart: 10,
        padding: 10,
        marginRight: 13,
        backgroundColor: Constants.colors.white,
        borderRadius: 20,
    }
})
export default ProductList