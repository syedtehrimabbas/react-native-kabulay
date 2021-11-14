import React from "react";
import { Image, View, PixelRatio } from "react-native";
import { AppStyles } from "../../theme/styles";
import colors from "../../theme/colors";
import { images } from "../../assets";

const Splash = () => {
  return (
    <View style={[AppStyles.columnContainer, AppStyles.centerItems, {
      backgroundColor: colors.primaryDarkColor
    }]}>
      <Image
        source={images.logo}
        style={{ width: 144, height: 151 }} />
    </View>
  );
};
export default Splash;
