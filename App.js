import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import RegistrationScreen from "./components/auth/RegistrationScreen";
import LoginScreen from "./components/auth/LoginScreen";
import CartScreen from "./components/cart/CartScreen";
import CheckoutScreen from "./components/checkout/CheckoutScreen";

import MenuScreen from "./components/home/MenuScreen";
import ViewItemScreen from "./components/menu/ViewItemScreen";

// import ProfileScreen from "./components/profile/ProfileScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={MenuScreen} />
        <Stack.Screen name="ItemDetails" component={ViewItemScreen} />
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
