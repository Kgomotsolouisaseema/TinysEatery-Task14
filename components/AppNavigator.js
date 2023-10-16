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
// import OnboardScreen from "./home/OnboardScreen"
import BreakfastMenu from "./menu/BreakfastMenu";
import LunchMenu from "./menu/LunchMenu";
import DessertMenu from "./menu/DessertMenu";
import DrinksMenu from "./menu/DrinksMenu";


const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// const Drawer = createDrawerNavigator();

// const AuthStack = () => (
//     <Stack.Navigator>
//       <Stack.Screen name="Login" component={LoginScreen} />
//       <Stack.Screen name="Registration" component={RegistrationScreen} />
//     </Stack.Navigator>
//   );

// const isAuth = true 
// { isAuth && <Stack.Screen name="ItemDetails" component={ViewItemScreen} /> }
export default function AppNavigator() {
  // const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  return (

    // <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboard">
        {/* <Stack.Screen name="Onboard"component={OnboardScreen}options={{headerShown: false}} /> */}
        <Stack.Screen name="Menu" component={MenuScreen} />
        {/* <Stack.Screen name="ItemDetails" component={ViewItemScreen} />  */}
        <Stack.Screen name="Breakfast" component={BreakfastMenu}/>
        <Stack.Screen name="Lunch" component={LunchMenu}/>
        <Stack.Screen name="Dessert" component={DessertMenu}/>
        <Stack.Screen name="Drinks" component={DrinksMenu}/> 
        <Stack.Screen name="Cart" component={CartScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    // </NavigationContainer>

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
