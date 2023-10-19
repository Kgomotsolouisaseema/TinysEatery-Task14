import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from "../home/Header";
import { useNavigation } from '@react-navigation/native';
import {auth , db}from "../config/firebase"
import {doc , setDoc} from "firebase/firestore";

const CartScreen = ({route}) => {
  let {userId} = route.params;

  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items based on user id from Firestore here and update the local state
    const fetchCartItems = async () => {
      const cartItemsRef =collection( db , 'cartItems').where('user', '==', user.userId); // Firestore collection reference
      const snapshot = await cartItemsRef.get();
      const items = snapshot.docs.map(doc => doc.data());
      setCartItems(items);
    };
    fetchCartItems();
  }, []);

  const handleCart = () => {
    console.log("Cart btn clicked");
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View>
        <Text>Cart Screen</Text>
        {cartItems.map(item => (
          <View key={item.id}>
            <View>
              <Image style={styles.image} source={{ uri: item.Image }} />
              <Text style={styles.text}>{item.Name}</Text>
              <Text style={styles.text}>{item.Intro}</Text>
              <Text style={styles.text}>Price ZAR {item.Price}</Text>
              <TouchableOpacity title="cart" onPress={handleCart}>
                {/* Your cart button */}
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white"
  },
  text: {
    fontSize: 17,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
    borderRadius: 9
  },
});

export default CartScreen;
