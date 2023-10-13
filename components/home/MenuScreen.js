import { useNavigation } from "@react-navigation/native";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import React, { useEffect, useState } from "react";
import Header from "../home/Header";
import { UseSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { removeFromCart } from "../../redux/cartSlice";
import { incrementQuantity } from "../../redux/cartSlice";
import { decrementQuantity } from "../../redux/cartSlice";

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
  const dispatch = useDispatch();

  // const isLoggedIn = UseSelector(state => state.auth.isLoggedIn);

  // FOOD CATEGORIES TO BE DISPLAYED ON MY MENU SCREEN
  const [foodCategories, setFoodCategories] = useState([]);
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
        // setFilteredCategories(catergoriesData);
        setSelectedItems(catergoriesData);

        console.log(foodCategories, "food categories");
      } catch (error) {
        console.error("Error fetching food categories:", error);
      }
    };
    fetchFoodCategories();
  }, []);

  // const handleCategoryPress = (categoryId) => {
  //   // Navigate to the detailed view of items within the selected category
  //   const filteredItems = foodCategories.filter(category => category.id === categoryId);
  //   setFilteredCategories(filteredItems);
  //   navigation.navigate('ItemDetails', { categoryId });
  // };

  //FUNCTION TO HANDLE  / I WANT THEM TO LIKE THE ITEM/WISHLIST VIBES
  // const handleCheckboxToggle = (foodItemId) => {
  //   // Handle checkbox state changes and update selectedItems array
  //   if (selectedItems.includes(foodItemId)) {
  //     setSelectedItems(selectedItems.filter((id) => id !== foodItemId));
  //   } else {
  //     setSelectedItems([...selectedItems, foodItemId]);
  //   }
  // };

  //FUNCTION TO HANDLE ADDING TO CART

  const handleAddToCart = (id) => {

    // console.log(selectedItems, "selectedItems");
    //THIS PART FILTERS THE SELECTED ITEM WITH ITS ID
    const [item] = selectedItems.filter((item) => item.id === id);
    //WE DISPATCH THE ITEM AND ADD IT TO THE CART
    dispatch(addToCart(item));
    // console.log("items added to cart", item);
    // Filter out items that are already in the cart
    const newItems = selectedItems.filter(
      (itemId) => !cartItems.includes(itemId)
    );

    // Add new items to the cart
    // setCartItems([...cartItems, ...newItems]);
    // Clear the selected items
    setSelectedItems([]);
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
  //Function FOR THE BREAKFAST FUNCTION


  return (
    <View style={styles.container}>
      <Header />
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 10,
            width: "100%",
          }}
        >
          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
          <Avatar.Image
            size={75}
            source={require("../../assets/BreakfastBurger.jpg")}
          />
          <Text>BreakFast</Text>

          </View>
          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
     
          
            <Avatar.Image
              size={75}
              source={require("../../assets/BBQ RIBBED.jpg")}
            />
            <Text>Lunch</Text>

          </View>
          
          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
        
          <Avatar.Image
            size={75}
            source={require("../../assets/Doughtnuts.jpg")}
          />
          <Text>Dessert</Text>

            
          </View>

          <View style={{marginHorizontal:12 ,alignItems: "center" }}>
        
          <Avatar.Image
            size={75}
            source={require("../../assets/miniOrangeBomb.jpg")}
          />
          <Text>Drinks</Text>

          </View>
        </View>
      </View>

      <Text style={{ fontSize: "large" }}>
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
              <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
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
