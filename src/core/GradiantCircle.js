import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { AppStyles } from "../theme/styles";
import { Image, Text } from "react-native";
import { ChakraTypography } from "../theme/ChakraTypography";

export const GradiantCircle = ({ size, colors, text, iconSrc, iconSize }) => {
  return <LinearGradient colors={colors} style={[AppStyles.centerItems, {
    width: size,
    height: size,
    borderRadius: size / 2,
    margin: 10,
  }]}>
    {text !== undefined && text.length > 0 ? <Text style={[ChakraTypography.SmallRegular]}>{text}</Text> : null}
    {iconSrc !== undefined ? <Image source={iconSrc} style={{
      width: iconSize !== undefined ? iconSize : 15,
      height: iconSize !== undefined ? iconSize : 15,
      resizeMode: "contain",
      tintColor: "white",
    }} /> : null}
  </LinearGradient>;
};
