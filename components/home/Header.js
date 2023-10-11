

import React from "react";
import { useState } from "react";
import { View, StyleSheet, Modal, Text, TouchableOpacity } from "react-native";
import { Icon, withBadge } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { auth } from "../config/firebase";
import { useSelector } from "react-redux";

const Header =()=> {
    const navigation = useNavigation();
    const [showCard, setShowCard] = useState(false);
    const cartItems =  useSelector((state) => state.CartSlice);
    const quantity =  cartItems ? cartItems.length : 0;
    console.log(quantity)
    const CartIconWithBadge = withBadge(quantity)(Icon);
   
    const handleCartNav = () => {
        navigation.navigate('Cart');
    }
    const handleShowCard = () => {
        setShowCard(true);
    }
    //Handle button events
    const handleClose = () => {
        setShowCard(false);
    }
    const handleProfile = ()=>{
        console.log("Profile btn clicked ")
        navigation.navigate("Profile")
    }
    const handleSignOut = async () => {
        try {
            await auth.signOut(); // Sign the user out
            console.log('User signed out successfully');
          } catch (error) {
            console.error('Error signing out:', error);
          }
        navigation.navigate('SignIn');
    }
    return (
        <>
            <View style={styles.container}>
                <View style={styles.drawer}>
                    <Icon
                        type="material-community"
                        name="menu"
                        color={'black'}
                        size={35}
                        onPress={handleShowCard}
                    />
                </View>
                <View style={styles.resturantname}>
                    <Text style={styles.textName}>TINY MENU</Text>
                </View>
                <View style={styles.cartIcon}>
                    <CartIconWithBadge
                        type="material-community"
                        name="cart"
                        size={35}
                        color={'orange'}
                        onPress={handleCartNav}
                    />
                </View>
            </View>
            <View style={styles.actioncontainer}>
                <Modal visible={showCard} onRequestClose={handleClose}>
                    <View style={styles.card}>
                        <TouchableOpacity>
                            <Text style={styles.text}>Account Information</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Cart</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Checkout</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={styles.text}>Support</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleProfile}>
                            <Text style={styles.text}>Profile</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleClose}>
                            <Text style={styles.text}>Close</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleSignOut} style={styles.signOutBtn}>
                            <Text style={styles.text}>Sign Out</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 5,
        backgroundColor: '#FFEBCD',
        paddingLeft: 5,
        marginRight: 7,
        paddingRight: 10,
        width: '100%',
    },
    resturantname:{
        flex: 1,
        justifyContent: "center" ,
        alignItems: "center",
        paddingTop: 10,
    },
    textName:{
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: "black",
    },
    cartIcon:{
        justifyContent: "flex-start", 
        alignItems: "center",
        paddingTop: 10,
        paddingRight: 10,
    },
    drawer:{
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 15,
    },

    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 15,
        color: 'black',
    },
    card: {
        flex: 1,
        width: 250,
        height: 250,
        backgroundColor:"#FFEBCD",
        borderRadius: 10,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    signOutBtn: {
        marginTop: 60,
    },
});


export default Header;
