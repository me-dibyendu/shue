import React from 'react'
import {FlatList, View} from 'react-native'
import NewReleaseSliderItem from './NewReleaseSliderItem'

function NewReleaseSlider() {
  const products = [
    {
      id: 'product-slider-item-one',
      image: require('../../assets/images/shoes/image-one.png'),
    },
    {
      id: 'product-slider-item-two',
      image: require('../../assets/images/shoes/image-two.png'),
    },
    {
      id: 'product-slider-item-three',
      image: require('../../assets/images/shoes/image-three.png'),
    },
    {
      id: 'product-slider-item-four',
      image: require('../../assets/images/shoes/image-one.png'),
    },
    {
      id: 'product-slider-item-five',
      image: require('../../assets/images/shoes/image-two.png'),
    },
    {
      id: 'product-slider-item-six',
      image: require('../../assets/images/shoes/image-three.png'),
    },
  ];
  const renderItem = ({item, index}) => <NewReleaseSliderItem item={item} index={index} />;
  return (
    <>
      {products && (
        <View style={{marginVertical: 10}}>
          <FlatList
            style={{width: '100%'}}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={3}
            horizontal={true}
            keyExtractor={item => item?.id?.toString()}
            data={products}
            renderItem={renderItem}
          />
        </View>
      )}
    </>
  )
}

export default NewReleaseSlider
