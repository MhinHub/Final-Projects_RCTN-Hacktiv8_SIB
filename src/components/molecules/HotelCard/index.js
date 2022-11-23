import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {HotelDummy1} from '../../../assets/Dummy';
import {IconFavoritCircle, IconLocation, IconStar} from '../../../assets/Icon';
import {colors, fonts} from '../../../utils';

const HotelCard = () => {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Image source={HotelDummy1} style={styles.image} />

      <IconFavoritCircle style={styles.iconFavorit} />

      <View style={styles.wrapper}>
        <View>
          <Text style={styles.title}>MG Suit Metro</Text>
          <View style={styles.wrapperLocation}>
            <IconLocation />
            <Text style={styles.location}>Jakarta Pusat</Text>
          </View>
          <View style={styles.wrapperRate}>
            <IconStar />
            <Text style={styles.rate}>4.9</Text>
          </View>
        </View>
        <View style={styles.wrapperPrice}>
          <Text style={styles.price}>Rp. 450.000</Text>
          <Text style={styles.night}>/malam</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const WIDTH = Dimensions.get('window').width;

export default HotelCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    width: WIDTH * 0.88,
    height: 263,
    borderRadius: 12,
    shadowOffset: {width: 0, height: 1},
    backgroundColor: colors.white,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
    overflow: 'hidden',
  },
  image: {
    height: 158,
    width: WIDTH * 0.88,
  },
  title: {
    fontFamily: fonts.primary[600],
    color: colors.secondary,
    fontSize: 16,
  },
  location: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
    paddingLeft: 8,
  },
  rate: {
    fontFamily: fonts.primary[600],
    color: colors.yellow,
    fontSize: 14,
    paddingLeft: 8,
  },
  price: {
    fontFamily: fonts.primary[600],
    color: colors.primary,
    fontSize: 16,
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 15,
  },
  wrapperPrice: {
    alignContent: 'center',
    justifyContent: 'center',
  },
  wrapperRate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrapperLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontFamily: fonts.primary[400],
  color: colors.greymedium,
  fontSize: 14,
  paddingLeft: 8,
  iconFavorit: {
    position: 'absolute',
    marginTop: 15,
    // justifyContent: 'flex-end',
    // marginLeft: 20,
  },
});
