import React, { useEffect, useState } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Pressable,
} from 'react-native'
import { SliderBox } from 'react-native-image-slider-box'
import Images from '../assets/images/Images'
import CustomAppBar from '../components/CustomAppBar'
import Constants from '../shared/Constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import ResellerSlider from '../components/home/ResellerSlider'
import NewReleaseSlider from '../components/home/NewReleaseSlider'
import VideoSlider from '../components/home/VideoSlider'
import BrandSlider from '../components/home/BrandSlider'
import TopSellerSlider from '../components/home/TopSellerSlider'

const Home = (props) => {
  const [bannerImgs, setBannerImgs] = useState([])
  useEffect(() => {
    setBannerImgs(
      [
        Images.bannerOne,
        Images.bannerOne,
        Images.bannerOne,
        Images.bannerOne,
        Images.bannerOne,
      ]
    )
  }, [])
  const viewAllReseller = () => {

  }
  const viewAllNewRelease = () => {

  }
  const viewAllStore =()=>{

  }
  const topSelling =()=>{

  }
  return (
    <View style={{ flex: 1, backgroundColor: Constants.colors.white }}>
      <CustomAppBar navigation={props.navigation} />
      <ScrollView style={{}}>
        <View style={{ height: 240,}}>
          <SliderBox resizeMethod={'resize'} resizeMode={'contain'} images={bannerImgs} ImageComponentStyle={{borderRadius: 10, width: '92%', marginTop: 10}} dotColor={Constants.colors.whiteColor} inactiveDotColor={Constants.colors.transparent} autoplay circleLoop imageLoadingColor={Constants.colors.transparent} paginationBoxStyle={{ position: 'absolute', bottom: -35 }} dotStyle={{ width: 20, height: 6, borderRadius: 12 }} />
        </View>
        <View style={{...styles.divider, marginTop: 30,}}></View>
        <View style={styles.nearBuHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Image source={Images.nearByReseller} style={{ width: 32, height: 32, marginRight: 8 }} />
            <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 17, color: Constants.colors.primary }}>Near By Reseller</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Pressable onPress={viewAllReseller}><Text style={styles.viewAll}>View All <AntDesign name='right' size={13} /></Text></Pressable>
          </View>
        </View>
        <View style={{paddingBottom: Constants.padding, paddingTop: 15,}}>
          <ResellerSlider />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.nearBuHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Image source={Images.box} style={{ width: 32, height: 32, marginRight: 8 }} />
            <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 17, color: Constants.colors.primary }}>New Release</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Pressable onPress={viewAllNewRelease}><Text style={styles.viewAll}>View All <AntDesign name='right' size={13} /></Text></Pressable>
          </View>
        </View>
        <View style={{paddingBottom: Constants.padding, paddingTop: 15,}}>
          <NewReleaseSlider />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.nearBuHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Image source={Images.videos} style={{ width: 32, height: 32, marginRight: 8 }} />
            <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 17, color: Constants.colors.primary }}>Video</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Pressable onPress={viewAllNewRelease}><Text style={styles.viewAll}>View All <AntDesign name='right' size={13} /></Text></Pressable>
          </View>
        </View>
        <View style={{paddingBottom: Constants.padding, paddingTop: 15,}}>
          <VideoSlider />
        </View>
        <View style={{...styles.divider, marginTop: 20}}></View>
        <View style={styles.nike}>
          <Image source={Images.nike} style={{marginBottom: 35, marginTop: 35, width: '100%', height: 130, borderRadius: 10, resizeMode: 'contain' }} />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.nearBuHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Image source={Images.store} style={{ width: 32, height: 32, marginRight: 8 }} />
            <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 17, color: Constants.colors.primary }}>Stores</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Pressable onPress={viewAllStore}><Text style={styles.viewAll}>View All <AntDesign name='right' size={13} /></Text></Pressable>
          </View>
        </View>
        <View style={{paddingBottom: Constants.padding, paddingTop: 15,}}>
          <BrandSlider />
        </View>
        <View style={styles.divider}></View>
        <View style={styles.nearBuHeading}>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Image source={Images.topSelling} style={{ width: 32, height: 32, marginRight: 8 }} />
            <Text style={{ fontFamily: Constants.fontFamily.PoppinsMedium, fontSize: 17, color: Constants.colors.primary }}>Top Selling Reseller</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.margin, marginBottom: Constants.margin, }}>
            <Pressable onPress={topSelling}><Text style={styles.viewAll}>View All <AntDesign name='right' size={13} /></Text></Pressable>
          </View>
        </View>
        <View style={{paddingBottom: Constants.padding, paddingTop: 15,}}>
          <TopSellerSlider />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: Constants.margin + 10,
  },
  divider: {
    height: 2,
    backgroundColor: Constants.colors.grayBg,
  },
  nearBuHeading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: Constants.padding,
    paddingRight: Constants.padding,
  },
  nearBy: {
    display: 'flex',
    flexDirection: 'row',
  },
  nike: {
    paddingLeft: Constants.padding,
    paddingRight: Constants.padding,
  },
  viewAll: {
    fontFamily: Constants.fontFamily.Roboto,
    color: Constants.colors.primary,
    fontSize: 13,
  },
});

export default Home