import {StyleSheet, Platform, View, FlatList} from 'react-native';
import ProductListItem from '@components/ProductListItem';
import products from "@assets/data/products";


export default function HomeScreen () {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({item}) => <ProductListItem product={item}/>}
        numColumns={2}
        contentContainerStyle={{gap: 10}}
        columnWrapperStyle={{gap: 10}}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? 20 : 0,
    paddingHorizontal: 10,
    borderRadius: 20,
    backgroundColor: '#eeeced'
  },
});