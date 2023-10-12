import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

const CheckoutScreen = () => {
  // Fetch food categories and items from Firebase
  // const foodData = []; // Retrieve data from Firebase

  return (
    <View style={styles.container}>
      <Text>fOOD ITEMS CART</Text>
      {/* <FlatList
        data={foodData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.category}</Text>
            <Text>fOOD ITEMS CART</Text>
            {/* Render food items within each category */}
    </View>
    // )}
    // /> */}
    // </View>
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
  },
});

export default CheckoutScreen;
