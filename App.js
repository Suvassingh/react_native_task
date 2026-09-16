import CategoryScreen from "./screens/CategoryScreen";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

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
        <Stack.Screen name="Categories" component={CategoryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
