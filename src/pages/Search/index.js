import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../utils';
import { Gap, Header, HotelCard, PickBooking } from '../../components';
import { HotelDummy1 } from '../../assets/Dummy';
import { useDispatch, useSelector } from 'react-redux';
// import { getDataApiDetailHotels } from '../../context/api/reducer'

const Search = ({ navigation }) => {
  const dispatch = useDispatch();

  const { searchResult } = useSelector((state) => state.api);

  console.log('searchResult : ', searchResult);

  return (
    <ScrollView style={styles.page}>
      <Header title="Hasil Pencarian" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      {/* Looping API Hotel  */}
      <HotelCard
        img={HotelDummy1}
        title="MG Suit Hotel Metro"
        rate="4.9"
        price="Rp. 45.0000"
        location="Jakarta Pusat"
        onPress={() => navigation.navigate('DetailHotel')}
      />
      <Gap height={25} />
      <HotelCard
        img={HotelDummy1}
        title="MG Suit Hotel Metro"
        rate="4.9"
        price="Rp. 45.0000"
        location="Jakarta Pusat"
        onPress={() => navigation.navigate('DetailHotel')}
      />
    </ScrollView>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default Search;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  containerPick: {
    alignSelf: 'center',
    width: WIDTH * 0.77,
  },
});
