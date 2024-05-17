import { Text, View } from "react-native";
import CategoriesScreen from '../screens/CategoriesScreen'
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function Index() {
  return (
    <>
    <StatusBar style="light"></StatusBar>
    {/* <NavigationContainer independent={true}> */}
      <Stack.Navigator>
        <Stack.Screen name="MealCategories" component={CategoriesScreen}></Stack.Screen>
      </Stack.Navigator>
    {/* </NavigationContainer> */}
    </>
  );
}
