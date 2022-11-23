import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Gap, Header, HotelCard, PickBooking} from '../../components';

const Search = ({navigation}) => {
  return (
    <ScrollView style={styles.page}>
      <Header title="Hasil Pencarian" onPress={() => navigation.goBack()} />
      <Gap height={20} />
      <View style={styles.containerPick}>
        <PickBooking />
      </View>
      <Gap height={20} />
      <HotelCard />
      <Gap height={25} />
      <HotelCard />
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
    height: HEIGHT * 0.33,
  },
});
