import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.bgGreen]}>
        <Text style={styles.text}>Home</Text>
      </View>
      <View style={[styles.box, styles.bgIndigo, styles.boxShadow]}>
        <Text style={styles.text}>Hommmeee</Text>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
    padding: 60,
    // display: "flex",
  },

  box: {
    width: "100%",
    height: "auto",
    // padding: 20,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderWidth: 2,
    borderColor: "pink",
    borderRadius: 20,
  },
  bgGreen: {
    backgroundColor: "green",
  },
  bgIndigo: {
    backgroundColor: "indigo",
  },
  text: {
    color: "white",
    backgroundColor: "pink",
    borderRadius: 20,
    padding: 20,
    display: "flex",
    justifyContent: "center",
  },
  boxShadow: {
    elevation: 10,
    shadowColor: "white",
    shadowOffset: {
      width: 8,
      height: 8,
    },
    shadowOpacity: 0.9,
    shadowOffset: 4,
  },
});
