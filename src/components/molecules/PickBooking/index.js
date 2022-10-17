import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utils';

const PickBooking = () => {
  return (
    <View style={styles.container}>
      <Text>PickBooking</Text>
    </View>
  );
};

export default PickBooking;

const styles = StyleSheet.create({
  container: {
    width: 294,
    height: 233,
    borderRadius: 8,
    borderColor: colors.white,
    borderColor: 'red',
    borderWidth: 1,
  },
});
