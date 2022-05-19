import React from 'react';
import { FlatList, Image, StyleSheet, Text, View, ImageBackground } from 'react-native';
import Constants from '../../shared/Constants';
import StarRating from '../StarRating';
import Icon from 'react-native-vector-icons/Feather'
import Images from '../../assets/images/Images';

const TopSellerSlider = () => {
  const sellerList = [
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

  const renderItem = ({ item, index }) => (
    <View style={{flexDirection: 'row'}}>
      {
        index==0?<View style={{width: Constants.padding, height: '100%', backgroundColor: Constants.colors.white}}></View>:null
      }
      <ImageBackground
        imageStyle={{ borderRadius: 10 }}
        style={styles.bgImage}
        source={Images.cardBg}>
        <View style={[styles.card, { backgroundColor: item?.backgroundColor }]}>
          <View style={styles.cardleft}>
            <Image source={Images.check} />
            <Text style={styles.logoText}>RC</Text>
          </View>
          <View style={styles.cardRight}>
            <Text style={styles.rightChoice}>Right Choice</Text>
            <Text style={{ fontSize: 20, fontFamily: Constants.fontFamily.PoppinsRegular, color: Constants.colors.white, }}>Shop</Text>
            <View style={{ flexDirection: 'row', }}>
              <StarRating rating={4} /><Text style={{ color: Constants.colors.white, fontFamily: Constants.fontFamily.Poppins, marginLeft: 12, }}>4.0</Text>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Icon name='map-pin' size={18} color={Constants.colors.white} style={{ marginTop: 2, marginRight: 4, }} />
              <Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.white }}>1.0 Miles</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              <Image source={Images.category} style={{ marginTop: 4, marginRight: 9, width: 12, height: 12, marginLeft: 2 }} />
              <Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.white }}>Casual Shoes</Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
  return (
    <>
      {sellerList && (
        <View>
          <FlatList
            showsHorizontalScrollIndicator={false}
            initialNumToRender={1}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={sellerList}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  bgImage: {
    marginHorizontal: 4,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  card: {
    width: '100%',
    backgroundColor: Constants.colors.peru,
    borderRadius: 5,
    padding: Constants.padding,
    flexDirection: 'row',
  },
  cardleft: {
    borderWidth: 2,
    borderColor: Constants.colors.white,
    borderRadius: Constants.borderRadius,
    padding: 0,
    paddingTop: 18,
    alignItems: 'center',
    width: 155,
    marginRight: Constants.margin,
  },
  logoText: {
    fontFamily: Constants.fontFamily.PoppinsBold,
    color: Constants.colors.white,
    fontSize: 54,
  },
  cardRight: {
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  rightChoice: {
    fontSize: 22,
    fontFamily: Constants.fontFamily.PoppinsSemiBold,
    color: Constants.colors.white,
  },
});

export default TopSellerSlider;