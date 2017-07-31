import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default () => {
  return (
    <View style={style.view}>
    </View>
  )
}

const style = StyleSheet.create({
  view: {
    padding: 10,
    height: 80,
    backgroundColor: "#FFF",
    elevation: 1
  }
})