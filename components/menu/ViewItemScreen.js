import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import { collection, doc, getDocs,getDoc } from "firebase/firestore";
import {  db } from "../config/firebase";
import { useRoute } from "@react-navigation/native";


const ViewItemScreen = ({route}) => { //{ route }
  // const navigation = useNavigation();
  // const route = useRoute();
  
  const {  menuItemData } = route.params;
  console.log( "The users selction",menuItemData )

  // const {Name , Description , Price}= menuItemData;

  // const [filteredItems, setFilteredItems] = useState([]);

  
// useEffect(()=>{

// }, [doc.id]);

if(!menuItemData) return null;
console.log( "The users selction",menuItemData )


  return (
    <View style={styles.container}>
      <Text>Items in the selected category:</Text>
       <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: menuItemData.Image }} />
            <Text>{menuItemData.Name}</Text>
            <Text>{menuItemData.Description}</Text>
            <Text>Price ZAR {menuItemData.Price}</Text>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFEBCD", //blanched Almond color
  },
  itemContainer: {
    padding: 20,
    borderWidth: 3,
    borderColor: "#654321", //dark brown 
    borderRadius: 10,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 10,
    borderRadius: 9
  },
});

export default ViewItemScreen;
