import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { collection, doc, getDocs,where,query } from "firebase/firestore";
import {  db } from "../config/firebase";


const ViewItemScreen = ({ route }) => {
  const navigation = useNavigation();
  
  const { categoryId } = route.params;
  console.log(categoryId , "The users selction")

  const [filteredItems, setFilteredItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const q = query(collection(db, "Menu"), where("ItemCategory" , "==" , categoryId));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc)=>{
          console.log(doc.id , "=>" , doc.data());
        })
        const itemsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setFilteredItems(itemsData);
      } catch (error) {
        console.error("Error fetching menu items: ", error);
      }
    };

    fetchItems();
  }, [categoryId]);

  return (
    <View style={styles.container}>
      <Text>Items in the selected category:</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.Image }} />
            <Text>{item.Name}</Text>
            <Text>{item.Description}</Text>
            <Text>Price ZAR {item.Price}</Text>
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
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default ViewItemScreen;
