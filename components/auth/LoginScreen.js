import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { View, TextInput, StyleSheet,TouchableOpacity, Text} from 'react-native';
import {auth} from "../config/firebase"
import { onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
// import { useDispatch } from 'react-redux';
// import {loginUser} from "../../redux/authActions"

const LoginScreen = () => {
  const navigation =useNavigation();

  // const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        //if user did not signed in ,navigate to Home Screen
        // navigation.navigate("Menu")
      }else{
        console.log("user signed in ")
      }
    });
     //clean up subscription when component mounts
     return () => unsubscribe();
  },[])

  const handleLogin = async() => {
    try{
        await signInWithEmailAndPassword(auth,email,password).than(()=>{
        console.log("Login button Clicked")
        // dispatch(loginUser());
        navigation.navigate("Menu")
        })
    }catch(error){
        console.log("Error Logging in " , error)
    }
  };

  const handleSignUp = async () =>{
    navigation.navigate("Registration")
   
    console.log('SignUp btn clicked , navigating to Registration Page')
  };

  const handleForgotPassword = () =>{
    console.log('password forgot')
  }



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
      <TouchableOpacity title="login" onPress={handleLogin} >
      <Text style={styles.input}>Log In </Text>
      </TouchableOpacity>
      
      <View style={styles.actionContainer}>
           
           
             <View style={styles.signUpOpt}>
               <Text style={styles.noAccText}>Haven't Signed Up?</Text>
               <TouchableOpacity onPress={handleSignUp}>
                 <Text style={styles.signUpText}>Sign Up</Text>
               </TouchableOpacity>
             </View>
             <View style={styles.forgotPassWordCont}>
               <TouchableOpacity onPress={handleForgotPassword}>
                 <Text style={styles.forgotPassWordText}>Forgot Password</Text>
               </TouchableOpacity>
             </View>
           </View>

         </View>
      
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"#FFEBCD",
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 3,
    borderColor: "#654321", //dark brow border color
    borderRadius: 7,
  },
 
});

export default LoginScreen;
