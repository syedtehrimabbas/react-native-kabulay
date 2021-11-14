import React, { useState } from "react";
import { Image, Text, View } from "react-native";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { images } from "../../assets";
import { PAYPAL_PAYMENT_SELECTED, WU_PAYMENT_SELECTED } from "../../constants/ScreenNames";
import { ChakraTypography } from "../../theme/ChakraTypography";
import colors from "../../theme/colors";

const SetupWUnion = ({ navigation }) => {
  const state = React.useContext(UserContext);
  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent" }]}>
        <BackToolbar navigation={navigation} />

          <Text style={[Typography.Normal, { marginStart: 13, marginTop: 10, fontSize: 22 }]}>{"Setup Payout for\n" +
          "Western Union"}</Text>
          <View style={{ height: "60%", alignItems: "center", justifyContent: "center" }}>
            <Image
              source={images.wunion}
              style={{ width: 144, height: 151 }} />

            <Text style={[ChakraTypography.Normal, {
              fontSize: 15,
            }]}>{"Please upload ID Card"}</Text>
            <Text style={[ChakraTypography.Normal, {
              fontSize: 10,
              textAlign:'center',
              color: colors.lightBlueDark,
            }]}>{"Please upload a legal ID Card, Driving Licence\nor Passport"}</Text>
            <GradiantButton
              label="Select Picture"
              iconSrc={images.upload}
              onPress={() => {
                navigation.navigate(WU_PAYMENT_SELECTED);
              }}
              styles={{marginTop:10}}
              backgroundColor={gradiant_colors.pinkGradiant}
            />
          </View>

        </View>
      } />
  );
};
export default SetupWUnion;
