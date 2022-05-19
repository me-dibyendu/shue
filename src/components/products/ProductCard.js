import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Constants from '../../shared/Constants';
import StarRating from '../StarRating';

const ProductCard = ({ product, navigation, wishlist }) => {
  const gotoProductDetails = () => {
    navigation.navigate('ProductDetails')
  }
  const gotoStore = ()=>{

  }
  return (
    <Pressable style={styles.cardContainer} onPress={gotoProductDetails}>
      <View style={styles.card}>
        <View style={styles.cardTop}>
          {
            wishlist?<AntDesign name='heart' size={24} style={[styles.favourite, {color: Constants.colors.secondary}]} />:<AntDesign name='hearto' size={24} style={styles.favourite} />
          }
          <Image source={product.item.image} style={styles.productImg} />
        </View>
        <View style={styles.productName}>
          <Text style={styles.pname}>
            {
              product.item.title.length>15?`${product.item.title.substring(0,15)}...`:product.item.title
            }
            </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', }}>
          <Text style={styles.dollarIcon}>$</Text>
          <Text style={styles.price}>300.00</Text>
        </View>
        <View style={styles.rattings}>
          <StarRating rating={4} /><Text style={{marginLeft: 8}}>(4.0)</Text>
        </View>
        <View style={styles.rattings}>
          <AntDesign name='enviromento' size={18} style={{marginTop: 2, marginRight: 6,}} />
          <Text>3.6 Miles</Text>
        </View>
        <View style={styles.rattings}>
          <AntDesign name='user' size={18} style={{marginTop: 1, marginRight: 6,}}  />
          <Pressable opPress={gotoStore}><Text style={{fontFamily: Constants.fontFamily.RobotoBold}}>Sport Place</Text></Pressable>
        </View>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    flex:0.49, 
  },
  card: {
    borderWidth: 2,
    borderColor: '#EDEDED',
    padding: 8,
    backgroundColor: Constants.colors.white,
    borderRadius: Constants.borderRadius,
  },
  cardTop: {
    backgroundColor: Constants.colors.grayBg,
    padding: 8,
  },
  favourite: {
    flex: 1,
    alignSelf: 'flex-end',
  },
  productImg: {
    resizeMode: 'contain',
    alignSelf: 'center',
    width: 100,
    height: 100,
  },
  productName: {
    minHeight: 22,
  },
  pname: {
    marginTop: 10,
    fontFamily: Constants.fontFamily.Poppins,
    fontSize: 18,
    color: Constants.colors.primary,
  },
  dollarIcon: {
    color: Constants.colors.primary,
    fontFamily: Constants.fontFamily.RobotoBold,
    fontSize: 20,
    marginRight: 3,
  },
  price: {
    color: Constants.colors.primary,
    fontFamily: Constants.fontFamily.RobotoBold,
    fontSize: 22,
    marginTop: 5,
    marginBottom: 5,
  },
  rattings: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5,
  },
})
export default ProductCard