import { useNavigation } from "@react-navigation/native";
import {collection,doc, getDoc, getDocs } from "firebase/firestore";
import { db} from "../config/firebase"
import React, { useEffect, useState } from 'react';
// import {  db } from "../config/firebase";
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image, Pressable } from 'react-native';
import Header from "../home/Header";
// import { UseSelector } from 'react-redux';
const MenuScreen = () => {
  const navigation = useNavigation();
// const isLoggedIn = UseSelector(state => state.auth.isLoggedIn);

  // FOOD CATEGORIES TO BE DISPLAYED ON MY MENU SCREEN 
  const [ foodCategories,setFoodCategories]=useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);



useEffect(()=>{
  const fetchFoodCategories = async () =>{
    try{
      const categoriesSnapshot = await getDocs(collection(db,"Menu"));
      const catergoriesData = categoriesSnapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));
      setFoodCategories(catergoriesData);
      setFilteredCategories(catergoriesData); 
      console.log(foodCategories , "food categories")
    }catch(error){
      console.error("Error fetching food categories:" , error);
    }
  };
  fetchFoodCategories();
},[])


  // const handleCategoryPress = (categoryId) => {
  //   // Navigate to the detailed view of items within the selected category
  //   const filteredItems = foodCategories.filter(category => category.id === categoryId);
  //   setFilteredCategories(filteredItems);
  //   navigation.navigate('ItemDetails', { categoryId });
  // };


  const handleFoodItemPress = async(foodItemId)=>{
    console.log("food item " , foodItemId)
    try{
      //CREATING REFERENCE TO SPECIFIC DOCUMENT IN MENU COLLECTION 
      const menuItemRef = doc(collection(db, "Menu"),foodItemId   ); //,foodItemId
      console.log("Menu Item Ref " , menuItemRef)
      //FETCH DOCUMENT DATA
      const docSnapshot = await getDoc(menuItemRef);
       console.log(docSnapshot  , "Snapshot")
      if(docSnapshot.exists()){
        //IF DOCUMENT IS THERE, use docSnapShot.id TO ACCESS DOCUMENTS FIELD
        const menuItemData = docSnapshot.data();
       
        console.log("Category Data:" , menuItemData);
        navigation.navigate('ItemDetails', {menuItemData });
        

        //NOW YOU CAN USE THE foodItemData TO DISPLAY/PROCESS THE DOCUMENT 
      }else{
        console.log("Document not found");
      }
    }catch(error){
      console.error("Error fetching menu item" , error)
    }
  }
  //{/*event  , item.id*/}
  return (
    <View style={styles.container}>
      <Header/>
      <Text>This is the Menu Screen. Explore our delicious offerings:</Text>
      <FlatList
        data={foodCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleFoodItemPress(item.id)}> 
            <View style={styles.itemContainer}>
            <Text>{item.ItemCategory}</Text>
              <Image style={styles.image} source={{uri:item.Image}}/>
              <Text>{item.Name}</Text>
              <Text>{item.Intro}</Text>
              <Text>Price ZAR {item.Price}</Text>

            </View>
            <TouchableOpacity>
        <Text>Add to cart</Text>
        </TouchableOpacity>  

          </TouchableOpacity>
        )}
      />
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FFEBCD", //blanched Almond color
  },
  itemContainer: {
    padding: 20,
    borderWidth: 3,
    borderColor:  "#654321", //dark brown ,
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  image:{
    width:200,
    height:200,
    marginBottom:10,
    borderRadius: 5,
  },
 
});

export default MenuScreen;
