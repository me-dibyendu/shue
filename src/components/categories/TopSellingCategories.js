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

function TopSellingCategories(){
    const categories = [
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
            <Image source={Images.productOne} />
            <Text style={{fontFamily: Constants.fontFamily.PoppinsRegular, fontSize: 13, marginTop: 12,}}>Formal Shoes</Text>
        </View>
    
      );
    return (

        <>
      {categories && (
        <FlatList
          style={{ width: '100%', }}
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          keyExtractor={item => item?.id?.toString()}
          data={categories}
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
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: Constants.borderRadius,
        marginRight: 12,
        marginBottom: Constants.margin,
    }
})
export default TopSellingCategories