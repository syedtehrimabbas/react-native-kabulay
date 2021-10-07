import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import colors from "../theme/colors";
import LinearGradient from "react-native-linear-gradient";
import { ChakraTypography } from "../theme/ChakraTypography";

export const GradiantButton = ({ label, onPress, backgroundColor, styles, iconSrc, radius }) => {
  return <TouchableOpacity onPress={onPress}
                           style={[{
                             borderRadius: radius !== undefined ? radius : 8,
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
        borderRadius: radius !== undefined ? radius : 8,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: 40,
        shadowColor: "#FD82FE",
      }]}

    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Text style={[ChakraTypography.MediumRegular, {
          color: colors.white,
        }]}>{label}</Text>

        {iconSrc !== undefined ? <Image source={iconSrc} style={{
          width: 15,
          height: 15,
          marginStart: 10,
          resizeMode: "contain",
          tintColor: "white",
        }} /> : null}
      </View>

    </LinearGradient>
  </TouchableOpacity>;
};
