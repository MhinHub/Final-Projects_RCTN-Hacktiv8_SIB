import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {colors} from '../../utils';
import {Intro1} from '../../assets/Image';

const DetailHotel = () => {
  return (
    <View style={styles.page}>
      <View style={styles.wrapper}>
        <View>
          
        </View>
        <Image source={Intro1} style={styles.wrapper} />

      </View>
      <Text>fjfj</Text>
    </View>
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
  wrapper: {
    width: WIDTH,
    height: HEIGHT * 0.4,
  },
});
