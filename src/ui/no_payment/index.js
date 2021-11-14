import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import AppContainer from "../../core/AppContainer";
import { AppStyles } from "../../theme/styles";
import UserContext from "../../AuthContaxt";
import gradiant_colors from "../../theme/gradiant_colors";
import { GradiantButton } from "../../core/GradiantButton";
import { BackToolbar } from "../../core/BackToolbar";
import { Typography } from "../../theme/Typography";
import { images } from "../../assets";
import { ChakraTypography } from "../../theme/ChakraTypography";
import RBSheet from "react-native-raw-bottom-sheet";
import colors from "../../theme/colors";
import { GradiantCircle } from "../../core/GradiantCircle";
import { BANK_ACCOUNT_ENTRY } from "../../constants/ScreenNames";

const PaymentSetup = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const sheetRef = useRef();

  const PaymentItem = ({ gradiantColor, title, subTitle, iconSrc, onPress }) => {
    return <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center", width: "100%" }}>
      <GradiantCircle size={50} colors={gradiantColor} iconSrc={iconSrc} />
      <View>
        <Text style={[ChakraTypography.Normal]}>{title}</Text>
        <Text
          style={[ChakraTypography.SmallMedium, { fontSize: 12, color: colors.lightBlueDark }]}>{subTitle}</Text>
      </View>
    </TouchableOpacity>;
  };

  const onPaymentItemPress = (screenName) => {
    sheetRef.current.close()
    navigation.navigate(screenName)
  };

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer,{backgroundColor:'transparent'}]}>
          <BackToolbar navigation={navigation} />

          <Text style={[Typography.Normal, { marginStart: 15, fontSize: 22, marginTop: 10 }]}>{"Payout\n" +
          "Setting"}</Text>

          <Image source={images.chart}
                 style={{ width: "100%", height: "60%", alignSelf: "center", resizeMode: "contain" }} />

          <Text
            style={[ChakraTypography.SmallMedium, {
              margin: 10,
              alignSelf: "center",
            }]}>{"No payment selected please\nselect your payout options"}</Text>

          <RBSheet
            ref={sheetRef}
            height={250}
            openDuration={300}
            customStyles={{
              container: {
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: colors.primaryColor,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
            }}
          >
            <PaymentItem onPress={()=>onPaymentItemPress(BANK_ACCOUNT_ENTRY)} gradiantColor={gradiant_colors.greenGradiant}
                         title={"Bank Account"}
                         subTitle={"Receive money in your bank account"} iconSrc={images.bank} />
            <PaymentItem onPress={()=>onPaymentItemPress(BANK_ACCOUNT_ENTRY)} gradiantColor={gradiant_colors.blueGradiant} title={"PayPal"}
                         subTitle={"Receive money through paypal"} iconSrc={images.paypal} />
            <PaymentItem onPress={()=>onPaymentItemPress(BANK_ACCOUNT_ENTRY)} gradiantColor={gradiant_colors.yellowGradiant} title={"Western Union"}
                         subTitle={"Receive money through wire transfer"} iconSrc={images.bank} />

          </RBSheet>

          <GradiantButton
            label="Select payment"
            onPress={() => sheetRef.current.open()}
            styles={{ position: "absolute", marginTop: 10, bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />

        </View>
      } />
  );
};
export default PaymentSetup;
