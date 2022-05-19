import React from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
} from 'react-native'
import Constants from '../../shared/Constants'
import VideoPlayer from 'react-native-video-player'
import Images from '../../assets/images/Images';

function SortBySize() {
  const products = [
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
      <Image source={Images.productTwo} />
      <Text style={{ fontFamily: Constants.fontFamily.PoppinsRegular, fontSize: 13, marginTop: 12, }}>Size (28)</Text>
    </View>

  );
  return (

    <>
      {products && (
        <FlatList
          style={{ width: '100%', }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item?.id?.toString()}
          data={products}
          renderItem={renderItem}
        />
      )}
    </>
  )
}
const styles = StyleSheet.create({
  card: {
    width: 122,
    height: 119,
    padding: Constants.padding,
    backgroundColor: '#DBEBF8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: Constants.borderRadius,
    marginRight: 12,
    marginBottom: Constants.margin,
  }
})
export default SortBySize