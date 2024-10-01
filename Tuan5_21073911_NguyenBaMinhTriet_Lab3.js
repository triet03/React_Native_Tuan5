import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

// Các hình ảnh điện thoại
const phones = {
  blue: require('./assets/phone_blue.png'),
  red: require('./assets/phone_red.png'),
  black: require('./assets/phone_black.png'),
  white: require('./assets/phone_white.png'),
};

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('blue');

  // Mảng chứa các tùy chọn màu
  const colors = ['blue', 'red', 'black', 'white'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
      
      {/* Hình ảnh điện thoại */}
      <Image source={phones[selectedColor]} style={styles.phoneImage} />

      {/* Hàng các tùy chọn màu */}
      <View style={styles.colorOptions}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color}
            style={[styles.colorOption, { backgroundColor: color }]}
            onPress={() => setSelectedColor(color)}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.buyButton}>
        <Text style={styles.buyButtonText}>CHỌN MUA</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  phoneImage: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  colorOptions: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  colorOption: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginHorizontal: 10,
    borderWidth: 2,
    borderColor: '#ccc',
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ColorPicker;
