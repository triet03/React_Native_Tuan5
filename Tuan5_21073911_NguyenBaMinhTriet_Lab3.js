
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; 

//Tuan5_21073911_NguyenBaMinhTriet_Lab3


const phones = {
  blue: require('blue.png'),
  red: require('red.png'),
  black: require('black.png'),
  white: require('white.png'),
};

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('blue');

  const colors = [
    { name: 'blue', colorCode: '#3498db' },
    { name: 'red', colorCode: '#e74c3c' },
    { name: 'black', colorCode: '#2c3e50' },
    { name: 'white', colorCode: '#ecf0f1' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>

      <Image source={phones[selectedColor]} style={styles.phoneImage} />

      <View style={styles.ratingContainer}>
        {[...Array(4)].map((_, index) => (
          <FontAwesome key={index} name="star" size={20} color="gold" />
        ))}
        <FontAwesome name="star-half-full" size={20} color="gold" />
        <Text style={styles.ratingText}>(Xem 828 đánh giá)</Text>
      </View>

      <Text style={styles.price}>1.790.000 đ</Text>
      <Text style={styles.discountedPrice}>1.790.000 đ</Text>

      <Text style={styles.colorLabel}>Chọn một màu bên dưới:</Text>
      <View style={styles.colorOptions}>
        {colors.map((color) => (
          <TouchableOpacity
            key={color.name}
            style={[styles.colorOption, { backgroundColor: color.colorCode }]}
            onPress={() => setSelectedColor(color.name)}
          >
            <Text style={styles.colorOptionText}>{color.displayName}</Text>
          </TouchableOpacity>
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
    marginBottom: 10,
  },
  phoneImage: {
    width: 200,
    height: 400,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  ratingText: {
    fontSize: 14,
    marginLeft: 5,
  },
  price: {
    fontSize: 18,
    color: '#e74c3c',
    textDecorationLine: 'line-through',
  },
  discountedPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#27ae60',
    marginBottom: 10,
  },
  colorLabel: {
    fontSize: 16,
    marginBottom: 10,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
  },
  colorOptionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  buyButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 5,
  },
  buyButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ColorPicker;

