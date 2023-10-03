import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { View, TextInput, StyleSheet, Pressable } from "react-native";
import { CreditCardInput } from "react-native-credit-card-input";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAdress] = useState("");
  const [cardDetails, setCardDetails] = useState({
    valid: false,
    values: {
      number: "",
      expiry: " ",
      cvc: "",
      type: "",
      name: "",
      postalCode: "",
    },
    status: {
      number: "incomplete",
      expiry: "incomplete",
      cvc: "incomplete",
      name: "incomplete",
      postalCode: "incomplete",
    },
  });

  const handleRegistration = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(() => {
        console.log("Handle Registration btn clicked", cardDetails); //something about api methods here
        navigation.navigate("Home Screen");
      });
    } catch (error) {
      console.log("Error at Registration", error);
    }
  };

  //PayPal will be the payment gateway ,will make an API call to set up this functionality 
  const handleCardDetailsChange = (form) => {
    console.log(form);
    setCardDetails(form);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Surname"
        value={surname}
        onChangeText={(text) => setSurname(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Contact Number"
        value={contactNum}
        onChangeText={(text) => setContactNum(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Address"
        value={address}
        onChangeText={(text) => setAdress(text)}
        style={styles.input}
      />
      {/* <TextInput
        placeholder="Card Details"
        value={cardDetails}
        onChangeText={(text) =>setCarddetails(text)}
        style={styles.input}
      /> */}
      <CreditCardInput onChange={handleCardDetailsChange} />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={(text) => setEmail(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />
      <Pressable title="Register" onPress={handleRegistration} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
});

export default RegistrationScreen;
