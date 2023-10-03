import React from 'react';
// import AppNavigator from './components/AppNavigator';
import { StyleSheet , View,Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import RegistrationScreen from './components/auth/RegistrationScreen';
import LoginScreen from "./components/auth/LoginScreen";
import HomeScreen from './components/home/HomeScreen';
import ViewItemScreen from "./components/menu/ViewItemScreen";
import CartScreen from  "./components/cart/CartScreen";
import CheckoutScreen from "./components/checkout/CheckoutScreen";
import ProfileScreen from './components/profile/ProfileScreen';



export default function App() {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer  initialRouteName="Registration">
      <Stack.Navigator>
        <Stack.Screen name="Registration" component={RegistrationScreen}/>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="ViewItem" component={ViewItemScreen}/>
        <Stack.Screen name="Cart" component={CartScreen}/>
        <Stack.Screen name="Checkout" component={CheckoutScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        {/* <AppNavigator/> */}
      </Stack.Navigator>
     


    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});