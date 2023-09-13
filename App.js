import { StyleSheet } from "react-native";
import Header from "./src/header";
import Buttons from "./src/button";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Header" component={Header} /> */}
        <Stack.Screen name="Button" component={Buttons} />
      </Stack.Navigator>/
    </NavigationContainer>
    // <PaperProvider>
    //   {/* <Header /> */}
    //   <Buttons />
    // </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
