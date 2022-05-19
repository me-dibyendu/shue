import React, { useState } from 'react';
import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Fa from 'react-native-vector-icons/FontAwesome'

import StarRating from '../StarRating';
import { useNavigation } from '@react-navigation/native'
import Constants from '../../shared/Constants';

const NewReleaseSliderItem = props => {
  const navigation = useNavigation();
  const { item, index } = props

  const [liked, setLiked] = useState(false);
  return (
    <View style={{flexDirection: 'row'}}>
      {
        index==0?<View style={{width: Constants.padding, height: '100%', backgroundColor: Constants.colors.white,}}></View>: null
      }
      <View style={styles.card}>
        <View style={styles.rowCard}>
          <View>
            <Text style={styles.time}>10 hrs</Text>
            <Text style={styles.date}>22 July</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Fa
                type={'font-awesome'}
                name={liked ? 'heart' : 'heart-o'}
                size={20}
                color={Constants.colors.peru}
                onPress={() => {
                  setLiked(!liked);
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Product')}>
            <Image
              resizeMode={'contain'}
              style={styles.image}
              source={item?.image}
            />
          </Pressable>
        </View>
        <View>
          <Pressable onPress={() => navigation.navigate('Product')}>
            <Text style={styles.title}>Adidas Shoes</Text>
          </Pressable>
        </View>
        <View>
          <View style={styles.ratingContainer}>
            <View>
              <StarRating rating={4} size={9} />
            </View>
            <View style={{ marginHorizontal: 5 }}>
              <Text>4.0</Text>
            </View>
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Image
              style={{ width: 9, height: 9 }}
              source={require('../../assets/images/category-inverted.png')}
            />
          </View>
          <View style={{ marginHorizontal: 5 }}>
            <Text style={styles.category}>Casual Shoes</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 122,
    height: 210,
    marginRight: 12,
    marginBottom: Constants.margin,
    backgroundColor: Constants.colors.background,
    borderRadius: 10,
    marginHorizontal: 3,
    borderWidth: 1,
    borderColor: Constants.colors.border,
    padding: 10,
  },
  rowCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  time: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: Constants.colors.black,
    fontSize: 9,
    textDecorationLine: 'underline',
  },
  date: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: Constants.colors.black,
    fontSize: 10,
  },
  image: {
    width: 91,
    height: 91,
  },
  title: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    color: Constants.colors.black,
    fontSize: 13,
  },
  ratingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginVertical: 5,
  },
  category: {
    fontFamily: Constants.fontFamily.PoppinsRegular,
    color: Constants.colors.black,
    fontSize: 11,
    marginTop: 2,
  },
});

export default NewReleaseSliderItem
