import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {IconBackDark} from '../../../assets';
import {Button, Gap} from '../../atoms';
import {colors} from '../../../utils';

const Header = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-dark" onPress={onPress} />
      <Text style={styles.text}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.text.primary,
  },
});
