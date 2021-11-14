import React, { useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import AppContainer from "../../../../core/AppContainer";
import UserContext from "../../../../AuthContaxt";
import { images } from "../../../../assets";
import { AppStyles } from "../../../../theme/styles";
import { BackToolbar } from "../../../../core/BackToolbar";
import { Typography } from "../../../../theme/Typography";
import colors from "../../../../theme/colors";
import { ChakraTypography } from "../../../../theme/ChakraTypography";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AppButton } from "../../../../core/AppButton";
import { REFERRAL_STATUS } from "../../../../constants/ScreenNames";

const ReferralScreen = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [paymentSuccess, PaymentSuccess] = useState(false);
  const [socialIcons] = useState([images.socialIcon.facebook, images.socialIcon.twitter, images.socialIcon.whatsapp, images.socialIcon.instagram, images.socialIcon.email]);

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      imageStyle={{ tintColor: colors.yellow }}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent", padding: hp(2) }]}>
          <BackToolbar navigation={navigation} />
          <Text style={[Typography.Normal, { marginStart: 10, fontSize: 22, marginTop: 10 }]}>{"Refer & Earn"}</Text>
          <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{
              backgroundColor: colors.primaryDarkColor,
              width: "90%",
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
            }}>
              <Image
                source={images.logo}
                style={{ width: 93, height: 98 }} />

              <Text style={[ChakraTypography.SmallBold, {
                fontSize: 15,
                marginBottom: 10,
                marginTop: 20,
                textAlign: "center",
              }]}>{"Earn money by inviting friends\n" +
              "and family on Kabulay"}</Text>

            </View>

            <View style={{
              backgroundColor: colors.primaryDarkColor,
              width: "90%",
              marginTop: 15,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
            }}>
              <Text style={[ChakraTypography.SmallBold, {
                fontSize: 15,
                marginBottom: 10,
                marginTop: 20,
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.87)"
              }]}>{"Share Referral Code"}</Text>

              <View style={{
                flexDirection: "row",
                width: "100%",
                backgroundColor: "rgba(37, 58, 200, 0.3)",
                borderRadius: 8,
                padding: 5,
                paddingStart: 10,
                paddingEnd: 10,
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 20,
              }}>
                <Text style={[ChakraTypography.Normal, {
                  fontSize: 13,
                  textAlign: "center",
                  color: "rgba(255, 255, 255, 0.87)"
                }]}>{"3m612321323...yEbu72pj"}</Text>
                <TouchableOpacity style={{
                  padding: 10,
                  paddingStart: 15,
                  paddingEnd: 15,
                  backgroundColor: colors.pinkLight,
                  borderRadius: 17,
                }}>
                  <Text style={[ChakraTypography.Normal, {
                    fontSize: 10,
                    textAlign: "center",
                  }]}>{"Copy"}</Text>
                </TouchableOpacity>
              </View>

              <AppButton label={"Share"} backgroundColor={colors.pinkLight} onPress={() => {
                PaymentSuccess(true);
              }} styles={{ marginTop: 30, width: "100%" }} />

              <View style={{
                width: "100%",
                borderTopColor: colors.grey,
                borderTopWidth: 1,
                marginTop: 20,
                flexDirection: "row",
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
              }}>
                {socialIcons.map((socialIcon) => {
                  return <TouchableOpacity><Image
                    style={{ width: 25, height: 25, resizeMode: "contain", marginStart: 10, marginEnd: 10 }}
                    source={socialIcon} /></TouchableOpacity>;
                })}
              </View>

              <TouchableOpacity onPress={()=>navigation.navigate(REFERRAL_STATUS)}
                style={{ borderRadius: 10, borderWidth: 2, borderColor: "#2048E8", padding: 10, width: wp(75) }}>
                <Text
                  style={[ChakraTypography.MediumBold, { fontSize: 14,alignSelf:'center'}]}>{"Earned Referrals Status"}</Text>
              </TouchableOpacity>

            </View>
          </ScrollView>

        </View>
      } />
  );
};
export default ReferralScreen;
