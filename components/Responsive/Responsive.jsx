import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Responsive() {
  return (
    <View style={styles.contianer}>
      <View style={styles.box}>
        <Text style={styles.header}>Responsive</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "indigo",
    textDecorationLine: "underline",
  },
  contianer: {
    flex: 1,
    backgroundColor: "plum",
    alignItems: "center",
    justifyContent: "center",
    height: 800,
  },
  box: {
    width: 300,
    height: 300,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});
