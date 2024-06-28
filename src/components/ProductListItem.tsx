import {StyleSheet, View, Text, Pressable} from 'react-native';
import {Link} from "expo-router";
import {Image} from 'expo-image';
import {Colors} from '@constants/Colors';
import {Product} from "@/types";

type productListItemProps = {
  product: Product
}

export default function ProductListItem({product}: productListItemProps) {
  return (
    <Link href={`/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          style={styles.imageStyle}
          source={product.image}
          transition={1000}
          contentFit='contain'
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{`$${product.price}`}</Text>

          <View style={styles.divider}></View>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </Pressable>
    </Link>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    flex: 1,
    borderRadius: 10,
    maxWidth: "100%",
    marginHorizontal: 5
  },
  textContainer: {
    flex: 0.2,
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  description: {
    fontSize: 16,
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint
  },
  imageStyle: {
    width: '100%',
    aspectRatio: 1,

  },
  divider: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#000',
    marginVertical: 10
  }
});
