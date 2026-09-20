import { FlatList,  } from "react-native";
import ProductItem from "./ProductItem";
import { useSafeAreaInsets } from "react-native-safe-area-context";


function ProductList({ items }) {  
    const insets = useSafeAreaInsets();

  function renderProductItem(itemData) {
    const productItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      brand: itemData.item.brand,
      price: itemData.item.price,
      priceRange: itemData.item.priceRange,
    };
    return <ProductItem {...productItemProps} />;
  }

  return (
    <FlatList
      data={items}
      keyExtractor={(i) => i.id}
      renderItem={renderProductItem}
      contentContainerStyle={{ paddingBottom: insets.bottom + 16 }}
    />
  );
}

export default ProductList;
