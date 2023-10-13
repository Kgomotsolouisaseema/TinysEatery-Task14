import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
// import { CardField , useStripe } from "@stripe/stripe-react-native";

const CheckoutScreen = () => {
  // const {confirmPayment}= useStripe();
 

  return (
    <View style={styles.container}>
      <Text>fOOD ITEMS CART</Text>
      {/* <CardField
      postalCodeEnabled={true}
      placeholders={{
        number: '4242 4242 4242 4242',
      }}
      cardStyle={{
        backgroundColor: '#FFFFFF',
        textColor: '#000000',
      }}
      style={{
        width: '100%',
        height: 50,
        marginVertical: 30,
      }}
      onCardChange={(cardDetails) => {
        console.log('cardDetails', cardDetails);
      }}
      onFocus={(focusedField) => {
        console.log('focusField', focusedField);
      }}
    /> */}
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
  },
});

export default CheckoutScreen;
