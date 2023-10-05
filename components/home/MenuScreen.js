import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { UseSelector } from 'react-redux';
const MenuScreen = ({ navigation }) => {
const isLoggedIn = UseSelector(state => state.auth.isLoggedIn);




  // Dummy data for food categories (replace this with data from your database)
  const foodCategories = [
    { id: 1, category: 'Appetizers' },
    { id: 2, category: 'Main Course' },
    // Add more food categories as needed
  ];

  const handleCategoryPress = (categoryId) => {
    // Navigate to the detailed view of items within the selected category
    navigation.navigate('ItemDetails', { categoryId });
  };

  return (
    <View style={styles.container}>
      {isLoggedIn ?(
         <Text>This is the Menu Screen. Explore our delicious offerings:</Text>
      ) :(
        <Text>Please logg in to Place an Order</Text>
      )}

      <Text>This is the Menu Screen. Explore our delicious offerings:</Text>
      <FlatList
        data={foodCategories}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
            <View style={styles.itemContainer}>
              <Text>{item.category}</Text>
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
    backgroundColor: "yellow"
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
});

export default MenuScreen;
