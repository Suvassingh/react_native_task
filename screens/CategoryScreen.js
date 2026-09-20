import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { SafeAreaView } from "react-native-safe-area-context";

function CategoryScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function goToProduct() {
      navigation.navigate("ProductOverview", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        imageUrl={itemData.item.imageUrl}
        onPress={goToProduct}
      />
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }} edges={["bottom"]}>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        renderItem={renderCategoryItem}
        contentContainerStyle={{ paddingBottom: 16 }}
      />
    </SafeAreaView>
  );
}

export default CategoryScreen;
