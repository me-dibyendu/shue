import React from 'react';
import {
    FlatList,
    Image,
    ImageBackground,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import Constatnts from '../../shared/Constants';
import StarRating from '../StarRating';
import Icon from 'react-native-vector-icons/Feather';
import Images from '../../assets/images/Images';

function ResellerSlider() {
    const sellerList = [
        {
            id: 'seller-slider-item-one',
            backgroundColor: 'rgba(225,131,69,0.7)',
        },
        {
            id: 'seller-slider-item-two',
            backgroundColor: 'rgba(80,71,33,0.7)',
        },
        {
            id: 'seller-slider-item-three',
            backgroundColor: 'rgba(236, 79, 60, 0.7)',
        },
        {
            id: 'seller-slider-item-four',
            backgroundColor: 'rgba(225,131,69,0.7)',
        },
        {
            id: 'seller-slider-item-five',
            backgroundColor: 'rgba(110, 99, 53, 0.7)',
        },
        {
            id: 'seller-slider-item-six',
            backgroundColor: 'rgba(236, 79, 60, 0.7)',
        },
    ];

    const _renderItem = ({ item, index }) => (
        <View style={{flexDirection: 'row',}}>
            {
                index == 0 ? <View style={{ width: Constatnts.padding, flex: 1, backgroundColor: Constatnts.colors.white }}></View> : <View></View>
            }
            <ImageBackground
                imageStyle={{ borderRadius: 5 }}
                style={styles.bgImage}
                source={Images.cardBg}>
                <View style={[styles.card, { backgroundColor: item?.backgroundColor }]}>
                    <View style={styles.cardleft}>
                        <Text style={{ fontFamily: Constatnts.fontFamily.RobotoBold, color: Constatnts.colors.white, fontSize: 50, marginBottom: 0, marginTop: -10, }}>AS</Text>
                        <Image source={Images.shoeIconWhite} style={{ width: 62, height: 62, marginTop: 26, }} />
                    </View>
                    <View style={styles.cardRight}>
                        <Text style={{ fontSize: 22, color: Constatnts.colors.white, fontFamily: Constatnts.fontFamily.RobotoBold, letterSpacing: 1 }}>Awesome Shoe</Text>
                        <Text style={{ fontSize: 20, color: Constatnts.colors.white, fontFamily: Constatnts.fontFamily.RobotoRegular }}>Shop</Text>
                        <View style={{ marginTop: 12, }}>
                            <StarRating rating={4} />
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 12, }}>
                            <Icon name='map-pin' size={18} color={Constatnts.colors.white} style={{ marginTop: 2, marginRight: 4, }} />
                            <Text style={{ fontFamily: Constatnts.fontFamily.RobotoRegular, color: Constatnts.colors.white }}>1.0 Miles</Text>
                        </View>
                        <View style={{ flexDirection: 'row', marginTop: 12, }}>
                            <Image source={Images.category} size={18} style={{ marginTop: 2, marginRight: 4, width: 14, height: 14, }} />
                            <Text style={{ fontFamily: Constatnts.fontFamily.RobotoRegular, color: Constatnts.colors.white, marginLeft: 5, }}>Casual Shoes</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </View>

    );
    return (
        <>
            {sellerList && (
                <View style={{ marginVertical: 5, marginBottom: 20, }}>
                    <FlatList
                        style={{ width: '100%', }}
                        initialNumToRender={3}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        keyExtractor={item => item?.id?.toString()}
                        data={sellerList}
                        renderItem={_renderItem}
                    />
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    bgImage: {
        marginHorizontal: 4,
        resizeMode: 'contain',
    },
    card: {
        width: '100%',
        backgroundColor: Constatnts.colors.peru,
        borderRadius: 5,
        padding: 12,
        paddingBottom: 16,
        flexDirection: 'row',
    },
    cardRight: {
        marginLeft: 30,
    },
});

export default ResellerSlider