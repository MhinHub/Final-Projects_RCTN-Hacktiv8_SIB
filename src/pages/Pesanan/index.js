import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Header} from '../../components';
import {colors} from '../../utils';

const Pesanan = () => {
  return (
    <View style={styles.page}>
      <Header title="Pesanan" type="first" />
    </View>
  );
};

export default Pesanan;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
