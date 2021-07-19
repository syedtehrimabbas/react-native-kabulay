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
import { PAYMENT_SELECTED } from "../../constants/ScreenNames";

const BankAccountEntry = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [account, setAccount] = useState("");
  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%" }]}>
          <BackToolbar navigation={navigation} />

          <Text style={[Typography.Normal, { marginStart: 13, marginTop: 10, fontSize: 22 }]}>{"Setup Payout for\n" +
          "Bank Transfer"}</Text>


          <Text style={[ChakraTypography.Normal, {
            marginStart: 20,
            marginTop: 10,
            fontSize: 15,
          }]}>{"Enter Bank Details"}</Text>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <Image source={images.account}
                   style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
            <TextInput
              style={[ChakraTypography.MediumRegular, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
              }]}
              onChangeText={text => setAccount(text)}
              value={account}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="next"
              placeholder="Account #"
            />

          </View>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <Image source={images.hash}
                   style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
            <TextInput
              style={[ChakraTypography.MediumRegular, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
              }]}
              onChangeText={text => setAccount(text)}
              value={account}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="next"
              placeholder="Routing No"
            />
          </View>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <Image source={images.map_pin}
                   style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
            <TextInput
              style={[ChakraTypography.MediumRegular, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
              }]}
              onChangeText={text => setAccount(text)}
              value={account}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="next"
              placeholder="Bank Address"
            />

          </View>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <Image source={images.mobile}
                   style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
            <TextInput
              style={[ChakraTypography.MediumRegular, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
              }]}
              onChangeText={text => setAccount(text)}
              value={account}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="next"
              placeholder="Phone No"
            />

          </View>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <Image source={images.globe}
                   style={{ width: 20, height: 20, resizeMode: "contain", alignSelf: "center" }} />
            <TextInput
              style={[ChakraTypography.MediumRegular, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
              }]}
              onChangeText={text => setAccount(text)}
              value={account}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="next"
              placeholder="Swift Code"
            />

          </View>

          <GradiantButton
            label="Submit"
            onPress={() => {
              navigation.navigate(PAYMENT_SELECTED)
            }}
            styles={{ position: "absolute", bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />

        </View>
      } />
  );
};
export default BankAccountEntry;
