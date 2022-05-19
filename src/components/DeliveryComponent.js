import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ScrollView
} from 'react-native'
import Constants from '../shared/Constants'
import Fontisto from 'react-native-vector-icons/Fontisto'

function DeliveryComponent(props) {
  const addAddress = () => {

  }
  const seletedAddress = () => {

  }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.heading}>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin }}>
          <Fontisto name='radio-btn-active' color={Constants.colors.primary} size={26} />
          <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 15, color: Constants.colors.primary, marginLeft: 12, }}>Delivery Address</Text>
          <Pressable onPress={addAddress} style={[styles.button, {marginStart: 14,}]}><Text style={styles.btnText}>Add Address</Text></Pressable>
        </View>
      </View>
      <View>
        <View style={styles.productCard}>
          <View style={[styles.pname, { flexDirection: 'row', alignItems: 'center', borderTopLeftRadius: Constants.borderRadius, borderTopRightRadius: Constants.borderRadius, justifyContent: 'space-between', }]}>
            <Text style={{ color: Constants.colors.white, fontSize: 20, fontFamily: Constants.fontFamily.PoppinsMedium, }}>Address </Text>
            <Pressable onPress={()=>props.handelShippingOption('delevery-selected')} style={[styles.button, { backgroundColor: Constants.colors.white, }]}><Text style={[styles.btnText, {color: Constants.colors.primary,}]}>Select</Text></Pressable>
          </View>
          <View>
            <View style={{ flex: 1, justifyContent: 'space-between', padding: Constants.padding, }}>
              <View style={styles.productDetails}>
                <Text style={styles.leftText}>Address</Text>
                <Text style={styles.rightText}>Block C, Time Square</Text>
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.leftText}></Text>
                <Text style={[styles.rightText, {}]}>Top Floor, World Trade Center</Text>
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.leftText}>ZIP Code</Text>
                <Text style={styles.rightText}>10001</Text>
              </View>
              <View style={styles.productDetails}>
                <Text style={styles.leftText}>City</Text>
                <Text style={styles.rightText}>New York</Text>
              </View>
              <View style={[styles.productDetails, {}]}>
                <Text style={styles.leftText}>State</Text>
                <Text style={styles.rightText}>New York</Text>
              </View>
              <View style={[styles.productDetails, {}]}>
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
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Constants.padding,
    paddingRight: Constants.padding,
  },
  productCard: {
    margin: 4,
    backgroundColor: Constants.colors.white,
    elevation: 5,
    borderRadius: Constants.borderRadius,
  },
  pname: {
    backgroundColor: Constants.colors.primary,
    padding: 5,
    paddingStart: 12,
    paddingEnd: 12,
    color: Constants.colors.white,
    fontFamily: Constants.fontFamily.PoppinsSemiBold,
    fontSize: 18,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Constants.padding,
    paddingRight: Constants.padding,
  },
  map: {
    resizeMode: 'contain',
    height: 180,
    borderRadius: Constants.borderRadius,
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
  button: {
    padding: 10,
    backgroundColor: Constants.colors.primary,
    borderRadius: Constants.borderRadius,
    marginBottom: 12,
    marginTop: 12,
    alignSelf: 'center',
  },
  btnText: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: Constants.colors.white,
    alignSelf: 'center',
    fontSize: 18,
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
})
export default DeliveryComponent