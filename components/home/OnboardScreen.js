import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, Image, Pressable } from "react-native";
// import WhiteLogo from "../../assets/Whitelogo.jpg"

function LandPage() {
  const navigation = useNavigation();

  const navigatetoOnboardScreen =() =>{
    navigation.navigate("Menu") //navigate to Onboard Screen page
    console.log("Menu BTN CLICKED")
  };

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        {/* <Text style={styles.appName}> Tinys Eatery </Text> */}
      </View>
      <View style={styles.middleContainer}>
        <Image style={styles.image} source={require("../../assets/Whitelogo.jpg")} />
      </View>
      <View style={styles.bottomContainer}>
        <View style={styles.actionContainer}>
        <Pressable
              style={styles.actionButton}
              title="Head to Sign In"
              onPress={navigatetoOnboardScreen}
            >
              <Text style={styles.signIn}>MENU</Text>
            </Pressable>

        </View>
      
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#FFEBCD", //blanched Almond color
  },
  topContainer: {
    // backgroundColor: "blue",
    height: "20%",
    justifyContent: "center",
    alignItems:"center",  //BRING THE NAME TO THE CENTER 
  },
  appName: {
    // color: "white",
    fontSize: 40,
    fontWeight: "bold",
    // fontFamily: "C",
    alignItems: "center"
  },
  middleContainer: {
    // backgroundColor:"red",
    height: "60%",
  },
  image: {
    width: '100%',
    height:350,
    borderRadius: 80,
  },
  bottomContainer: {
    // backgroundColor: "green",
    height: "30%",
  },
  actionContainer:{
    height: 60,
    marginTop: 10,
    justifyContent: "center", //ALIGNS THE  CONTENT IN THE BUTTON IN THE CENTER ?
    alignItems: "center"  //MOVES THE WHOLE BUTTON TO THE CENTER OF THE PAGE 

  },
  actionButton: {
    backgroundColor: "#654321", //Dark Brown color
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    width: 280, //width of the save button ,
    height: 56,
    marginVertical: 12,
  },

  signIn: {
    color: "#FFF",
    fontSize: 19,
    fontWeight: "bold",
  },
});

export default LandPage;
