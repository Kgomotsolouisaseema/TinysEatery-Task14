import { useNavigation } from "@react-navigation/native";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from 'react';
import {  db } from "../config/firebase";
import { View, Text, FlatList, StyleSheet, TouchableOpacity,Image } from 'react-native';
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


  const handleCategoryPress = (categoryId) => {
    // Navigate to the detailed view of items within the selected category
    const filteredItems = foodCategories.filter(category => category.id === categoryId);
    setFilteredCategories(filteredItems);
    navigation.navigate('ItemDetails', { categoryId });
  };

  return (
    <View style={styles.container}>
      <Header/>
      {/* {isLoggedIn ?( */}
         <Text>This is the Menu Screen. Explore our delicious offerings:</Text>
      {/* ) :( */}
        <Text>Please logg in to Place an Order</Text>
      {/* )} */}

      <Text>This is the Menu Screen. Explore our delicious offerings:</Text>
      <FlatList
        data={foodCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={(event) => handleCategoryPress(item.id)}>
            <View style={styles.itemContainer}>
            <Text>{item.ItemCategory}</Text>
              <Image style={styles.image} source={{uri:item.Image}}/>
              <Text>{item.Name}</Text>
              {/* event.stopPropagation(); */}
              <Text>{item.Intro}</Text>
              <Text>Price ZAR {item.Price}</Text>
            </View>
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
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  image:{
    width:190,
    height:190,
    marginBottom:10,
  },
 
});

export default MenuScreen;
