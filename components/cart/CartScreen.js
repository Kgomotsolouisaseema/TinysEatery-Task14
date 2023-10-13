import React from 'react';
import { View, Text, FlatList, StyleSheet,Image, TouchableOpacity} from 'react-native';
// import { TouchableOpacity } from 'react-native';
import Header from "../home/Header";
import { useSelector , useDispatch } from 'react-redux';
// import  removeFromCart  from '../../redux/cartSlice';
// import cartSlice from '../../redux/cartSlice'; 
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { selectCartItems } from '../../redux/cartSlice';


const CartScreen = () => {
  const navigation = useNavigation();

  // const cartItems = useSelector(state => state.cartSlice);
  const dispatch = useDispatch();
  
  const cartItems = useSelector(selectCartItems);
  // console.log("cart items" , cartItems.Name)

  useEffect(()=>{
   

  },[])
  // Fetch food categories and items from Firebase
  // const foodData = []; // Retrieve data from Firebase

  // const handleRomoveFromCart =(itemId)=>{
  //   dispatch(removeFromCart(itemId));
  // }

   const handlecart =()=>{
    console.log("Cart btn clicked")
    navigation.navigate("Cart")
  }

  return (
    <View style={styles.container}>
      {/* <Header/> */}
      <View>
      <Text>Cart Screen</Text>
      {cartItems.map(item =>(
        <View key={item.id}>
    
          <View>
          
          <Image style={styles.image} source={{ uri: item.Image }} />
          <Text style={styles.text}>{item.Name}</Text>
            <Text style={styles.text}>{item.Intro}</Text>
            <Text style={styles.text}>Price ZAR {item.Price}</Text>
          <TouchableOpacity title="cart"  onPress={()=> handlecart(item.id)} >
            
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
    backgroundColor:"white"
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'white',
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
