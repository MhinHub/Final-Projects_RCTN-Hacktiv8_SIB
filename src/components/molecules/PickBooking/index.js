import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {Gap} from '../../atoms';
import {IconDateGrey, IconLocGrey, IconPersonGrey} from '../../../assets';

const Pick = ({icon, title}) => {
  return (
    <View style={styles.pick}>
      <TouchableOpacity style={styles.linePick}>
        {icon}
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
      <View style={styles.line} />
    </View>
  );
};

const PickBooking = () => {
  return (
    <View style={styles.container}>
      <Pick title="Jakarta" icon={<IconLocGrey />} />
      <Pick title="Fri, 7 Oct -  Sat, 8 Oct 2022 " icon={<IconDateGrey />} />
      <Pick title="1 Room, 1 Adult, 0 Children" icon={<IconPersonGrey />} />
      <Gap height={10} />
      <TouchableOpacity style={styles.containerButton} activeOpacity={0.7}>
        <View style={styles.button}>
          <Text style={styles.search}>Cari</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PickBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -20,
    width: 294,
    height: 233,
    borderRadius: 8,
    shadowOffset: {width: 0, height: 1},
    backgroundColor: colors.white,
    shadowOpacity: 0.7,
    shadowRadius: 2,
    elevation: 5,
  },
  text: {
    color: colors.text.primary,
    fontFamily: fonts.primary[500],
    fontSize: 14,
    paddingLeft: 15,
  },
  line: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  pick: {
    justifyContent: 'center',
  },
  containerButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: colors.primary,
    width: 120,
    height: 28,
    borderRadius: 5,
    justifyContent: 'center',
  },
  search: {
    fontFamily: fonts.primary[400],
    color: colors.white,
    textAlign: 'center',
  },
  linePick: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingVertical: 17,
  },
});
