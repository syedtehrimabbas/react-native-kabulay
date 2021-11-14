import React from "react";
import LinearGradient from "react-native-linear-gradient";
import { AppStyles } from "../theme/styles";
import { Text } from "react-native";
import { ChakraTypography } from "../theme/ChakraTypography";

export const GradiantOval = ({width, text, colors }) => {
  return <LinearGradient colors={colors} style={[AppStyles.centerItems, {
    borderRadius: 20,
    marginEnd:5,
    width:width
  }]}>
    <Text style={[ChakraTypography.SmallRegular]}>{text}</Text>

  </LinearGradient>;
};
