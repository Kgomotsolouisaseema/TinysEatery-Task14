import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';
// import {auth , onAuthStateChanged} from  "../config/firebase"
import { onAuthStateChanged,auth } from 'firebase/auth';

const ProfileScreen = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    contactNumber: '',
  });

  useEffect(() => {
    // Fetch user details from Firebase and set in userDetails state
    const unsubscribe = onAuthStateChanged(auth , (user) => {
      if (user) {
        // User is signed in, fetch user details
        // Update userDetails state with fetched user details
      }else{
        Alert.alert("Welcome back :",user ,"Have a Happy Meal")
      }
    });

    return () => unsubscribe();
  }, []);

  const handleProfileUpdate = () => {
    // Update user details in Firebase
    // Handle update success or error
  };

  return (
    <View style={styles.container}>
      <Text>This is the Profile Screen where the users will have thier detailes here</Text>
      <TextInput
        placeholder="Name"
        value={userDetails.name}
        onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
        style={styles.input}
      />
      {/* Other input fields for email, address, and contact number */}
      <Pressable title="Update Profile" onPress={handleProfileUpdate} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default ProfileScreen;
