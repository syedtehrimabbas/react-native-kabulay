import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { images } from "../../assets";
import { ChakraTypography } from "../../theme/ChakraTypography";
import { PAYMENT_SELECTED, PAYPAL_PAYMENT_SELECTED } from "../../constants/ScreenNames";

const SetupPayPal = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [email, setEmail] = useState("");
  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent" }]}>
        <BackToolbar navigation={navigation} />

          <Text style={[Typography.Normal, { marginStart: 13, marginTop: 10, fontSize: 22 }]}>{"Setup Payout for \n" +
          "Paypal"}</Text>


          <Text style={[ChakraTypography.Normal, {
            marginStart: 20,
            marginTop: 10,
            fontSize: 15,
          }]}>{"Enter PayPal Details"}</Text>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <Image source={images.email}
                   style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
            <TextInput
              style={[ChakraTypography.MediumRegular, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
              }]}
              onChangeText={text => setEmail(text)}
              value={email}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="done"
              placeholder="E-mail"
            />

          </View>

          <GradiantButton
            label="Submit"
            onPress={() => {
              navigation.navigate(PAYPAL_PAYMENT_SELECTED)
            }}
            styles={{ position: "absolute", bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />

        </View>
      } />
  );
};
export default SetupPayPal;
