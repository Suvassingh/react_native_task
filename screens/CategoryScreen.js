import { FlatList, StyleSheet,View } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLayoutEffect } from "react";
import IconButton from "../components/IconButton";

function CategoryScreen({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <View style={styles.searchIcon}>
          <IconButton
            icon="search"
            color="white"
            onPress={() => navigation.navigate("ProductSearch")}
          />
        </View>
      ),
    });
  }, [navigation]);
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

const styles = StyleSheet.create({
  searchIcon: {
    marginRight: 12,
  },
});
