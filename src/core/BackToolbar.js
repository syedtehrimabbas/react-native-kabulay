import { Image, Text, View } from "react-native";
import React from "react";
import { images } from "../assets";
import { ChakraTypography } from "../theme/ChakraTypography";
import { TouchableOpacity } from "react-native-gesture-handler";

export const BackToolbar = ({navigation}) => {
  return <View style={{ flexDirection: "row", marginTop: 30 }}>
    <TouchableOpacity onPress={()=>navigation.pop()}>
      <Image source={images.back} style={{ width: 25, height: 25, resizeMode: "contain" }} />
    </TouchableOpacity>
    <Text style={[ChakraTypography.SmallBold,{alignSelf:'center',fontSize: 15}]}>{"Back"}</Text>
  </View>;
};
