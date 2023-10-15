import { StatusBar } from "react-native";
import React, { useState } from "react";

export default function StatusBarComponent() {
  const [status, setStatusBar] = useState(false);
  return (
    <StatusBar
      backgroundColor="indigo"
      barStyle={"light-content"}
      hidden={status}
    />
  );
}
