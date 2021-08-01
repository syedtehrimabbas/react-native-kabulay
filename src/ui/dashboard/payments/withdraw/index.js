import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../../AuthContaxt";
import AppContainer from "../../../../core/AppContainer";
import { AppStyles } from "../../../../theme/styles";
import { BackToolbar } from "../../../../core/BackToolbar";
import { Typography } from "../../../../theme/Typography";
import { ChakraTypography } from "../../../../theme/ChakraTypography";
import { GradiantButton } from "../../../../core/GradiantButton";
import gradiant_colors from "../../../../theme/gradiant_colors";
import { images } from "../../../../assets";
import { PAYPAL_PAYMENT_SELECTED } from "../../../../constants/ScreenNames";
import colors from "../../../../theme/colors";


const Withdraw = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [activeTabSelect, setActiveTabSelect] = useState(true);
  const [completedTabSelect, setCompletedTabSelect] = useState(false);
  React.useEffect(() => {
    return () => {
    };
  }, []);


  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer, { padding: hp(2) }]}>
          <BackToolbar navigation={navigation} />

          <Text style={[Typography.Normal, { marginStart: 13, marginTop: 10, fontSize: 22 }]}>{"Widthdraw\n" +
          "Money"}</Text>


          <Text style={[ChakraTypography.Normal, {
            marginStart: 20,
            marginTop: 10,
            fontSize: 15,
            alignSelf:'center'
          }]}>{"TRANSFERRING TO"}</Text>

          <Text style={[ChakraTypography.SmallBold, {
            marginStart: 20,
            marginTop: 10,
            fontSize: 15,
            alignSelf:'center'
          }]}>{"Bank Account"}</Text>

          <Text style={[ChakraTypography.Normal, {
            marginStart: 20,
            marginTop: 10,
            fontSize: 15,
            alignSelf:'center'
          }]}>{"Available balance"}</Text>

          <Text style={[ChakraTypography.SmallBold, {
            marginStart: 20,
            marginTop: 10,
            fontSize: 20,
            alignSelf:'center',
            color: colors.pinkLight
          }]}>{"$10.50"}</Text>

          <View style={[AppStyles.inputContainerStyle, { marginTop: 20 }]}>
            <TextInput
              style={[ChakraTypography.SmallBold, AppStyles.inputStyle, {
                color: "rgba(255, 255, 255, 0.87)",
                fontWeight: "bold",
                fontFamily: "ChakraPetch-Bold",
                textAlign:'center',
                fontSize: 20
              }]}
              placeholderTextColor={"rgba(255, 255, 255, 0.87)"}
              returnKeyType="done"
              keyboardType={"numeric"}
              placeholder="Enter amount"
            />

          </View>

          <GradiantButton
            label="Request Withdraw"
            onPress={() => {
              navigation.navigate(PAYPAL_PAYMENT_SELECTED);
            }}
            styles={{ position: "absolute", bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />
        </View>
      } />
  );
};

export default Withdraw;
