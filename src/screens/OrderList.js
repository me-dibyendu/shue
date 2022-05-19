import React, { useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import AniDesign from 'react-native-vector-icons/AntDesign'

function OrderList(props) {
  const [activeTab, setActiveTab] = useState(false)
  const navigation = useNavigation()
  const orders = [
    {
      id: 'product-list-item-one',
      title: 'Fast Running shoe , M candid one',
      image: require('../assets/images/shoes/image-one.png'),
      price: 240,
      reseller: 'Sports Place',
      distance: 3.6,
      rating: 5.0,
    },
    {
      id: 'product-list-item-two',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 100,
      reseller: 'Awesome Shoes',
      distance: 4.8,
      rating: 2.0,
    },
    {
      id: 'product-list-item-three',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'Moving Sports',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-four',
      title: 'Nike React Vision',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'Shoe Plaza',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-five',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoe-a.png'),
      price: 150,
      reseller: 'Sports Place',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-six',
      title: 'Adidas run fast',
      image: require('../assets/images/shoes/box-shoe.png'),
      price: 150,
      reseller: 'Right Choice',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-seven',
      title: 'Puma Up Top Hill',
      image: require('../assets/images/shoes/running-shoe.png'),
      price: 150,
      reseller: 'Shoes Buy',
      distance: 3.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-eight',
      title: 'J Town running shoes',
      image: require('../assets/images/shoes/shoe-b.png'),
      price: 150,
      reseller: 'Speed Test',
      distance: 2.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-nine',
      title: 'Bata CJ casual shoe',
      image: require('../assets/images/shoes/shoe-c.png'),
      price: 150,
      reseller: 'Shoe Plaza',
      distance: 1.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-ten',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoe-img-one.png'),
      price: 150,
      reseller: 'Let`s Run',
      distance: 9.6,
      rating: 4.0,
    },
    {
      id: 'product-list-item-eleven',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'Sports Place',
      distance: 4.6,
      rating: 3.0,
    },
    {
      id: 'product-list-item-twelve',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoe-a.png'),
      price: 150,
      reseller: 'RealTime Players',
      distance: 7.6,
      rating: 2.0,
    },
    {
      id: 'product-list-item-thirteen',
      title: 'M hill shoe , with straps',
      image: require('../assets/images/shoes/shoes.png'),
      price: 150,
      reseller: 'FastTrack Shoes',
      distance: 8.6,
      rating: 3.0,
    },
  ]
  const _renderItem = () => {
    return (
      <View style={styles.card}>
        <View>
          <Text style={{ fontFamily: Constants.fontFamily.PoppinsBold, color: Constants.colors.primary }}>Order No : #12345</Text>
          <Text style={styles.orderDate}>25-March, 2021</Text>
        </View>
        <View>
          <View style={{ flexDirection: 'row', }}>
            <View style={styles.unpaidDot}></View>
            <Text style={{ color: Constants.colors.red, fontFamily: Constants.fontFamily.PoppinsBold, fontSize: 18, textTransform: 'uppercase', }}>Unpaid</Text>
          </View>
          <Pressable style={styles.orderDetails}><Text style={{marginRight: 4,}}>View Details</Text><AniDesign name='right' style={{marginTop: 4, marginLeft: 4,}} /></Pressable>
        </View>
      </View>
    )
  }
  const filterOrders = () => {
    
  }
  return (
    <View>
      <CustomAppBar title="Orders" navigation={navigation} />
      <View style={{ padding: Constants.padding, }}>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <Pressable onPress={filterOrders} style={{ ...styles.tabOrder, backgroundColor: Constants.colors.clock, }}><Text style={{ ...styles.tabText, color: Constants.colors.white, }}>All</Text></Pressable>
          <Pressable onPress={filterOrders} style={styles.tabOrder}><Text style={styles.tabText}>Pending</Text></Pressable>
          <Pressable onPress={filterOrders} style={styles.tabOrder}><Text style={styles.tabText}>Processing</Text></Pressable>
          <Pressable onPress={filterOrders} style={styles.tabOrder}><Text style={styles.tabText}>Delivered</Text></Pressable>
        </ScrollView>
        <FlatList
          style={{ marginBottom: 340, }}
          data={orders}
          keyExtractor={item => item?.id?.toString()}
          renderItem={_renderItem}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tabOrder: {
    padding: 10,
    borderRadius: Constants.borderRadius,
    backgroundColor: Constants.colors.white,
    marginRight: 12,
    height: 80,
    width: 120,
    marginBottom: Constants.margin + Constants.margin,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    fontSize: 17,
  },
  card: {
    borderRadius: Constants.borderRadius,
    flexDirection: 'row',
    backgroundColor: Constants.colors.white,
    justifyContent: 'space-between',
    marginBottom: 12,
    padding: Constants.padding,
  },
  orderDate: {
    fontFamily: Constants.fontFamily.PoppinsBold,
    color: Constants.colors.primary,
    backgroundColor: Constants.colors.textColor,
    padding: 4,
    paddingStart: 8,
    color: Constants.colors.white,
    borderRadius: Constants.borderRadius,
  },
  unpaidDot: {
    width: 12,
    height: 12,
    borderRadius: 12,
    margin: 8,
    backgroundColor: Constants.colors.red,
  },
  orderDetails: {
    flexDirection: 'row',
  },
});

export default OrderList;
