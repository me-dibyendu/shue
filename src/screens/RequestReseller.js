import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Image,
  Pressable,
  Alert,
} from 'react-native'
import Fa from 'react-native-vector-icons/FontAwesome5'
import { useNavigation } from '@react-navigation/native'
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'

const RequestReeller = (props) => {
  const [filterRequet, setFilterRequest] = useState('pending')
  const navigation = useNavigation()
  const request = [
    { 'id': 1, },
    { 'id': 2, },
    { 'id': 3, },
    { 'id': 4, },
    { 'id': 5, },
  ]
  const filterRequest = (request) => {
    setFilterRequest(request)
  }
  const confirmation = ()=>{
    Alert.alert(
      'Confirmation',
      'Do you have enough stock to accept?',
      [
        {
          'text': 'NO',
           onPress: ()=>{console.log(0)},
           style: 'cancel'
        },
        {
          'text': 'YES',
          onPress: ()=>{console.log(0)}
        },
      ]
    )
  }
  const rejectConfirmation = ()=>{
    Alert.alert(
      'Confirmation',
      'Are you sure to reject?',
      [
        {
          'text': 'NO',
           onPress: ()=>{console.log(0)},
           style: 'cancel'
        },
        {
          'text': 'YES',
          onPress: ()=>{console.log(0)}
        },
      ]
    )
  }
  const chatToReseller = () => {

  }
  const _renderitem = () => {
    return (
      <View style={styles.productCard}>
        <Text style={styles.pname}>Nike Casual Shoe</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 12, paddingRight: 12, }}>
          <View style={{ flex: 0.4, }}>
            <Image source={Images.productFour} style={styles.productImg} />
          </View>
          <View style={{ marginTop: 12, flex: 0.5, }}>
            <View style={styles.productDetails}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Qty</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>2</Text>
            </View>
            <View style={styles.productDetails}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Size</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>36</Text>
            </View>
            <View style={styles.productDetails}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Color</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>Black</Text>
            </View>
            <View style={styles.productDetails}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Price</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>$150</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 0, paddingBottom: 0, }}>
          <Pressable style={{ flex: 0.55 }} onPress={rejectConfirmation}>
            <Text style={[styles.msg, { backgroundColor: Constants.colors.red, color: Constants.colors.white, marginBottom: -12 }]}><Fa name='trash' /> Reject</Text>
          </Pressable>
          <Pressable onPress={confirmation} style={[styles.button, { flex: 0.45, }]}><Text style={styles.btnText}>Accept</Text></Pressable>
        </View>
      </View>
    )
  }
  const _rederItemAccepted = () => {
    return (
      <View style={styles.productCard}>
        <Text style={styles.pname}>Nike Casual Shoe</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 12, paddingRight: 12, }}>
          <View style={{ flex: 0.4, }}>
            <Image source={Images.productFour} style={styles.productImg} />
          </View>
          <View style={{ marginTop: 12, flex: 0.5, }}>
            <View style={styles.productDetails}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Qty</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>2</Text>
            </View>
            <View style={styles.productDetails}>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Size</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>36</Text>
            </View>
            <View style={styles.productDetails}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Color</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>Black</Text>
            </View>
            <View style={styles.productDetails}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: 70}}>
                <Text style={styles.leftText}>Price</Text>
                <Text>:</Text>
              </View>
              <Text style={styles.rightText}>$150</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 0, paddingBottom: 0, }}>
          <Pressable style={{ flex: 0.55 }}>
            <Text style={[styles.msg, { backgroundColor: Constants.colors.red, color: Constants.colors.white, marginBottom: -12 }]}><Fa name='trash' /> Remove</Text>
          </Pressable>
          <Pressable onPress={chatToReseller} style={[styles.button, { flex: 0.45, }]}><Text style={styles.btnText}>Add to cart</Text></Pressable>
        </View>
      </View>
    )
  }
  return (
    <View style={{ flex: 1, }}>
      <CustomAppBar navigation={navigation} />
      <View style={{ flexDirection: 'row', padding: Constants.padding, paddingBottom: 0, justifyContent: 'space-between', }}>
        <Pressable onPress={() => filterRequest('pending')} style={{ ...styles.tabOrder, backgroundColor: filterRequet == 'pending' ? Constants.colors.clock : '#FFF', }}><Text style={{ ...styles.tabText, color: filterRequet == 'pending' ? Constants.colors.white : Constants.colors.primary, }}>Pending</Text></Pressable>
        <Pressable onPress={() => filterRequest('accepted')} style={{ ...styles.tabOrder, backgroundColor: filterRequet == 'accepted' ? Constants.colors.clock : '#FFF', }}><Text style={{ ...styles.tabText, color: filterRequet == 'accepted' ? Constants.colors.white : Constants.colors.primary, }}>Accepted</Text></Pressable>
      </View>
      <FlatList
        data={request}
        keyExtractor={item => item?.id?.toString()}
        renderItem={filterRequet == 'pending' ? _renderitem : _rederItemAccepted} />
    </View>
  );
};

const styles = StyleSheet.create({
  tabOrder: {
    padding: 10,
    borderRadius: Constants.borderRadius,
    backgroundColor: Constants.colors.white,
    marginRight: 12,
    height: 80,
    minWidth: '28%',
    marginBottom: Constants.margin + Constants.margin,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0.5,
  },
  tabText: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    fontSize: 17,
  },
  productCard: {
    margin: Constants.margin,
    marginTop: 5,
    backgroundColor: Constants.colors.white,
    elevation: 5,
    borderRadius: Constants.borderRadius,
  },
  pname: {
    backgroundColor: Constants.colors.lightGray,
    padding: 8,
    color: Constants.colors.primary,
    fontFamily: Constants.fontFamily.PoppinsSemiBold,
    fontSize: 18,
  },
  productImg: {
    resizeMode: 'contain',
    width: 130,
    height: 130,
    alignSelf: 'center',
    justifyContent: 'center',
    margin: 10,
    marginRight: 20,
    borderWidth: 1,
    borderColor: '#F1F1F1',
  },
  productDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftText: {
    fontFamily: Constants.fontFamily.PoppinsSemiBold,
    fontSize: 14,
    color: Constants.colors.primary,
    marginLeft: 15,
  },
  spaceFive: {
    width: 6,
  },
  rightText: {
    fontFamily: Constants.fontFamily.PoppinsRegular,
    fontSize: 16,
    color: Constants.colors.primary,
    justifyContent: 'flex-end',
  },
  button: {
    padding: 13,
    backgroundColor: Constants.colors.primary,
    marginTop: 12,
    alignSelf: 'center',
  },
  btnText: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: Constants.colors.white,
    alignSelf: 'center',
    fontSize: 13,
  },
  msg: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: '#705a09',
    backgroundColor: '#ffe996',
    fontSize: 13,
    padding: 13.2,
    textAlign: 'center',
  },
  info: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: '#705a09',
    backgroundColor: '#ffe996',
    fontSize: 13,
    alignItems: 'center',
    textAlign: 'center',
  },
});

export default RequestReeller