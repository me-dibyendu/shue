import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Pressable
} from 'react-native'
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'

const ResellerRequest = (props) => {
  const request = [
    { 'id': 1, },
    { 'id': 2, },
    { 'id': 3, },
    { 'id': 4, },
    { 'id': 5, },
  ]
  const chatToReseller = () => {

  }
  const _renderitem = () => {
    return (
      <View style={styles.productCard}>
        <Text style={styles.pname}>Nike Casual Shoe</Text>
        <View style={{ flexDirection: 'row', }}>
          <Image source={Images.productFour} style={styles.productImg} />
          <View style={{ marginTop: 12, justifyContent: 'center', }}>
            <View style={styles.productDetails}>
              <Text style={styles.leftText}>Quantity</Text>
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
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable onPress={chatToReseller} style={[styles.button,{backgroundColor: '#C1C1C1'}]}><Text style={[styles.btnText, { color: Constants.colors.primary}]}>Reject</Text></Pressable>
          <Pressable onPress={chatToReseller} style={styles.button}><Text style={styles.btnText}>Accept</Text></Pressable>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, }}>
      <CustomAppBar navigation={props.navigation} title={'Request'} reseller={true} />
      <FlatList
        data={request}
        keyExtractor={item => item?.id?.toString()}
        renderItem={_renderitem} />
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    margin: Constants.margin,
    padding: Constants.padding,
    backgroundColor: Constants.colors.white,
    elevation: 5,
    borderRadius: Constants.borderRadius,
  },
  pname: {
    backgroundColor: Constants.colors.primary,
    padding: 8,
    color: Constants.colors.white,
    fontFamily: Constants.fontFamily.PoppinsSemiBold,
    fontSize: 18,
  },
  productImg: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  productDetails: {
    flexDirection: 'row',
  },
  leftText: {
    width: 90,
    fontFamily: Constants.fontFamily.PoppinsSemiBold,
    fontSize: 16,
    color: Constants.colors.primary,
    marginLeft: 15,
  },
  rightText: {
    fontFamily: Constants.fontFamily.PoppinsRegular,
    fontSize: 18,
    color: Constants.colors.primary,
  },
  button: {
    padding: 10,
    backgroundColor: Constants.colors.primary,
    borderRadius: Constants.borderRadius,
    marginBottom: 12,
    marginTop: 12,
    flex: 0.48,
  },
  btnText: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: Constants.colors.white,
    alignSelf: 'center',
    fontSize: 13,
  },

});

export default ResellerRequest
