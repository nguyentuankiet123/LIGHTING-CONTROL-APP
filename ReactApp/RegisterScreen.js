import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (name === '' || email === '' || password === '' || phone === '') {
      setError('Vui lòng điền đầy đủ thông tin');
    } else if (!validateEmail(email)) {
      setError('Email không hợp lệ');
    } else if (password.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự');
    } else if (phone.length < 10) {
      setError('Số điện thoại phải có ít nhất 10 số');
    } else {
      // Lưu thông tin đăng ký vào file và chuyển hướng về màn hình đăng nhập
      navigation.navigate('Login');
    }
  };

  const validateEmail = (email) => {
    // Xử lý logic kiểm tra email hợp lệ
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <View>
      <Text>Đăng Ký</Text>
      <TextInput
        placeholder="Họ và Tên"
        onChangeText={text => setName(text)}
      />
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Mật Khẩu"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <TextInput
        placeholder="Số Điện Thoại"
        onChangeText={text => setPhone(text)}
      />
      <Button
        title="Đăng Ký"
        onPress={handleRegister}
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}

export default RegisterScreen;
