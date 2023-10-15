import { View, Text, Alert } from "react-native";
import React from "react";
import { Button } from "react-native";

const AlertComponent = () => {
  return (
    <View>
      <Text>AlertComponent</Text>
      <Button title="Alert" onPress={() => Alert.alert("alert message")} />
      <Button
        title="Alert2"
        onPress={() =>
          Alert.alert("alert message", "Are you sure you went to cancel !")
        }
      />
      <Button
        title="Alert3"
        onPress={() =>
          Alert.alert("alert message", "Are you sure you went to cancel !", [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
            },
            {
              text: "OK",
              onPress: () => console.log("OK Pressed"),
            },
          ])
        }
      />
    </View>
  );
};

export default AlertComponent;
