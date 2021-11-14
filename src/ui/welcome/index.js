import React from "react";
import { Image, LayoutAnimation, StyleSheet, Text, TextInput, View } from "react-native";
import Swiper from "react-native-swiper";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import { images } from "../../assets";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { Footer } from "../../core/Footer";
import CheckBox from "@react-native-community/checkbox";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { Typography } from "../../theme/Typography";
import { PERSONAL_DETAILS } from "../../constants/ScreenNames";
import colors from "../../theme/colors";

const Welcome = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [haveReferral, HaveReferral] = React.useState(false);
  const [referralCode, ReferralCode] = React.useState("");
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

  const changeReferral = (newValue) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.linear);
    HaveReferral(newValue);
  };

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, { backgroundColor: "transparent" }]}>

          <View style={{ position: "absolute", bottom: 30, width: "100%" }}>

            <Image
              source={images.logo}
              style={{ width: 144, height: 151, alignSelf: "center" }} />

            <Swiper
              showsButtons={false}
              style={styles.wrapper}
            >
              <SliderComponent />

              <SliderComponent />

            </Swiper>

            <View style={{ flexDirection: "row", alignSelf: "center", marginBottom: 5 }}>
              <CheckBox
                disabled={false}
                value={haveReferral}
                onValueChange={(newValue) => changeReferral(newValue)}
                tintColors={{ true: colors.borderColor, false: colors.borderColor }}
              />

              <Text style={[ChakraTypography.Normal, { alignSelf: "center" }]}>{"I have referral code"}</Text>
            </View>

            {haveReferral ? <View style={[AppStyles.inputContainerStyle, { marginTop: 20, marginBottom: 10 }]}>
              <TextInput
                style={[ChakraTypography.MediumRegular, AppStyles.inputStyle]}
                onChangeText={text => ReferralCode(text)}
                value={referralCode}
                placeholderTextColor={"#97A1E5"}
                returnKeyType="done"
                placeholder="Enter Referral Code"
              />
            </View> : null}

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
