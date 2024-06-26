import {StyleSheet, View, Text} from 'react-native';
import {Image} from 'expo-image';
import {Colors} from '@constants/Colors';
import {Product} from "@/types";

type productListItemProps = {
  product: Product
}

export default function ProductListItem ({product}: productListItemProps) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyle}
        source={product.image}
        transition={1000}
        contentFit='contain'
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>{`$${product.price}`}</Text>

      <View style={styles.divider}></View>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 20,
    flex: 1,
    maxWidth: '50%'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 13,
    color: Colors.light.tint
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,
  },
  divider: {
    width: '100%',
    height: 0.2,
    backgroundColor: '#000',
    marginVertical: 10
  }
});
