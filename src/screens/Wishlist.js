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

const Wishlist = (props) => {
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
    
    const navigation = useNavigation()
    return (
        <View showsVerticalScrollIndicator={false}>
            <CustomAppBar navigation={navigation} title="Wishlist" />
            <ScrollView style={{backgroundColor: Constants.colors.white,}}>
                <FlatList
                    columnWrapperStyle={{justifyContent: 'space-between'}}
                    style={{ padding: Constants.padding, marginBottom: 120, }}
                    data={products}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={item => item?.id?.toString()}
                    renderItem={(item) => <ProductCard product={item} navigation={props.navigation} wishlist={true} />}
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
export default Wishlist