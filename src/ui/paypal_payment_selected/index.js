import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { ChakraTypography } from "../../theme/ChakraTypography";
import colors from "../../theme/colors";
import { GradiantCircle } from "../../core/GradiantCircle";
import { images } from "../../assets";
import { SETUP_PAYPAL, SETUP_WUNION } from "../../constants/ScreenNames";

const PayPalPaymentSelected = ({ navigation }) => {
  const state = React.useContext(UserContext);

  const PaymentItem = ({ selected, gradiantColor, title, subTitle, iconSrc, onPress }) => {
    return <TouchableOpacity disabled={selected} onPress={onPress} style={{
      backgroundColor: selected ? colors.primaryColor : "transparent",
      flexDirection: "row",
      alignItems: "center",
      width: "90%",
      borderRadius:20
    }}>
      <GradiantCircle size={40} colors={gradiantColor} iconSrc={iconSrc} />
      <View>
        <Text style={[ChakraTypography.Normal]}>{title}</Text>
        <Text
          style={[ChakraTypography.SmallMedium, { fontSize: 12, color: colors.lightBlueDark }]}>{subTitle}</Text>
      </View>
    </TouchableOpacity>;
  };


  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent" }]}>
        <BackToolbar navigation={navigation} />

          <Text style={[Typography.Normal, { marginStart: 15, fontSize: 22, marginTop: 10 }]}>{"Payout\n" +
          "Setting"}</Text>

          <View style={{ height: "60%", alignItems: "center", justifyContent: "center" }}>
            <PaymentItem onPress={() => {}}
                         selected={false}
                         gradiantColor={gradiant_colors.greenGradiant}
                         title={"Bank Account"}
                         subTitle={"Receive money in your bank account"} iconSrc={images.bank} />
            <PaymentItem selected={true} onPress={() => {}}
                         gradiantColor={gradiant_colors.blueGradiant} title={"PayPal"}
                         subTitle={"Receive money through paypal"} iconSrc={images.paypal} />
            <PaymentItem onPress={() => navigation.navigate(SETUP_WUNION)}
                         selected={false}
                         gradiantColor={gradiant_colors.yellowGradiant} title={"Western Union"}
                         subTitle={"Receive money through wire transfer"} iconSrc={images.bank} />

          </View>
        </View>
      } />
  );
};
export default PayPalPaymentSelected;
