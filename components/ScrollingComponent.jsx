import { View, Text, Image, SafeAreaView } from "react-native";
const image = require("../assets/avatar2.jpg");

export default function ScrollingComponent() {
  return (
    <View className="p-16">
      <Text className="text-2xl font-bold py-5">ScrollingComponent</Text>
      <Image
        source={image}
        style={{ height: 300, width: 300 }}
        className="self-center"
      />
      <Text className="text-center text-green-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        quibusdam! Cum dolorum officia accusantium tempora odio eos cumque
        debitis illum voluptatibus at? Voluptates, consectetur rem placeat
        ratione temporibus corporis suscipit.
      </Text>
      <Image
        source={image}
        style={{ height: 300, width: 300 }}
        className="self-center"
      />
      <Text className="text-center text-green-400">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
        quibusdam! Cum dolorum officia accusantium tempora odio eos cumque
        debitis illum voluptatibus at? Voluptates, consectetur rem placeat
        ratione temporibus corporis suscipit.
      </Text>
    </View>
  );
}
