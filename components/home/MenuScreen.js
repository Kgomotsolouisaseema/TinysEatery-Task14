import { useNavigation } from "@react-navigation/native";
import { collection, doc, getDoc, getDocs ,setDoc } from "firebase/firestore";
import { db } from "../config/firebase";
import React, { useEffect, useState } from "react";
import Header from "../home/Header";
// import BottomTabNavigator from "../profile/BottomTabNavigator";

// import { UseSelector, useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartSlice";
// import { removeFromCart } from "../../redux/cartSlice";
// import { incrementQuantity } from "../../redux/cartSlice";
// import { decrementQuantity } from "../../redux/cartSlice";

import { Avatar } from "react-native-paper";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  CheckBox,
} from "react-native";

const MenuScreen = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();

  // const isLoggedIn = UseSelector(state => state.auth.isLoggedIn);

  // FOOD CATEGORIES TO BE DISPLAYED ON MY MENU SCREEN
  const [foodCategories, setFoodCategories] = useState([]);
  // console.log("initial state of foodCategories useState" , foodCategories) //THIS CONTAINS THE WHOLE MENU LIST , ITS NOT CATEGORISED INTO B/F , LUNCH , DESSERTS ECT.
  const [filteredCategories, setFilteredCategories] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchFoodCategories = async () => {
      try {
        const categoriesSnapshot = await getDocs(collection(db, "Menu"));
        const catergoriesData = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFoodCategories(catergoriesData);
      
        setSelectedItems(catergoriesData);

        console.log(foodCategories, "food categories");
      } catch (error) {
        console.error("Error fetching food categories:", error);
      }
    };
    fetchFoodCategories();
  }, []);

 

 

  //FUNCTION TO HANDLE ADDING TO CART

  const handleAddToCart = async (id ,user) => {
    try {
      const selectedItem = foodCategories.find((item) => item.id === id);

      if (selectedItem) {
        const userId = user.userId; // Replace 'userId' with the 
        console.log("userId" , userId)
        const cartItemRef = doc(collection(db, `users/${userId}/cartItems`), selectedItem.id);
        await setDoc(cartItemRef, selectedItem);
        setCartItems([...cartItems, selectedItem]); // Update local cart items state if needed
        console.log("Item added to cart and Firestore successfully:", selectedItem);
      } else {
        console.log("Item not found.");
      }
    } catch (error) {
      console.error("Error adding item to cart and Firestore:", error);
    }
  };

  const handleFoodItemPress = async (foodItemId) => {
    console.log("food item ", foodItemId);
    try {
      //CREATING REFERENCE TO SPECIFIC DOCUMENT IN MENU COLLECTION
      const menuItemRef = doc(collection(db, "Menu"), foodItemId); //,foodItemId
      console.log("Menu Item Ref ", menuItemRef);
      //FETCH DOCUMENT DATA
      const docSnapshot = await getDoc(menuItemRef);
      console.log(docSnapshot, "Snapshot");
      if (docSnapshot.exists()) {
        //IF DOCUMENT IS THERE, use docSnapShot.id TO ACCESS DOCUMENTS FIELD
        const menuItemData = docSnapshot.data();

        console.log("Category Data:", menuItemData);
        navigation.navigate("ItemDetails", { menuItemData });
        // setSelectedItems(menuItemData)

        //NOW YOU CAN USE THE foodItemData TO DISPLAY/PROCESS THE DOCUMENT
      } else {
        console.log("Document not found");
      }
    } catch (error) {
      console.error("Error fetching menu item", error);
    }
  };

  //FUCNTION  TO HANDLE CATEGORIES NAVIGATION AND DISPLAY 
 const handleBreakfastnav = ()=>{
  console.log("Breafast Avatar Clicked ")
  navigation.navigate("Breakfast")
 }

 const handleLunchNav = ()=>{
  console.log("Lunch Avatar Clicked ")
  navigation.navigate("Lunch")
 }

 const handleDessertNav = ()=>{
  console.log("Dessert Avatar Clicked ")
  navigation.navigate("Dessert")
 }

 const handleDrinksNav = ()=>{
  console.log("Drinks Avatar Clicked ")
  navigation.navigate("Drinks")
 }




  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 16,
            width: "100%",
          }}
        >
          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
          <TouchableOpacity onPress={() => handleBreakfastnav()}>
          <Avatar.Image
            size={75}
            source={require("../../assets/BreakfastBurger.jpg")}
   
          />
          <Text  style={{textDecorationLine: "underline"}}>BreakFast</Text>
          </TouchableOpacity>

          </View>
          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
          <TouchableOpacity onPress={() => handleLunchNav()}>

            <Avatar.Image
              size={75}
              source={require("../../assets/BBQ RIBBED.jpg")}
            />
            <Text  style={{textDecorationLine: "underline"}}>Lunch</Text>
            </TouchableOpacity>

          </View>
          
          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
          <TouchableOpacity onPress={() => handleDessertNav()}>
        
          <Avatar.Image
            size={75}
            source={require("../../assets/Doughtnuts.jpg")}
          />
          <Text  style={{textDecorationLine: "underline"}}>Dessert</Text>
          </TouchableOpacity>

            
          </View>

          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
          <TouchableOpacity onPress={() => handleDrinksNav()}>
          <Avatar.Image
            size={75}
            source={require("../../assets/miniOrangeBomb.jpg")}
          />
          <Text style={{textDecorationLine: "underline"}}>Drinks</Text>
          </TouchableOpacity>

          </View>
        </View>
      </View>

      <Text style={{ fontSize: "large" , fontStyle:"italic",fontWeight:"bold" }}>
        This is the Menu Screen. Explore our delicious offerings:
      </Text>
      <FlatList
        data={foodCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity onPress={() => handleFoodItemPress(item.id)}>
              <Image style={styles.image} source={{ uri: item.Image }} />
            </TouchableOpacity>
            <Text style={styles.text}>{item.ItemCategory}</Text>
            <Text style={styles.text}>{item.Name}</Text>
            <Text style={styles.text}>{item.Intro}</Text>
            <Text style={styles.text}>Price ZAR {item.Price}</Text>

            <View style={styles.cartactions}>
              <TouchableOpacity onPress={() => handleAddToCart(item.id ,userId)}>
                <Image
                  style={styles.orderIcon}
                  source={require("../../assets/shopping.png")}
                />
              </TouchableOpacity>
            </View>
            <View>
              {/* <CheckBox style={styles.checkBox}
                value={selectedItems.includes(item.id)}
                onValueChange={() => handleCheckboxToggle(item.id)}
              /> */}
            </View>
          </View>
        )}
      />
      {/* <BottomTabNavigator/> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBCD", //blanched Almond color
    // flexDirection: "row",
  },
  itemContainer: {
    padding: 20,
    borderWidth: 3,
    borderColor: "#654321", //dark brown ,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 350,
    height: 200,
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 15,
    // fontFamily: 'Baskerville-Italic',
    flex: 1,
    alignItems: "center",
  },
  cartactions: {
    alignContent: "center",
    width: "100%",
    alignItems: "flex-end",
  },
  orderIcon: {
    height: 60,
    width: 60,
    alignItems: "center",
  },
  checkBox: {
    height: 30,
    width: 30,
    alignItems: "flex-start",
    // borderRadius: 5,
  },
});

export default MenuScreen;
