import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

const AdminScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminLogin = () => {
    if (password === 'adminpassword') {
      navigation.navigate('AdminHome');
    } else {
      setError('Mật khẩu admin không đúng');
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Nhập Mật Khẩu Admin"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
      />
      <Button
        title="Đăng Nhập"
        onPress={handleAdminLogin}
      />
      {error ? <Text>{error}</Text> : null}
    </View>
  );
}

export default AdminScreen;
