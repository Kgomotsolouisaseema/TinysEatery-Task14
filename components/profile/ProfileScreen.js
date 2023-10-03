import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';


const ProfileScreen = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: '',
    address: '',
    contactNumber: '',
  });

  useEffect(() => {
    // Fetch user details from Firebase and set in userDetails state
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, fetch user details
        // Update userDetails state with fetched user details
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
      <TextInput
        placeholder="Name"
        value={userDetails.name}
        onChangeText={(text) => setUserDetails({ ...userDetails, name: text })}
        style={styles.input}
      />
      {/* Other input fields for email, address, and contact number */}
      <Button title="Update Profile" onPress={handleProfileUpdate} />
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
