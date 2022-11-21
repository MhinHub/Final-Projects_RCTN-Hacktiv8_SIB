import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input label="Full Name" />
        <Gap height={24} />
        <Input label="Email Address" />
        <Gap height={24} />
        <Input label="Password" />
        <Gap height={24} />
        <Input label="Repeat Password" />
        <Gap height={24} />
        <Button title="Daftar" />
        <Gap height={30} />
        <Link
          title="Masuk Akun"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
