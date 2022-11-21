import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LogoBlue} from '../../assets';
import {Button, Gap, Input, Link} from '../../components';
import {colors} from '../../utils';

const SignIn = ({navigation}) => {
  return (
    <View style={styles.page}>
      <LogoBlue />
      <Gap height={24} />
      <Text style={styles.title}>Masuk dan mulai{'\n'}menginap</Text>
      <Gap height={38} />
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" />
      <Gap height={18} />
      {/* <Link title="Lupa Password" size={14} /> */}
      <Gap height={24} />
      <Button title="Masuk" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link
        title="Buat Akun"
        size={16}
        align="center"
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 40,
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 20,
    color: colors.text.primary,
  },
});
