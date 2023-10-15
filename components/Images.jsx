import React from "react";
import { Image, View } from "react-native";
const image = require("../assets/avatar2.jpg");
const image2 = "https://picsum.photos/200";
const Images = () => {
  return (
    <View>
      <Image source={image} style={{ width: 100, height: 100 }} />
      <Image source={{ uri: image2 }} style={{ width: 100, height: 100 }} />
    </View>
  );
};

export default Images;
