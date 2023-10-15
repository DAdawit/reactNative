import { View, Text, ActivityIndicator } from "react-native";
import React from "react";

const ActivityIndicatorComponent = () => {
  return (
    <View>
      <Text>ActivityIndicatorComponent</Text>
      <ActivityIndicator size="large" color="orange" animating={true} />
    </View>
  );
};

export default ActivityIndicatorComponent;
