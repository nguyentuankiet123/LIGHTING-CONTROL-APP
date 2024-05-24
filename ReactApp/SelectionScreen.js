import React from 'react';
import { View, Button } from 'react-native';

const SelectionScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Đăng Nhập"
        onPress={() => navigation.navigate('Login')}
      />
      <Button
        title="Đăng Ký"
        onPress={() => navigation.navigate('Register')}
      />
      <Button
        title="Admin"
        onPress={() => navigation.navigate('Admin')}
      />
    </View>
  );
}

export default SelectionScreen;
