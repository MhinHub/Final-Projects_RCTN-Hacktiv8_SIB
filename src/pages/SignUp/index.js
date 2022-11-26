import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../context/reducer';

const SignUp = ({navigation}) => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  const dispatch = useDispatch();
  const sendData = () => {
    console.log('data yang dikirim: ', form);
    dispatch(login(form));
  };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input
          label="Nama Lengkap"
          value={form.fullName}
          onChangeText={value => onInputChange(value, 'fullName')}
          textContentType="name"
        />
        <Gap height={24} />
        <Input
          label="Email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
          textContentType="emailAddress"
        />
        <Gap height={24} />
        <Input
          label="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          textContentType="password"
        />
        <Gap height={24} />
        <Button title="Daftar" onPress={sendData} />
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
