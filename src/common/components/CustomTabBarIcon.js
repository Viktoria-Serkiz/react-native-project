import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const CustomTabBarIcon = ({ iconName, focused, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ alignItems: "center", marginTop: 10 }}
  >
    <Ionicons name={iconName} size={24} color={focused ? "black" : "blue"} />
    <Text style={{ color:  "black" }}></Text>
  </TouchableOpacity>
);

export default CustomTabBarIcon;
