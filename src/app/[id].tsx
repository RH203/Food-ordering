import {View, Text, StyleSheet, Button} from "react-native";
import {useLocalSearchParams} from "expo-router";
import {Image} from "expo-image";
import products from "@assets/data/products";
import {Product} from "@/types";
import {Colors} from "@constants/Colors";

type DetailProductsProps = {
  products: Product;
}


function DetailProducts() {
  const {id} = useLocalSearchParams();

  const productId = parseInt(id || "0", 10);

  return (
    <View style={styles.mainContainer}>
      {
        products.map((product) => {
          if (product.id === productId) {
            return (
              <View key={product.id} style={styles.container}>
                <View style={styles.containerImage}>
                  <Image
                    source={{uri: product.image}}
                    style={styles.image}
                    transition={1000}
                    contentFit='contain'
                  />
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.title}>{product.name}</Text>
                  <Text style={styles.price}>{`$${product.price}`}</Text>
                  <View style={styles.divider}></View>
                  <Text style={styles.description}>{product.description}</Text>
                </View>
                <Button title="Add to cart" onPress={() => {
                }}/>
              </View>
            );
          }
          return null;
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 10,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1,
    width: "100%",
    padding: 10,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  price: {
    fontSize: 20,
    color: Colors.light.tint,
    marginVertical: 10,
  },
  divider: {
    height: 1,
    width: "100%",
    backgroundColor: '#000',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    color: 'black',
  },
});

export default DetailProducts;