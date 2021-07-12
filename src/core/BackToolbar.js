import { Image, Text, View } from "react-native";
import React from "react";
import { images } from "../assets";
import { ChakraTypography } from "../theme/ChakraTypography";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BackToolbar = ({navigation}) => {
  return <View style={{ flexDirection: "row", marginTop: 20 }}>
    <TouchableOpacity onPress={()=>navigation.pop()}>
      <Image source={images.back} style={{ width: 20, height: 20, resizeMode: "contain" }} />
    </TouchableOpacity>
    <Text style={ChakraTypography.SmallMedium}>{"Back"}</Text>
  </View>;
};
