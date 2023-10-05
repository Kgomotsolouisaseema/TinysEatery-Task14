// import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
// import { createDrawerNavigator } from "@react-navigation/drawer";


import RegistrationScreen from "./auth/RegistrationScreen";

import LoginScreen from "./auth/LoginScreen";
import CartScreen from "./cart/CartScreen";
import CheckoutScreen from "./checkout/CheckoutScreen";

import MenuScreen from "./home/MenuScreen";
import ViewItemScreen from "./menu/ViewItemScreen";

import ProfileScreen from "./profile/ProfileScreen"


const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

export default function AppNavigator() {
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
        <Stack.Screen name="Profile" component={ProfileScreen} />
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
