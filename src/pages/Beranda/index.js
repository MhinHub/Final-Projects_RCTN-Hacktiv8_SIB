import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, MiniCard, PickBooking, Title} from '../../components';
import Swiper from 'react-native-swiper';
import {Slider1, Slider2} from '../../assets';

const HeaderHome = () => {
  return (
    <View style={styles.containerHeader}>
      <View>
        <Text style={styles.textHello}>Hi, Irfan Zidni</Text>
        <Gap height={7} />
        <Text style={styles.textGreeting}>
          Selamat menginap dengan nyaman {'\n'}di Hotelio{' '}
        </Text>
      </View>
      <View style={styles.image}>
        <Image />
      </View>
    </View>
  );
};

const Beranda = () => {
  return (
    <ScrollView style={styles.page}>
      <HeaderHome />
      <Gap height={17} />
      <Swiper style={styles.wrapper} showsButtons loop={false} autoplay={true}>
        <Image source={Slider1} style={styles.imageSlider} />
        <Image source={Slider2} style={styles.imageSlider} />
        <Image source={Slider1} style={styles.imageSlider} />
      </Swiper>
      <View style={styles.containerPickBooking}>
        <PickBooking />
      </View>
      <Gap height={30} />
      <Title title="Kota Populer" />
      <Gap height={23} />
      <View style={styles.cityPopular}>
        <ScrollView
          style={styles.city}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <MiniCard title="Jakarta" />
          <Gap width={12} />
          <MiniCard title="Surabaya" />
          <Gap width={12} />
          <MiniCard title="Bali" />
          <Gap width={12} />
          <MiniCard title="Medan" />
          <Gap width={12} />
          <MiniCard title="Bandung" />
          <Gap width={12} />
          <MiniCard title="Semarang" />
        </ScrollView>
      </View>
      <Gap height={30} />
      <Title title="Wisata Populer" />
      <Gap height={23} />
    </ScrollView>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  image: {
    width: 38,
    height: 38,
    backgroundColor: 'grey',
    borderRadius: 19,
  },
  containerHeader: {
    paddingTop: 40,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHello: {
    fontFamily: fonts.primary[600],
    fontSize: 16,
    color: colors.text.primary,
  },
  textGreeting: {
    fontFamily: fonts.primary[400],
    fontSize: 12,
    color: colors.text.secondary,
  },
  wrapper: {
    paddingTop: 10,

    height: 210,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  imageSlider: {
    width: 438,
    height: 210,
  },
  containerPickBooking: {
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  cityPopular: {
    paddingLeft: 20,
  },
  city: {
    flexDirection: 'row',
  },
});
