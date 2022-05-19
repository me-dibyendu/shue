import React from 'react';
import { FlatList, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Constants from '../../shared/Constants';

function BrandSlider() {
  const brands = [
    {
      id: 'brand-slider-item-one',
      name: 'Adidas',
      image: require('../../assets/images/brand/adidas.png'),
    },
    {
      id: 'brand-slider-item-two',
      name: 'Puma',
      image: require('../../assets/images/brand/puma-logo-wallpaper.jpg'),
    },
    {
      id: 'brand-slider-item-three',
      name: 'Nike',
      image: require('../../assets/images/brand/nike.jpg'),
    },
    {
      id: 'brand-slider-item-four',
      name: 'Bata',
      image: require('../../assets/images/brand/bata-logo.jpg'),
    },
  ];

  const renderItem = ({ item, index }) => (
    <View style={{flexDirection: 'row',}}>
      {
        index==0?<View style={{width: Constants.padding, height: '100%', backgroundColor: Constants.colors.white}}></View>:null
      }
      <View style={{ width: 100, marginRight: Constants.margin, justifyContent: 'center', alignItems: 'center', }}>
        <View style={styles.card}>
          <ImageBackground
            style={styles.image}
            imageStyle={{ borderRadius: 10 }}
            resizeMode={'cover'}
            source={item?.image}
          />
        </View>
        <View style={styles.titleSection}>
          <Text style={styles.title}>{item?.name}</Text>
        </View>
      </View>
    </View>
  );

  return (
    <>
      {brands && (
        <View style={{ marginVertical: 10 }}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            initialNumToRender={4}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={brands}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    width: '100%',
    height: 80,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: Constants.colors.transparent,
  },
  image: {
    width: '100%',
    height: 80,
  },
  titleSection: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
  },
  title: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    fontSize: 13,
    color: Constants.colors.black,
  },
});

export default BrandSlider;
