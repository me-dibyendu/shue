import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList
} from 'react-native'
import Images from '../../assets/images/Images'
import Constants from '../../shared/Constants'

const RecentOrders=()=>{
    const recentOrders = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
    ]
    const _renderItem =(item)=>{
        return (
            <View style={styles.card}>
                <View style={styles.leftSide}>
                    <View style={styles.outerCircle}>
                        <View style={styles.innerCircle}></View>
                        <Image source={Images.productOne} style={styles.cardImg} />
                    </View>
                </View>
                <View style={styles.rightSide}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>Order Id</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: #i1234</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>Item Name</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: Sport Shoe</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>SKU</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: 120</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>Color</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: Brown</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>Size</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: XL</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>Price</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: USD $130</Text>
                    </View>
                    <View style={{flexDirection: 'row',}}>
                        <Text style={{fontSize: 12, width: '40%', fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>Date</Text>
                        <Text style={{fontSize: 12, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.primary, justifyContent: 'flex-start'}}>: Fev-25, 2022</Text>
                    </View>
                </View>
            </View>
        )
    }
    return(
        <FlatList
            style={{width: '100%'}}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={recentOrders}
            keyExtractor={item=>item?.id?.toString()}
            renderItem={_renderItem} 
        />
    )
}
const styles = StyleSheet.create({
    card: {
        margin: Constants.margin,
        padding: Constants.padding,
        flexDirection: 'row',
        shadowOffset: { width: 0, height: 4 },
        shadowColor: Constants.colors.primary,
        shadowOpacity: 0.1,
        elevation: 4,
        backgroundColor: Constants.colors.white,
        borderRadius: Constants.borderRadius,
        width: Constants.width-Constants.padding-18,
    },
    leftSide: {
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: Constants.margin,
    },
    outerCircle:{
        width: 120,
        height: 120,
        backgroundColor: '#D1D1D1',
        borderRadius: 100,
    },
    innerCircle: {
        width: 100,
        height: 100,
        backgroundColor: Constants.colors.white,
        borderRadius: 100,
        position: 'absolute',
        left: 10,
        top: 10,
    },
    cardImg: {
        width: 120,
        height: 120,
        resizeMode: 'contain',
    },
    rightSide:{
        marginStart: 18,
    }
})
export default RecentOrders