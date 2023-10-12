import React from 'react';
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native';
import Header from "../home/Header";
import { useSelector , useDispatch } from 'react-redux';
// import  removeFromCart  from '../../redux/cartSlice';
// import cartSlice from '../../redux/cartSlice'; 
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';


const CartScreen = () => {
  const navigation = useNavigation();
  const cartItems = useSelector(state => state.cartSlice);
  // const dispatch = useDispatch();

  useEffect(()=>{
    console.log("cart items" , cartItems)

  },[])
  // Fetch food categories and items from Firebase
  // const foodData = []; // Retrieve data from Firebase

  // const handleRomoveFromCart =(itemId)=>{
  //   dispatch(removeFromCart(itemId));
  // }

  handlecheckout =()=>{
    console.log("checkout btn clicked")
    // navigation.navigate("Checkout")
  }

  return (
    <View style={styles.container}>
      <Header/>
      {/* <Text>Hello Menu Items</Text> */}
      {cartItems.map(item =>(
        <View key={item.id}>
          {/* <TouchableOpacity title="Remove" onPress={()=> handleRomoveFromCart(item.id)}>
            
          </TouchableOpacity> */}
          <View>
          <Text>Cart screen things </Text>
          <Image style={styles.image} source={{ uri: item.Image }} />
          <Text style={styles.text}>{item.Name}</Text>
            <Text style={styles.text}>{item.Intro}</Text>
            <Text style={styles.text}>Price ZAR {item.Price}</Text>
          <TouchableOpacity title="checkout"  onPress={()=> handlecheckout(item.id)} >
            {/* <Text>Checkout</Text> */}
            
          </TouchableOpacity> 

      


          </View>


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
    // backgroundColor:"green"
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    fontSize: 17,
    // fontWeight: 700,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
    borderRadius: 9
  },
});

export default CartScreen;
