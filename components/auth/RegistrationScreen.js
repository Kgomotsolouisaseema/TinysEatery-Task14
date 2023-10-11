import { useNavigation } from "@react-navigation/native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {doc , setDoc} from "firebase/firestore";
import {auth , db}from "../config/firebase"
import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { setUser } from "../../redux/authActions";
import {
  View,
  TextInput,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import { Image } from "react-native-web";
// import { CreditCardInput } from "react-native-credit-card-input";

const RegistrationScreen = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [contactNum, setContactNum] = useState("");
  const [address, setAdress] = useState("");
  const [cardHolder, setCardHolder] = useState("")
  const [cardDetails, setCardDetails] = useState("")

  

  // const handleRegistration = async () => {
  //   try {
  //     await createUserWithEmailAndPassword(auth, email, password).then(() => {
  //       console.log("Handle Registration btn clicked", cardDetails); //something about api methods here
  //       navigation.navigate("Home Screen");
  //     });
  //   } catch (error) {
  //     console.log("Error at Registration", error);
  //   }
  // };

  //FUCNTION TO HANDLE REGISTERING USERS AND SAVING THIER DETAILS ON FIRESTORE COLLECTION CALLED "USERS"
  
  
  const handleRegistration =async()=>{
    try{
      const userCredential = await createUserWithEmailAndPassword(auth ,email,password);
      const user = userCredential.user;

      //Store the uses details {name,surname ect} in firestore 
      const userDocRef = doc(db, 'users',user.uid); //created a collection called users and storing the users details there
      await setDoc(userDocRef,{
        email:user.email,
        name: name,
        surname:surname,
        contactNum:contactNum,
        address:address,
        cardHolder:cardHolder,
        cardDetails:cardDetails,
      });
      // dispatch(setUser(user));

      console.log("Handle Registration btn Clicked" , cardDetails);
      // setIsUserLoggedIn(true);
      navigation.navigate('Home');
    }catch(error){
      console.error("Error at Registration" , error);
    }
   }
  

  return (
    <View style={styles.container}>

      <View style={styles.name}>
      <Text >Register Here : </Text>
      <Image
            style={styles.image}
            source={require("../../assets/registerbtn.png")}
          />
      </View>
    
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
       <Text>Card Details :</Text>
      <View style={styles.paymentcard}>
       <TextInput
        placeholder="Card Holders Name"
        value={cardHolder}
        onChangeText={(text) =>setCardHolder(text)}
        style={styles.input}
      />
       <TextInput
        placeholder="Card Number"
        value={cardDetails}
        onChangeText={(text) =>setCardDetails(text)}
        style={styles.input}
      />
      </View>

      <View style={styles.bottombtn}>
      <TouchableOpacity onPress={handleRegistration}>
        <Text style={styles.inputPress}>Register</Text>
      </TouchableOpacity>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#FFEBCD", //blanched Almond color,
  },
  name:{
    fontSize: 35,
    alignItems: "center",
    width: "20%",
    height: 180,
  },
  image:{
    height: 160,
    width: "180%",
    
    
  },
  input: {
    width: "80%",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#654321", //dark brown ,,
    borderRadius: 7,
  },
  inputPress:{
    width: "100%",
    borderColor: "#654321",
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 7,
    
  },
  bottombtn:{
    // width: "40%",
    flex:1 ,
    height: 90,
  },
  
  paymentcard:{
    borderColor: "#654321", //dark brown 
    width: "80%",
    alignContent: "center",
    alignItems: "center"



  }


});

export default RegistrationScreen;
