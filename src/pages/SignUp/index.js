import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Button, Gap, Header, Input, Link} from '../../components';
import {colors} from '../../utils';
import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../context/reducer';

const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const onBtnClicked = () => {
    dispatch(login({name: name, email: email, password: password}));
  };

  // const [form, setForm] = useState({
  //   fullName: '',
  //   email: '',
  //   password: '',
  // });

  // const onInputChange = (value, input) => {
  //   setForm({
  //     ...form,
  //     [input]: value,
  //   });
  // };

  // const dispatch = useDispatch();
  // const sendData = () => {
  //   dispatch(login(form));
  //   console.log('data yang dikirim: ', form);
  // };

  return (
    <View style={styles.page}>
      <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <Input
          label="Nama Lengkap"
          // value={form.name}
          // onChangeText={value => onInputChange(value, 'name')}
          textContentType="name"
          value={name}
          onChangeText={value => setName(value)}
        />
        <Gap height={24} />
        <Input
          label="Email"
          // value={form.email}
          // onChangeText={value => onInputChange(value, 'email')}
          textContentType="emailAddress"
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <Gap height={24} />
        <Input
          label="Password"
          // value={form.password}
          // onChangeText={value => onInputChange(value, 'password')}
          textContentType="password"
          value={password}
          onChangeText={value => setPassword(value)}
        />
        <Gap height={24} />
        <Button
          title="Daftar"
          onPress={() => {
            onBtnClicked();
            navigation.replace('MainApp');
          }}
        />
        <Gap height={30} />
        <Link
          title="Masuk Akun"
          size={16}
          align="center"
          onPress={() => navigation.navigate('SignIn')}
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
