import React from 'react'
import {
    View,
    Text,
    Image,
    StyleSheet,
    FlatList,
    Pressable,
} from 'react-native'
import Images from '../../assets/images/Images'
import Constants from '../../shared/Constants'

const Trades = () => {
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
    ]
    const _renderItem = (item) => {
        const acceptTrade = ()=>{

        }
        const rejectTrade =()=>{

        }
        return (
            <View style={styles.card}>
                <View style={{alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row',flex: 1,}}>
                    <View style={styles.imgSection}>
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}></View>
                            <Image source={Images.productTwo} style={styles.cardImg} />
                        </View>
                    </View>
                    <View style={styles.tradesection}>
                        <Image source={Images.tradeIcon} />
                        <Text style={{fontFamily: Constants.fontFamily.PoppinsMedium}}>Trade</Text>
                    </View>
                    <View style={styles.imgSection}>
                        <View style={styles.outerCircle}>
                            <View style={styles.innerCircle}></View>
                            <Image source={Images.productThree} style={styles.cardImg} />
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, justifyContent: 'flex-end', flexDirection: 'row', marginTop: 12,}}>
                    <Pressable onPress={rejectTrade} style={{...styles.btnAccept,backgroundColor: '#C1C1C1'}}><Text style={{...styles.btnText, color: Constants.colors.primary}}>Reject</Text></Pressable>
                    <Pressable onPress={acceptTrade} style={styles.btnAccept}><Text style={styles.btnText}>Accept</Text></Pressable>
                </View>
            </View>
        )
    }
    return (
        <FlatList
            style={{ width: '100%' }}
            horizontal={false}
            showsVerticalScrollIndicator={false}
            data={recentOrders}
            keyExtractor={item => item?.id?.toString()}
            renderItem={_renderItem}
        />
    )
}
const styles = StyleSheet.create({
    card: {
        margin: Constants.margin,
        padding: Constants.padding,
        shadowOffset: { width: 0, height: 4 },
        shadowColor: Constants.colors.primary,
        shadowOpacity: 0.1,
        elevation: 4,
        backgroundColor: Constants.colors.white,
        borderRadius: Constants.borderRadius,
        width: Constants.width - Constants.padding - 18,
    },
    imgSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: Constants.padding-10,
        backgroundColor: Constants.white,
        borderRadius: Constants.borderRadius,
        borderWidth: 1,
        borderColor: '#D1D1D1'
    },
    outerCircle:{
        width: 100,
        height: 100,
        backgroundColor: '#D1D1D1',
        borderRadius: 100,
    },
    innerCircle: {
        width: 90,
        height: 90,
        backgroundColor: Constants.colors.white,
        borderRadius: 100,
        position: 'absolute',
        left: 5,
        top: 5,
    },
    cardImg: {
        width: 90,
        height: 90,
        resizeMode: 'contain',
    },
    btnAccept: {
        padding: 6,
        paddingStart: Constants.padding,
        paddingEnd: Constants.padding,
        backgroundColor: Constants.colors.primary,
        borderRadius: Constants.borderRadius,
        marginLeft: 12,
    },
    btnText: {
        fontFamily: Constants.fontFamily.PoppinsMedium,
        color: Constants.colors.white,
        fontSize: 18,
        alignSelf: 'center',
    },
    btnReject: {
        backgroundColor: '#F9F9F9'
    },
    btnTextReject: {
        color: Constants.colors.primary,
    },
})
export default Trades