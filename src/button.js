import React from "react";
import { View, Text, StyleSheet,Button } from "react-native";

export default function Buttons() {
    const onPressLearnMore=()=>{
        console.log("hii")
    }
  return (
    <View>
      <Button
        onPress={onPressLearnMore}
        title="Learn More"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}
