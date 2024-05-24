import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Vui lòng nhập email và mật khẩu');
    } else if (password.length < 8) {
      setError('Mật khẩu phải có ít nhất 8 ký tự');
    }else if(!validateEmail(email)){
        setError('email cua ban khong dung')
    } else {
      // Thực hiện kiểm tra đăng nhập và chuyển hướng đến màn hình Home nếu đúng
      navigation.navigate('Home');
    }
  };

  const validateEmail = (email) => {
    // Xử lý logic kiểm tra email hợp lệ
    return /\S+@\S+\.\S+/.test(email);
  };

  return (
    <View>
      <Text>Đăng Nhập</Text>
      <TextInput
        placeholder="Email"
        onChangeText={text => setEmail(text)}
      />
      <TextInput
        placeholder="Mật Khẩu"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Đăng Nhập"
        onPress={handleLogin}
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}

export default LoginScreen;
