import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Notification = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="ios-settings" size={25} color="grey" />
    </TouchableOpacity>
  );
};

export default Notification;
