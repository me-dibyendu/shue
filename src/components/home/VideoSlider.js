import React from 'react'
import { FlatList, Image, StyleSheet, View } from 'react-native'
import VideoPlayer from 'react-native-video-player'
import Video from 'react-native-video'
import Images from '../../assets/images/Images'
import Constants from '../../shared/Constants'

function VideoSlider() {
  const videos = [
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
    <View style={{flexDirection: 'row',}}>
      {
        index==0?<View style={{width: Constants.padding, height: '100%', backgroundColor: Constants.colors.white}}></View>:null
      }
      <VideoPlayer
        video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
        thumbnail={Images.videoThumbnail}
        controls={true}
        customStyles={{
          wrapper: {
            width: Constants.width,
            marginRight: 10,
          },
          seekBar: {
            height: 4,
            backgroundColor: Constants.colors.secondary,
          },
          thumbnail: {
            width: '98%',
            height: 165,
          },

        }}
      />
      <View style={{width: 12, height: '100%', backgroundColor: Constants.colors.white, position: 'absolute', left: -29,}}></View>
    </View>
  );
  return (
    <>
      {videos && (
        <FlatList
          style={{ width: '100%', }}
          showsHorizontalScrollIndicator={false}
          initialNumToRender={3}
          horizontal={true}
          keyExtractor={item => item?.id?.toString()}
          data={videos}
          renderItem={renderItem}
        />
      )}
    </>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: Constants.colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 3,
  },
});

export default VideoSlider;
