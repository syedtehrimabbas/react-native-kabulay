import React, { useState } from "react";
import { FlatList, LayoutAnimation, Text, View,TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../../../AuthContaxt/index";
import { AppStyles } from "../../../../../theme/styles";
import AppContainer from "../../../../../core/AppContainer";
import { BackToolbar } from "../../../../../core/BackToolbar";
import { Typography } from "../../../../../theme/Typography";
import colors from "../../../../../theme/colors";
import { ChakraTypography } from "../../../../../theme/ChakraTypography";
import { GradiantOval } from "../../../../../core/GradiantOval";
import gradiant_colors from "../../../../../theme/gradiant_colors";

const ReferralStatus = ({ navigation }) => {
  const state = React.useContext(UserContext);
  const [activeTabSelect, setActiveTabSelect] = useState(true);
  const [completedTabSelect, setCompletedTabSelect] = useState(false);
  React.useEffect(() => {
    return () => {
    };
  }, []);

  const onTabSelect = (tabName) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);

    switch (tabName) {
      case "active":
        setActiveTabSelect(true);
        setCompletedTabSelect(false);
        break;
      case "completed":
        setCompletedTabSelect(true);
        setActiveTabSelect(false);
        break;
    }

  };
  return (
    <AppContainer
      state={state}
      children={
        <View style={[AppStyles.columnContainer, { height: "100%", backgroundColor: colors.yellow, padding: hp(2)}]}>
          <BackToolbar navigation={navigation} />
          <Text style={[Typography.Normal, { marginStart: 10, fontSize: 22, marginTop: 10 }]}>{"Referral Status"}</Text>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <Text style={[ChakraTypography.Normal, {
              fontSize: 16,
              color: colors.primaryDarkColor,
              marginTop: 10,
            }]}>{"Referral Earning: 10AF"}</Text>
            <Text style={[ChakraTypography.Normal, {
              fontSize: 16,
              color: colors.primaryDarkColor,
              marginTop: 10,
              marginBottom: 10,
            }]}>{"Total Referrals: 5"}</Text>

            {[0,10].map(()=>{
              return <View style={{
                borderRadius: 15,
                backgroundColor: colors.primaryDarkColor,
                borderWidth: 2,
                borderColor: colors.primaryColor,
                width: "100%",
                padding: 10,
                marginTop:10
              }}>
                <Text style={[ChakraTypography.Normal, {
                  fontSize: 16,
                  color: colors.white,
                  marginTop: 5,
                }]}>{"Abdul Khalid"}</Text>

                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={[ChakraTypography.Normal, {
                    fontSize: 14,
                    color: "rgba(255, 255, 255, 0.87)",
                    marginTop: 5
                  }]}>{"abdulkhalid@gmail.com"}</Text>
                  <GradiantOval colors={gradiant_colors.greenGradiant} text={"Approved"} width={90} />
                </View>
                <Text style={[ChakraTypography.Normal, {
                  fontSize: 14,
                  color: "rgba(255, 255, 255, 0.87)",
                  marginTop: 5,
                }]}>{"+183473843783"}</Text>
              </View>
            })}
          </View>
        </View>
      } />
  );
};

export default ReferralStatus;
