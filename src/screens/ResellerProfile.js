import React from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Pressable,
} from 'react-native';
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import Icon from 'react-native-vector-icons/AntDesign'
import Feather from 'react-native-vector-icons/Feather'
import NewReleaseSlider from '../components/home/NewReleaseSlider'
import VideoSlider from '../components/home/VideoSlider'
import TopSellingCategories from '../components/categories/TopSellingCategories'
import SortBySize from '../components/products/SortBySize'
import TrendingProducts from '../components/products/TrendingProducts'
import StarRating from '../components/StarRating'
import UserReview from '../components/products/UserReview'

function ResellerProfile({ navigation }) {
  const allTopSellingCategory = () => {

  }
  return (
    <View>
      <CustomAppBar navigation={navigation} />
      <ScrollView style={{backgroundColor: Constants.colors.white}}>
        <View style={{paddingBottom: Constants.padding+100}}>
          <ImageBackground source={Images.coverPic} style={styles.coverPic} />
          <View style={styles.afterCoverPic}>
            <View style={styles.brandNameContainer}>
              <Text style={{ fontFamily: Constants.fontFamily.RobotoBold, fontSize: 34, color: Constants.colors.white, position: 'absolute', top: -60, left: -42, color: Constants.colors.primary, backgroundColor: Constants.colors.white, padding: Constants.padding, borderRadius: Constants.borderRadius, }}>AS</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: Constants.margin + 18, }}>
              <Text style={styles.barandName}>Awesome Shop</Text>
              <View style={{ flexDirection: 'row', marginLeft: 12, backgroundColor: 'rgba(255,255,255,0.4)', paddingStart: 8, paddingEnd: 8, }}>
                <Text style={{ fontFamily: Constants.fontFamily.RobotoBold, color: Constants.colors.white, marginRight: 5,  marginTop: 6, }}>4.0</Text><Icon style={{ marginTop: 9, }} name='staro' size={14} color={Constants.colors.white} />
              </View>
            </View>
            <View style={{ flexDirection: 'row', }}>
              <Image source={Images.certificate} style={{width: 18,height: 18, resizeMode: 'contain'}} />
              <Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.white, marginLeft: 10, }}>Certified Reseller</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Feather name='map-pin' color={Constants.colors.white} size={16} />
              <Text style={{ fontFamily: Constants.fontFamily.RobotoRegular, color: Constants.colors.white, marginLeft: 10, }}>3.40 Miles</Text>
            </View>
          </View>
          <View style={styles.heading}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Image source={Images.box} style={{  width: 28, height: 28, marginRight: 14 }} />
              <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 15, color: Constants.colors.primary }}>Preorder</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Pressable onPress={allTopSellingCategory}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.primary, fontSize: 10, }}>View All <Icon name='right' size={10} /></Text></Pressable>
            </View>
          </View>
          <View style={{marginStart: Constants.margin, marginRight: Constants.margin,}}>
            <NewReleaseSlider />
          </View>
          <View style={styles.divider}></View>
          <View style={styles.heading}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Image source={Images.videos} style={{  width: 28, height: 28, marginRight: 14 }} />
              <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Video</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Pressable onPress={allTopSellingCategory}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.primary, fontSize: 10, }}>View All <Icon name='right' size={10} /></Text></Pressable>
            </View>
          </View>
          <View style={{padding: Constants.padding}}>
            <VideoSlider />
          </View>
          <View style={styles.divider}></View>
          <View style={styles.heading}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Image source={Images.categoryIcon} style={{ width: 28, height: 28, marginRight: 14 }} />
              <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Top Selling Category</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Pressable onPress={allTopSellingCategory}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.primary, fontSize: 10, }}>View All <Icon name='right' size={10} /></Text></Pressable>
            </View>
          </View>
          <View style={{marginStart: Constants.margin, marginRight: Constants.margin,}}>
            <TopSellingCategories />
          </View>
          <View style={styles.divider}></View>
          <View style={styles.heading}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Image source={Images.sortbysize} style={{ width: 28, height: 28, marginRight: 14 }} />
              <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Short By Size</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Pressable onPress={allTopSellingCategory}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.primary, fontSize: 10, }}>View All <Icon name='right' size={10} /></Text></Pressable>
            </View>
          </View>
          <View style={{marginStart: Constants.margin, marginRight: Constants.margin,}}>
            <SortBySize />
          </View>
          <View style={styles.divider}></View>
          <View style={styles.heading}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Image source={Images.treanding} style={{ width: 28, height: 28, marginRight: 14 }} />
              <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Trending Products</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Pressable onPress={allTopSellingCategory}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.primary, fontSize: 10, }}>View All <Icon name='right' size={10} /></Text></Pressable>
            </View>
          </View>
          <View style={{marginStart: Constants.margin, marginRight: Constants.margin,}}>
            <TrendingProducts />
          </View>
          <View style={styles.divider}></View>
          <View style={styles.heading}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Image source={Images.reviewIcon} style={{ width: 28, height: 28, marginRight: 14 }} />
              <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 18, color: Constants.colors.primary }}>Review</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
              <Pressable onPress={allTopSellingCategory}><Text style={{ fontFamily: Constants.fontFamily.Roboto, color: Constants.colors.primary, fontSize: 10, }}>View All <Icon name='right' size={10} /></Text></Pressable>
            </View>
          </View>
          <View style={{marginStart: Constants.margin, marginRight: Constants.margin, flexDirection: 'row'}}>
            <Text style={{fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 30, color: Constants.colors.primary,}}>4.0</Text>
            <View style={{marginStart: Constants.margin,marginTop: 4, marginBottom: Constants.margin,}}>
              <StarRating rating={4} size={18} />
              <Text style={{fontFamily: Constants.fontFamily.PoppinsRegular, fontSize: 12,}}>From 20 People</Text>
            </View>
          </View>
          <View style={{marginStart: Constants.margin, marginRight: Constants.margin,}}>
            <UserReview />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  coverPic: {
    height: 180,
    resizeMode: 'contain',
  },
  afterCoverPic: {
    backgroundColor: '#535D5F',
    padding: Constants.padding,
    alignItems: 'center',
    justifyContent: 'center',
  },
  barandName: {
    fontFamily: Constants.fontFamily.PoppinsMedium,
    fontSize: 20,
    color: Constants.colors.white,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Constants.padding,
    paddingRight: Constants.padding,
  },
  divider: {
    height: 2,
    backgroundColor: Constants.colors.grayBg,
    marginTop: Constants.margin,
    marginBottom: Constants.margin,
  },
})

export default ResellerProfile;