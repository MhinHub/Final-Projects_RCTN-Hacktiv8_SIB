import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {
  Card,
  Gap,
  MiniCard,
  PickBooking,
  Title,
  TourCard,
} from '../../components';
import Swiper from 'react-native-swiper';
import {Slider1, Slider2} from '../../assets';
import {
  Wisata1,
  Wisata2,
  Wisata3,
  Hotel1,
  Hotel2,
  Hotel3,
} from '../../assets/Dummy';

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
      <Gap height={15} />
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
      <Title title="Wisata Trending" />
      <Gap height={15} />
      <View style={styles.tourTrending}>
        <ScrollView
          style={styles.tour}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          <TourCard title="Candi Borobudor" img={Wisata1} />
          <Gap width={15} />
          <TourCard title="Nusa Penida" img={Wisata2} />
          <Gap width={15} />
          <TourCard title="Danau Toba" img={Wisata3} />
        </ScrollView>
      </View>
      <Gap height={30} />
      <Title title="Rekomendasi Hotel" />
      <Gap height={15} />
      <View style={styles.hotel}>
        <Card
          img={Hotel1}
          title="Star Horel"
          location="Tebet, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
        <Gap height={12} />
        <Card
          img={Hotel2}
          title="Star Horel"
          location="Pasar Minggu, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
        <Gap height={12} />
        <Card
          img={Hotel3}
          title="Hotel Santika"
          location="Tebet, Jakarta Utara"
          rate={4.8}
          price="Rp. 450.000"
        />
      </View>
      <Gap height={30} />
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
  tourTrending: {
    paddingLeft: 20,
  },
  tour: {
    flexDirection: 'row',
  },
  hotel: {
    paddingHorizontal: 20,
  },
});
