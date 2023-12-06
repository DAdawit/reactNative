import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Images from "./components/Images";
import BackgroundImages from "./components/BackgroundImages";
import ScrollingComponent from "./components/ScrollingComponent";
import Buttons from "./components/Buttons";
import PressAbleComponents from "./components/PressAbleComponents";
import Modals from "./components/Modals";
import StatusBarComponent from "./components/StatusBarComponent";
import ActivityIndicatorComponent from "./components/ActivityIndicatorComponent";
import AlertComponent from "./components/AlertComponent";
import Home from "./components/Styling/Home";
import Box2 from "./components/Styling/Layouts/Box2";
import All from "./components/Styling/Layouts/All";
import Responsive from "./components/Responsive/Responsive";

const image = require("./assets/avatar2.jpg");
const image2 = "https://picsum.photos/200";

export default function App() {
  return (
    <View className="flex-1 px-2 w-full">
      <StatusBarComponent />
      <ScrollView>
        {/* <All /> */}
        <Responsive />
        {/* <Home />
        <ScrollingComponent />
        <Buttons />
        <PressAbleComponents />
        <Modals />
        <ActivityIndicatorComponent />
        <AlertComponent /> */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
