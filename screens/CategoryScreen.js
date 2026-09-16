import { FlatList} from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoryScreen() {
    function renderCategoryItem(itemData){
        function goToProduct(){
            console.log('Product Here!!!!')
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
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id.toString()}
      numColumns={1}
      renderItem={renderCategoryItem}
    />
  );
}



export default CategoryScreen;
