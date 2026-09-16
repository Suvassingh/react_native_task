import CategoryScreen from "./screens/CategoryScreen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import ProductList from "./screens/ProductOverViewScreen";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#03cefb",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#4b4545",
        },
        drawerContentStyle: { backgroundColor: "#03cefb" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: " #03cefb",
        drawerActiveBackgroundColor: "#dff07e",
      }}
    >
      <Drawer.Screen
        name="AllCategories"
        component={CategoryScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const [fontLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#03cefb",
          },
          headerTintColor: "white",
          contentStyle: {
            backgroundColor: "#9beef2",
          },
        }}
      >
        <Stack.Screen
          name="CategoriesDrawer"
          component={DrawerNavigator}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="ProductOverview" component={ProductList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
