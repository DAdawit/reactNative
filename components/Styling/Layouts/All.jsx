import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Box2 from "./Box2";

const All = () => {
  return (
    <View>
      <Text style={styles.header}>Layouts</Text>
      <View style={styles.container}>
        <Box2 style={{ backgroundColor: "#8bc2ff", alignSelf: "flex-start" }}>
          Box
        </Box2>
        <Box2 style={{ backgroundColor: "#8bc8cc", alignSelf: "flex-end" }}>
          Box
        </Box2>
        <Box2 style={{ backgroundColor: "orange", alignSelf: "center" }}>
          Box
        </Box2>
        <Box2 style={{ backgroundColor: "orange", alignSelf: "stretch" }}>
          Box
        </Box2>
        <Box2 style={{ backgroundColor: "orange", alignSelf: "auto" }}>
          Box
        </Box2>
        <Box2 style={{ backgroundColor: "orange" }}>Box</Box2>
        <Box2 style={{ backgroundColor: "orange" }}>Box</Box2>
      </View>

      <View style={styles.container2}>
        <Box2 style={{ backgroundColor: "#8bc2ff" }}>Box1</Box2>
        <Box2 style={{ backgroundColor: "green" }}>Box2</Box2>
        <Box2 style={{ backgroundColor: "orange" }}>Box3</Box2>
        <Box2 style={{ backgroundColor: "purple" }}>Box4</Box2>
        <Box2 style={{ backgroundColor: "blue" }}>Box5</Box2>
        <Box2 style={{ backgroundColor: "pink" }}>Box6</Box2>
        <Box2 style={{ backgroundColor: "indigo" }}>Box7</Box2>
      </View>
      <Text>shrink</Text>
      <View style={styles.container3}>
        <Box2 style={{ backgroundColor: "#8bc2ff", flexShrink: 1 }}>
          Box1 shrink
        </Box2>
        <Box2 style={{ backgroundColor: "green", flexShrink: 2 }}>
          Box2 shrink
        </Box2>
      </View>
      <Text>flex grow</Text>

      <View style={styles.container4}>
        <Box2 style={{ backgroundColor: "#8bc2ff", width: "100%" }}>Box1</Box2>
        <Box2 style={{ backgroundColor: "green" }}>Box2</Box2>
        <Box2 style={{ backgroundColor: "orange" }}>Box3</Box2>
        <Box2 style={{ backgroundColor: "purple" }}>Box4</Box2>
        <Box2 style={{ backgroundColor: "blue" }}>Box5</Box2>
        <Box2 style={{ backgroundColor: "pink", flexGrow: 1 }}>Box6</Box2>
        <Box2 style={{ backgroundColor: "indigo", flexGrow: 1 }}>Box7</Box2>
      </View>
    </View>
  );
};

export default All;

const styles = StyleSheet.create({
  header: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    color: "indigo",
    textDecorationLine: "underline",
  },
  container: {
    flex: 1,
    flexDirection: "col",
    // justifyContent: "space-evenly",
    alignItems: "flex-end",
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
    borderWidth: 8,
    borderColor: "red",
    height: 800,
    width: "100%",
  },
  container2: {
    // flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 8,
    borderColor: "red",
    height: 400,
    width: "100%",
    justifyContent: "center",
    // rowGap: 10,
    // columnGap: 10,
    gap: 20,
  },
  container3: {
    flex: 1,
    flexDirection: "row",
    // flexWrap: "wrap",

    alignItems: "flex-start",
    borderWidth: 3,
    borderColor: "red",
    height: 400,
    width: 200,
  },
  container4: {
    flex: 1,
    // flexDirection: "col",
    // flexWrap: "wrap",

    alignItems: "flex-start",
    borderWidth: 3,
    borderColor: "red",
    height: 700,
    width: "100%",
  },
});
