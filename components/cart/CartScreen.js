import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const CartScreen = () => {
  // Fetch food categories and items from Firebase
  const foodData = []; // Retrieve data from Firebase

  return (
    <View style={styles.container}>
      <FlatList
        data={foodData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.category}</Text>
            {/* Render food items within each category */}
          </View>
        )}
      />
      <Text>this is the cart screen where the user will see the items they have ordered on this screen before procedding to checkout </Text>
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
