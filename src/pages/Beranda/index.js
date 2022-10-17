import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../utils';
import {Gap, PickBooking} from '../../components';
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
    <View style={styles.page}>
      <HeaderHome />
      <Gap height={17} />

      <Swiper
        style={styles.wrapper}
        showsButtons
        loop={false}
        autoplay={true}
        buttonWrapperStyle>
        <View testID="slide1" style={styles.slide}>
          <Image source={Slider1} style={styles.imageSlider} />
        </View>
        <View testID="2" style={styles.slide}>
          <Image source={Slider2} style={styles.imageSlider} />
        </View>
        <View testID="3" style={styles.slide}>
          <Image source={Slider1} style={styles.imageSlider} />
        </View>
      </Swiper>
      <PickBooking />
    </View>
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
    paddingHorizontal: 40,
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
    marginTop: 17,
    marginBottom: -37,
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
  imageSlider: {},
});
