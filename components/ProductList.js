import { FlatList } from "react-native";
import ProductItem from "./ProductItem";

function ProductList({ items }) {
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
    />
  );
}

export default ProductList;
