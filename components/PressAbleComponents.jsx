import { View, Text, Pressable, Button, Image } from "react-native";
const image = require("../assets/avatar2.jpg");

export default function PressAbleComponents() {
  return (
    <View>
      <Text className="text-2xl font-bold text-center py-10">
        PressAbleComponents
      </Text>
      <Pressable onPress={() => alert("image pressed")}>
        <Image
          source={image}
          style={{ height: 300, width: 300 }}
          className="self-center"
        />
      </Pressable>

      <Pressable onPress={() => alert("text pressed")}>
        <Text className="text-center text-green-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          quibusdam! Cum dolorum officia accusantium tempora odio eos cumque
          debitis illum voluptatibus at? Voluptates, consectetur rem placeat
          ratione temporibus corporis suscipit.
        </Text>
      </Pressable>
      <Pressable onLongPress={() => alert("onLongPress image")}>
        <Image
          source={image}
          style={{ height: 100, width: 100 }}
          className="self-center"
        />
      </Pressable>
      <Pressable onPressOut={() => alert("onPressOut image")} className="mt-3">
        <Image
          source={image}
          style={{ height: 100, width: 100 }}
          className="self-center"
        />
      </Pressable>
    </View>
  );
}
