import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native'
import Constants from '../../shared/Constants'
import Images from '../../assets/images/Images'

function ProductImages() {
  const images = [
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
  const renderItem = ({ item }) => (

    <View style={styles.card}>
      <Image source={Images.productFour} style={styles.pimage} />
    </View>
  );
  return (

    <>
      {images && (
        <FlatList
          style={{ width: '100%', }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item?.id?.toString()}
          data={images}
          renderItem={renderItem}
        />
      )}
    </>
  )
}
const styles = StyleSheet.create({
    card: {
        width: Constants.width,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Constants.colors.background,
        margin: 5,
    },
    pimage: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
    },
})
export default ProductImages