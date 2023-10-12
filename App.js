import React from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import  store from "./redux/store"
// import { Provider } from "react-redux";
import { Provider as StoreProvider } from 'react-redux';
import AppNavigator from "./components/AppNavigator";
import { AppRegistry } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
// import App from './src/App';



export default function App() {
  return (
     <StoreProvider store={store}>
    <PaperProvider>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
      </PaperProvider>
      </StoreProvider>
    
  );
}
AppRegistry.registerComponent(appName, () => App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
