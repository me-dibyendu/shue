import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
} from 'react-native'
import Constants from '../../shared/Constants'
import Images from '../../assets/images/Images';
import StarRating from '../StarRating';

function UserReview() {
    const products = [
        {
            id: 'seller-slider-item-one',
        },
        {
            id: 'seller-slider-item-two',
        },
        {
            id: 'seller-slider-item-three',
        },
        {
            id: 'seller-slider-item-four',
        },
        {
            id: 'seller-slider-item-five',
        },
        {
            id: 'seller-slider-item-six',
        },
    ];
    const renderItem = ({ item }) => (

        <View style={styles.review}>
            <Image source={Images.user} style={styles.usserIcon} />
            <View>
                <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, color: '#1A1919', fontSize: 16, marginTop: 12, }}>Somlata Banerjee</Text>
                <StarRating rating={4} />
                <Text style={{fontFamily: Constants.fontFamily.PoppinsLight, fontSize: 14, color: Constants.colors.primary, opacity: 0.5, marginEnd: 20}}>Lorem Ipsum is simply dummy text of the printing and typesetting</Text>
            </View>
        </View>

    );
    return (

        <>
            {products && (
                <FlatList
                    style={{ width: '100%', }}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => item?.id?.toString()}
                    data={products}
                    renderItem={renderItem}
                />
            )}
        </>
    )
}
const styles = StyleSheet.create({
    review: {
        flexDirection: 'row',
    },
    usserIcon: {
        width: 50,
        height: 50,
        marginEnd: Constants.margin,
        marginTop: Constants.margin,
    },
})
export default UserReview