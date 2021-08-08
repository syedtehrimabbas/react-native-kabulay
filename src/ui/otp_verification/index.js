import React, { useState } from "react";
import { Text, View } from "react-native";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import OtpInputs from "../../core/OtpInputs";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { PAYMENT_SETUP } from "../../constants/ScreenNames";
import { images } from "../../assets";

const OTPVerification = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [otp, setOTP] = useState("");
  const [isOtpError, setIsOtpError] = useState(false);

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer,{backgroundColor:'transparent'}]}>
          <BackToolbar navigation={navigation} />
          <Text style={[Typography.Normal, {
            marginStart: 10,
            marginTop: 10,
            fontSize: 22,
          }]}>{"Verify\nMobile Number"}</Text>

          <Text style={[Typography.Normal, {
            margin: 10,
            marginTop:30,
            marginBottom: 0,
            fontSize: 22,
            alignSelf: "center",
          }]}>{"Enter sms-code"}</Text>
          <Text style={[ChakraTypography.Normal, {
            marginBottom: 20,
            alignSelf: "center",
          }]}>{"We’ve sent a short code on ***0090"}</Text>


          <OtpInputs getOtp={(otp) => {
            setOTP(otp);
          }} otpLength={6} otpError={isOtpError} />

          <Text style={[ChakraTypography.Normal, {
            marginTop: 20,
            alignSelf: "center",
          }]}>{"Didn’t get a code?"}</Text>

          <Text style={[ChakraTypography.Normal, {
            marginTop: 5,
            alignSelf: "center",
          }]}>{"Resend code"}</Text>

          <GradiantButton
            label="Submit"
            onPress={() => {
              navigation.navigate(PAYMENT_SETUP);

              // setOTP("");
              // setIsOtpError(true);
            }}
            styles={{ position: "absolute", marginTop: 10, bottom: 20 }}
            backgroundColor={gradiant_colors.blueGradiant}
          />

        </View>
      } />
  );
};
export default OTPVerification;
