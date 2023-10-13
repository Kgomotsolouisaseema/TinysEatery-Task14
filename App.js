import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import store from "./redux/store";
// import { Provider } from "react-redux";
import { Provider as StoreProvider } from "react-redux";
import AppNavigator from "./components/AppNavigator";
import { AppRegistry } from "react-native";
import { PaperProvider } from "react-native-paper";
import { name as appName } from "./app.json";
// import { StripeProvider } from "@stripe/stripe-react-native";

export default function App() {
  // const [publishableKey ,setPublishableKey]= useState(" ");

  // const fetchPublishableKey = async () => {
  //   const key = await fetchKey(); // fetch key from your server here
  //   setPublishableKey(key);
  // };

  // useEffect(() => {
  //   fetchPublishableKey();
  // }, []);





  return (
    // <StripeProvider
    //   publishableKey="your-publishable-key"
    //   urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
    //   // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    // // >
      <StoreProvider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <AppNavigator />
          </NavigationContainer>
        </PaperProvider>
      </StoreProvider>
    // </StripeProvider> */}
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
