import { View, Button } from "react-native";
import React from "react";

export default function Buttons() {
  return (
    <View className="px-5 grid gap-2">
      <Button
        title="Hello mother fucker"
        color="orange"
        onPress={() => alert("hello mother sucker")}
      />
      <Button
        title="Hello mother fucker"
        color="orange"
        onPress={() => alert("disabled button")}
        disabled
      />
    </View>
  );
}
