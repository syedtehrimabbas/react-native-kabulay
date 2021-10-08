import React, { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";
import AppContainer from "../../../../core/AppContainer";
import UserContext from "../../../../AuthContaxt";
import { images } from "../../../../assets";
import { AppStyles } from "../../../../theme/styles";
import { BackToolbar } from "../../../../core/BackToolbar";
import { Typography } from "../../../../theme/Typography";
import colors from "../../../../theme/colors";
import { ChakraTypography } from "../../../../theme/ChakraTypography";
import { AppButton } from "../../../../core/AppButton";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { AppDialog } from "../../../../core/AppDialog";

const ContactUs = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [paymentSuccess, PaymentSuccess] = useState(false);

  return (
    <AppContainer
      state={state}
      background={images.bg_small_squares}
      imageStyle={{ tintColor: colors.blueColorLight }}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: "transparent", padding: hp(2) }]}>
          <BackToolbar navigation={navigation} />
          <Text style={[Typography.Normal, { marginStart: 10, fontSize: 22, marginTop: 10 }]}>{"Contact us"}</Text>
          <ScrollView contentContainerStyle={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={{
              backgroundColor: colors.primaryDarkColor,
              width: "90%",
              paddingTop: 30,
              paddingBottom: 30,
              paddingLeft: 15,
              paddingRight: 15,
              borderRadius: 20,
              alignSelf: "center",
              alignItems: "center",
            }}>

              <Text style={[ChakraTypography.Normal, { fontSize: 20, marginBottom: 10 }]}>{"support@kabulay.com"}</Text>

              <View style={[AppStyles.inputContainerStyle, { marginTop: 20, width: "100%" }]}>
                <TextInput
                  style={[ChakraTypography.MediumBold, AppStyles.contactInputStyle]}
                  placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
                  returnKeyType="next"
                  placeholder="Inquiry Type"
                />
              </View>

              <View style={[AppStyles.inputContainerStyle, { marginTop: 20, width: "100%" }]}>
                <TextInput
                  style={[ChakraTypography.MediumBold, AppStyles.contactInputStyle]}
                  placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
                  returnKeyType="next"
                  placeholder="Title"
                />

              </View>

              <View style={[AppStyles.inputContainerStyle, { marginTop: 20, width: "100%", height: 100 }]}>
                <TextInput
                  style={[ChakraTypography.MediumBold, AppStyles.contactInputStyle, {
                    height: "100%", textAlignVertical: "top",
                  }]}
                  numberOfLines={4}
                  placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
                  returnKeyType="done"
                  multiline={true}
                  placeholder="Message"
                />

              </View>

              <AppButton label={"Send"} backgroundColor={colors.pinkLight} onPress={() => {
                PaymentSuccess(true);
              }} styles={{ marginTop: 30, width: "100%" }} />


            </View>
          </ScrollView>
          <AppDialog
            onClose={() => {
              PaymentSuccess(false);
            }}
            onRequestClose={() => {
              PaymentSuccess(false);
            }}
            visibility={paymentSuccess}
            title={"Message is delivered successfully!"}
          />
        </View>
      } />
  );
};
export default ContactUs;
