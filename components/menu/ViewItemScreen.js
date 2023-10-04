import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


const ViewItemScreen = ({route}) => {
  const {categoryId} = route.params; //Extracting catergory iD FROM  ROUTE PARAMS

  //REPLACE WITH ACTUAL IMAGES,ITEM DETAILS (PRICES ,,SIZES PULLED ECT) PULLED FORM FIREBASE
  const foodItems = [
    {id : 1, categoryId: 1 , name: 'Item 1'},
    {id : 2, categoryId: 2 , name: 'Item 2'},
    
  ]

  const filteredItems = foodItems.filter((item)=> item.categoryId === categoryId);


  return (
    <View style={styles.container}>
      <Text>Items in the selected catergory:</Text>
      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text>{item.name}</Text>
            {/* Display item details here*/ }
            
          </View>
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
  },
  itemContainer: {
    padding: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    margin: 10,
  },
});

export default ViewItemScreen;
