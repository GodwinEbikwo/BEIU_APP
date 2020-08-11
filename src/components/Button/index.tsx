import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

interface buttonProps {
  title: string; // buttonTitle;
  titleColor?: string; // color of the title of the button
  color?: string; // color of the button. Optional;
  bColor?: string; // borderColor of the button. Optional;
  radius?: number;
  accessibilityLabel?: string; // self explanatory ;
  disabled?: boolean; // button is true or false;
  onPress: () => void; // fucntion of the button;
}

const Button = (props: buttonProps) => {
  const {
    title,
    titleColor,
    color,
    bColor,
    onPress,
    accessibilityLabel,
    disabled,
    radius,
  } = props;
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={[
          styles.button,
          {
            backgroundColor: color || "transparent",
            borderColor: bColor || "transparent",
            borderRadius: radius,
          },
        ]}
      >
        <Text style={[styles.buttonText, { color: titleColor || "blue" }]}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
};

export default Button;
