import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import Header from "../home/Header";
import { UseSelector , useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartSlice';


const CartScreen = () => {
  const cartItems = UseSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // Fetch food categories and items from Firebase
  const foodData = []; // Retrieve data from Firebase

  const handleRomoveFromCart =(itemId)=>{
    dispatch(removeFromCart(itemId));
  }
  return (
    <View style={styles.container}>
      <Header/>
      {cartItems.map(item =>(
        <View key={item.id}>
          <TouchableOpacity title="Remove" onPress={()=> handleRomoveFromCart(item.id)}>
            <Text>{item.name}</Text>
          </TouchableOpacity>


           </View>
      ))}
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"green"
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
});

export default CartScreen;
