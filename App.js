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
const image = require("./assets/avatar2.jpg");
const image2 = "https://picsum.photos/200";
export default function App() {
  return (
    <View className="flex-1 px-2 w-full ">
      <StatusBarComponent />
      <ScrollView className="">
        <ScrollingComponent />
        <Buttons />
        <PressAbleComponents />
        <Modals />
        <ActivityIndicatorComponent />
      </ScrollView>
    </View>
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
