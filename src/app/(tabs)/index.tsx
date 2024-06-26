import products from '@/assets/data/products';
import { Colors } from '@/src/constants/Colors';
import {  StyleSheet, Platform, View,Text } from 'react-native';
import { Image } from 'expo-image';

                            
export default function HomeScreen() {
  const product = products[0]
  return (
    <View style={styles.container}>
       <Image
        style={styles.image}
        source={product.image}
        transition={1000}
      />
      <Text style={styles.title}>Pizza paperoni</Text>
      <Text style={styles.price}>$12.99</Text>
    </View>
  );
}

const styles = StyleSheet.create({
 container: {
  paddingTop: Platform.OS === 'android' ? 20 : 0
 },
 title: {
  fontSize: 20,
  fontWeight: 'bold'
 },
 price: {
  fontSize: 15,
  color: Colors.light.tint
 },
 image: {
  width: '100%',
  aspectRatio: 1,
 }
});
