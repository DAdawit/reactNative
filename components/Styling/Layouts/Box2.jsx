import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Box2({ children, style }) {
  return (
    <View style={[styles.box, style]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    // flex: 1,
    width: "auto",
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});