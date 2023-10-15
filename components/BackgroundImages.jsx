import { View, Text, ImageBackground } from "react-native";
const image = require("../assets/avatar2.jpg");

export default function BackgroundImages() {
  return (
    <View>
      <ImageBackground
        source={image}
        className="flex-1 justify-center items-center w-full"
      >
        <Text className="text-white justify-center items-center"></Text>
      </ImageBackground>
    </View>
  );
}
