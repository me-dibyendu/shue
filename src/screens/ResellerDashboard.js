import React from 'react'
import {
    View,
    Text,
    Image,
    ScrollView,
    StyleSheet,
    Pressable,
} from 'react-native'
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import Icon from 'react-native-vector-icons/AntDesign'
import RecentOrders from '../components/dashboard/RecentOrders'
import DeliveredOrders from '../components/dashboard/DeliveredOrders'
import Trades from '../components/dashboard/Trade'

const ResellerDashboard = (props) => {
    const recentOrder = () => {

    }
    return (
        <View style={{ marginBottom: Constants.margin + 60, backgroundColor: Constants.colors.white, }}>
            <CustomAppBar navigation={props.navigation} reseller={true} />
            <ScrollView>
                <View style={styles.heading}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Image source={Images.reviewIcon} style={{ width: 30, height: 30, marginRight: Constants.margin }} />
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Statistics</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Pressable onPress={recentOrder}><Text style={styles.viewAll}>View All <Icon name='right' size={13} /></Text></Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', padding: Constants.padding, backgroundColor: Constants.colors.primary, margin: 16, borderRadius: 10, }}>
                    <View style={styles.boxContainer}>
                        <View style={styles.dashboardOverview}>
                            <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 35, color: Constants.colors.primary }}>50</Text>
                        </View>
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, marginBottom: Constants.margin, fontSize: 15, paddingLeft: 3, paddingRight: 3, color: Constants.colors.white, textAlign: 'center' }}>Order Received</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.dashboardOverview}>
                            <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 35, color: Constants.colors.primary }}>50</Text>
                        </View>
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, marginBottom: Constants.margin, fontSize: 15, paddingLeft: 3, paddingRight: 3, color: Constants.colors.white, textAlign: 'center' }}>Order Delivered</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.dashboardOverview}>
                            <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 35, color: Constants.colors.primary }}>50</Text>
                        </View>
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, marginBottom: Constants.margin, fontSize: 15, paddingLeft: 3, paddingRight: 3, color: Constants.colors.white, textAlign: 'center' }}>Order Pending</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.dashboardOverview}>
                            <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 35, color: Constants.colors.primary }}>50</Text>
                        </View>
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, marginBottom: Constants.margin, fontSize: 15, paddingLeft: 3, paddingRight: 3, color: Constants.colors.white, textAlign: 'center' }}>Total Order</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.dashboardOverview}>
                            <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 35, color: Constants.colors.primary }}>$500</Text>
                        </View>
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, marginBottom: Constants.margin, fontSize: 15, paddingLeft: 3, paddingRight: 3, color: Constants.colors.white, textAlign: 'center' }}>Total Sales</Text>
                    </View>
                    <View style={styles.boxContainer}>
                        <View style={styles.dashboardOverview}>
                            <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 35, color: Constants.colors.primary }}>$500</Text>
                        </View>
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, marginBottom: Constants.margin, fontSize: 15, paddingLeft: 3, paddingRight: 3, color: Constants.colors.white, textAlign: 'center' }}>Total Sales</Text>
                    </View>
                </View>
                <View style={styles.divider}></View>
                <View style={styles.heading}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Image source={Images.reviewIcon} style={{ width: 30, height: 30, marginRight: Constants.margin }} />
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Recent Orders</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Pressable onPress={recentOrder}><Text style={styles.viewAll}>View All <Icon name='right' size={13} /></Text></Pressable>
                    </View>
                </View>
                <View>
                    <RecentOrders />
                </View>
                <View style={styles.divider}></View>
                <View style={styles.heading}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Image source={Images.reviewIcon} style={{ width: 30, height: 30, marginRight: Constants.margin }} />
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Delevered Orders</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Pressable onPress={recentOrder}><Text style={styles.viewAll}>View All <Icon name='right' size={13} /></Text></Pressable>
                    </View>
                </View>
                <View>
                    <DeliveredOrders />
                </View>
                <View style={styles.divider}></View>
                <View style={styles.heading}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Image source={Images.reviewIcon} style={{ width: 30, height: 30, marginRight: Constants.margin }} />
                        <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Trade</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
                        <Pressable onPress={recentOrder}><Text style={styles.viewAll}>View All <Icon name='right' size={13} /></Text></Pressable>
                    </View>
                </View>
                <View>
                    <Trades />
                </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    boxContainer: {
        width: 100,
    },
    dashboardOverview: {
        padding: 0,
        width: 100,
        height: 100,
        borderRadius: Constants.borderRadius,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        shadowOffset: { width: 4, height: 4 },
        shadowColor: Constants.colors.primary,
        shadowOpacity: 0.01,
        elevation: 2,
        backgroundColor: Constants.colors.white,
    },
    divider: {
        height: 2,
        backgroundColor: Constants.colors.grayBg,
        marginTop: Constants.margin,
        marginBottom: Constants.margin,
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: Constants.padding,
        paddingRight: Constants.padding,
    },
    viewAll: {
        fontFamily: Constants.fontFamily.Roboto,
        color: Constants.colors.primary,
        fontSize: 13,
    },
})
export default ResellerDashboard