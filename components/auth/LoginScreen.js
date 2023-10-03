import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import {auth} from "../config/firebase"
import { signInWithEmailAndPassword } from 'firebase/auth';


const LoginScreen = () => {
    const navigation =useNavigation();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async() => {
    try{
        await signInWithEmailAndPassword(auth,email,password).than(()=>{
        console.log("Login button Clicked")
        navigation.navigate("HomeScreen")
        })
    }catch(error){
        console.log("Error Logging in " , error)
    }
  };

  

  return (
    <View style={styles.container}>
        
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Pressable title="Register" onPress={handleLogin} />
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

export default LoginScreen;
