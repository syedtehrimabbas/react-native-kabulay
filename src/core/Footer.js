import React from "react";
import { Text } from "react-native";
import { ChakraTypography } from "../theme/ChakraTypography";
import colors from "../theme/colors";

export const Footer = () => {
  return <Text style={[ChakraTypography.SmallMedium, {
    marginStart: 60,
    marginEnd: 60,
    color: colors.lightDark,
    marginTop: 10,
    alignSelf: "center",
    textAlign: "center",
  }]}>{"By login you agree to our "}<Text style={[ChakraTypography.SmallMedium]}>{"Terms and Conditions "}</Text>
    <Text style={[ChakraTypography.SmallMedium, {
      color: colors.lightDark,
    }]}>{"And"}</Text>
    <Text style={[ChakraTypography.SmallMedium]}>{" Privacy Policy"}</Text>
  </Text>;
};
