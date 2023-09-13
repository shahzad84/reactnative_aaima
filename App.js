import { StyleSheet, Text, View } from "react-native";
import Header from "./src/header";
import Buttons from "./src/button";
import * as React from "react";
import { PaperProvider } from "react-native-paper";
export default function App() {
  return (
    <PaperProvider>
      {/* <Header /> */}
      <Buttons />
    </PaperProvider>
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
