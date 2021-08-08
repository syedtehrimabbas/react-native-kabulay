import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-swiper";
import { TouchableOpacity } from "react-native-gesture-handler";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { Footer } from "../../core/Footer";
import colors from "../../theme/colors";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { Typography } from "../../theme/Typography";
import { PERSONAL_DETAILS } from "../../constants/ScreenNames";

const Welcome = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const SliderComponent = () => {
    return <View style={styles.slide1}>
      <Image
        source={images.slider_1}
        style={{ width: 227, height: 192, alignSelf: "center" }} />
      <Text style={[Typography.Normal, { marginStart: 20, fontSize: 22 }]}>{"Deliver work &\n" +
      "Earn More"}</Text>
      <Text style={[ChakraTypography.Normal, { marginStart: 20 }]}>{"Start earning by joining our platform"}</Text>

    </View>;
  };

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer,{backgroundColor:'transparent'}]}>
          <Image
            source={images.logo}
            style={{ width: 144, height: 151, alignSelf: "center" }} />
          <View style={{ position: "absolute", bottom: 30, width: "100%" }}
          >
            <Swiper
              showsButtons={false}
              style={styles.wrapper}
            >
              <SliderComponent />

              <SliderComponent />

            </Swiper>

            <View style={{ flexDirection: "row", alignSelf: "center", marginBottom: 5 }}>
              <TouchableOpacity style={{
                width: 20,
                height: 20,
                borderColor: colors.borderColor,
                borderWidth: 2,
                borderRadius: 5,
                alignSelf: "center",
                margin: 5,
              }} />
              <Text style={[ChakraTypography.Normal, { alignSelf: "center" }]}>{"I have referral code"}</Text>
            </View>

            <GradiantButton
              label="LOGIN WITH GOOGLE"
              onPress={() => navigation.navigate(PERSONAL_DETAILS)}
              backgroundColor={gradiant_colors.pinkGradiant}
            />
            <GradiantButton
              label="LOGIN WITH FACEBOOK"
              onPress={() => navigation.navigate(PERSONAL_DETAILS)}
              styles={{ marginTop: 15 }}
              backgroundColor={gradiant_colors.blueGradiant}
            />
            <Footer />
          </View>

        </View>
      } />
  );
};
export default Welcome;


const styles = StyleSheet.create({
  wrapper: {
    alignSelf: "center",
    height: 320,
  },
  slide1: {
    justifyContent: "center",
  },
});
