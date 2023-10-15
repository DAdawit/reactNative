import { View, Text, Modal, Button } from "react-native";
import React, { useState } from "react";

export default function Modals() {
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
