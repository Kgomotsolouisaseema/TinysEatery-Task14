import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  CheckBox,
  FlatList,
  Text,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../home/Header";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

function DessertMenu() {
  const navigation = useNavigation();
  const [drinksMenu, setDrinksMenu] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  useEffect(() => {
    const drinksMenu = async () => {
      try {
        const categoriesSnapshot = await getDocs(collection(db, "Drinks"));
        const catergoryData = categoriesSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setDrinksMenu(catergoryData);

        // setSelectedItems(catergoriesData);

        console.log("Breakfast Menu Items", catergoryData);
      } catch (error) {
        console.error("Error fetching food category:", error);
      }
    };
    drinksMenu();
  }, []);

  // FUNCTION TO HANDLE  / I WANT THEM TO LIKE THE ITEM/WISHLIST VIBES
  const handleCheckboxToggle = (foodItemId) => {
    // Handle checkbox state changes and update selectedItems array
    if (selectedItems.includes(foodItemId)) {
      setSelectedItems(selectedItems.filter((id) => id !== foodItemId));
    } else {
      setSelectedItems([...selectedItems, foodItemId]);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.topContainer}>
        <FlatList
          data={drinksMenu}
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
                {/* <TouchableOpacity onPress={() => handleAddToCart(item.id)}>
                <Image
                  style={styles.orderIcon}
                  source={require("../../assets/shopping.png")}
                />
              </TouchableOpacity> */}
              </View>
              <View>
                <CheckBox
                  style={styles.checkBox}
                  value={selectedItems.includes(item.id)}
                  onValueChange={() => handleCheckboxToggle(item.id)}
                />
              </View>
            </View>
          )}
        />
      </View>
    </View>
  );
}

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
    width: 300,
    height: 300,
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

export default DessertMenu;
