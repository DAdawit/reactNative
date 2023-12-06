import { View, Text, Modal, Button, useWindowDimensions } from "react-native";
import React, { useState } from "react";

export default function Modals() {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [open, setOpen] = useState(false);
  return (
    <View className="my-10">
      <Text className="text-3xl text-center font-bold my-10">Modals</Text>
      <Button title="Open Modal" onPress={() => setOpen(true)} />

      <Modal
        visible={open}
        onRequestClose={() => setOpen(false)}
        animationType="slide"
        presentationStyle="formSheet"
      >
        <Button title="close" onPress={() => setOpen(false)} />
        <View>
          <View className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <View className="h-16 w-full bg-orange-400"></View>
            <View className="h-16 w-full bg-orange-500"></View>
            <View className="h-16 w-full bg-orange-600"></View>
            <View className="h-16 w-full bg-orange-700"></View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, height: 100, backgroundColor: "orange" }} />
            <View style={{ flex: 1, height: 100, backgroundColor: "blue" }} />
          </View>
          <View style={{ flexDirection: "row" }}>
            <View style={{ flex: 1, height: 100, backgroundColor: "green" }} />
            <View style={{ flex: 1, height: 100, backgroundColor: "red" }} />
          </View>
          <Text className="text-center text-green-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
            quibusdam! Cum dolorum officia accusantium tempora odio eos cumque
            debitis illum voluptatibus at? Voluptates, consectetur rem placeat
            ratione temporibus corporis suscipit.
          </Text>
        </View>
      </Modal>
    </View>
  );
}
