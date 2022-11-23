import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Swiper from 'react-native-swiper';
import {colors, fonts} from '../../utils';
import {Intro1, Intro2, Intro3} from '../../assets/Image';
import {IconLocation, IconStar} from '../../assets/Icon';
import {Fasilitas, Gap, Header, Review} from '../../components';
import {HotelDummy1} from '../../assets/Dummy';

const HotelInfo = ({title, location, rate, price}) => {
  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.wrapperLocation}>
          <IconLocation />
          <Text style={styles.location}>{location}</Text>
        </View>
        <View style={styles.wrapperRate}>
          <IconStar />
          <Text style={styles.rate}>{rate}</Text>
        </View>
      </View>
      <View style={styles.wrapperPrice}>
        <Text style={styles.price}>Rp. {price}</Text>
        <Text style={styles.night}>/malam</Text>
      </View>
    </View>
  );
};

const Title = ({title}) => {
  return (
    <View style={{paddingLeft: 20}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const Desc = ({desc}) => {
  return (
    <View style={{paddingHorizontal: 20}}>
      <Text style={styles.textGrey}>{desc}</Text>
    </View>
  );
};

const DetailHotel = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <Header title="Detail Hotel" onPress={() => navigation.goBack()} />
      <Swiper
        style={styles.wrapperSwipper}
        showsButtons={true}
        loop={false}
        autoplay={true}>
        <Image source={Intro1} style={styles.container} />
        <Image source={Intro2} style={styles.container} />
        <Image source={Intro3} style={styles.container} />
      </Swiper>
      <HotelInfo
        title="MG Suit Hotel Metro"
        rate="4.9"
        location="Jakarta Pusat"
        price="450.000"
      />
      <View style={styles.line} />
      <Gap height={15} />
      <Title title="Deskipsi" />
      <Gap height={12} />
      <Desc
        desc="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
"
      />

      <Gap height={12} />
      <Title title="Fasilitas" />
      <Gap height={15} />
      <Fasilitas />
      <Gap height={12} />

      <View style={styles.wrapperReview}>
        <Title title="Ulasan" />
        <Text style={styles.textRate}>(378)</Text>
      </View>
      <Gap height={15} />
      <Review
        name="John Hawkins"
        img={HotelDummy1}
        rate="4.9"
        desc=" Very nice and comfortable hotel. thank you for accompanying my vacation"
      />
      <Gap height={30} />
      <Review
        name="John Hawkins"
        img={HotelDummy1}
        rate="4.9"
        desc=" Very nice and comfortable hotel. thank you for accompanying my vacation"
      />
      <Gap height={30} />
    </ScrollView>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default DetailHotel;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  container: {
    width: WIDTH,
    height: HEIGHT * 0.4,
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
    paddingHorizontal: 20,
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
  wrapperReview: {
    flexDirection: 'row',
  },
  wrapperLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  night: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
    paddingLeft: 10,
  },
  iconFavorit: {
    position: 'absolute',
    marginTop: 15,
    alignItems: 'flex-end',
  },
  title: {
    fontFamily: fonts.primary[400],
    fontSize: 16,
    color: colors.secondary,
  },
  textGrey: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
  },
  textRate: {
    fontFamily: fonts.primary[400],
    color: colors.greymedium,
    fontSize: 14,
    paddingLeft: 10,
  },
  line: {
    height: 0.3,
    borderBottomColor: colors.border,
    borderWidth: 0.2,
  },
  wrapperSwipper: {
    height: HEIGHT * 0.4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
