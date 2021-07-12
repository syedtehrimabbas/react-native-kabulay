import React from "react";
import { Text, TouchableOpacity } from "react-native";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { ChakraTypography } from "../theme/ChakraTypography";

export const GradiantButton = ({ label, onPress, backgroundColor, styles }) => {
  return <TouchableOpacity onPress={onPress}
                           style={[{
                             borderRadius: 8,
                             width: "90%",
                             backgroundColor: "red",
                             alignSelf: "center",
                             height: 40,
                           }, styles]}
                           activeOpacity={.7}
  >
    <LinearGradient
      colors={backgroundColor}
      style={[{
        borderRadius: 8,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        shadowColor: "#FD82FE",
      }]}

    >
      <Text style={[ChakraTypography.MediumRegular, {
        color: colors.white,
      }]}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>;
};
