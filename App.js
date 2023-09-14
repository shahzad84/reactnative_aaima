import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/login";
import Signup from "./src/signup";
const Drawer = createDrawerNavigator();
import { nanoid } from "nanoid";
import "react-native-url-polyfill/auto";
import "react-native-get-random-values";
const ScreenA = () => {
  const uniqueKey = nanoid();
  return <Login key={uniqueKey} />;
};

const ScreenB = () => {
  const uniqueKey = nanoid();
  return <Signup key={uniqueKey} />;
};
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Login" component={ScreenA} />
        <Drawer.Screen name="Signup" component={ScreenB} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
