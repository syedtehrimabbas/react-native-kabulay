import React, { useState } from "react";
import { FlatList, Image, LayoutAnimation, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../AuthContaxt/index";
import { AppStyles } from "../../../theme/styles";
import colors from "../../../theme/colors";
import AppContainer from "../../../core/AppContainer";
import { images } from "../../../assets";
import { ChakraTypography } from "../../../theme/ChakraTypography";
import { GradiantOval } from "../../../core/GradiantOval";
import gradiant_colors from "../../../theme/gradiant_colors";
import { TASK_DETAILS, WITHDRAW } from "../../../constants/ScreenNames";

const Payments = ({ navigation }) => {
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
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, { backgroundColor:'transparent',padding: hp(2) }]}>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View style={{ flexDirection: "column" }}>

              <Text style={[ChakraTypography.SmallRegular, { marginTop: 10 }]}>{"AVAILABLE BALANCE"}</Text>
              <Text style={[ChakraTypography.Normal, { fontSize: 22, color: colors.pinkLight }]}>{"$ 10.56"}</Text>

            </View>

            <View style={[AppStyles.centerItems, {
              width: 60,
              height: 60,
              borderRadius: 30,
              marginEnd: 10,
              backgroundColor: colors.blueLight,
              alignSelf: "center",
            }]}>
              <Image source={images.avatar} style={{ width: 60, height: 60, resizeMode: "contain" }} />

            </View>

          </View>
          <Text style={[ChakraTypography.Normal, { fontSize: 22 }]}>{"Payments"}</Text>

          <View style={{
            height: 40,
            borderRadius: 40,
            backgroundColor: "rgba(43, 66, 180, 1)",
            marginTop: 10,
            flexDirection: "row",
            padding: 10,
            justifyContent: "space-between",
          }}>

            <TouchableOpacity onPress={() => onTabSelect("active")} style={{
              width: "45%",
              height: 25,
              alignSelf: "center",
              backgroundColor: activeTabSelect ? colors.pinkLight : "transparent",
              borderRadius: 20,
              alignItems: "center",
            }}>
              <Text style={[ChakraTypography.SmallMedium, {
                textAlign: "center",
                width: "100%",
                alignSelf: "center",
                marginTop: 2,
              }]}>{"Transactions"}</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => onTabSelect("completed")} style={{
              width: "45%",
              height: 25,
              alignSelf: "center",
              backgroundColor: completedTabSelect ? colors.pinkLight : "transparent",
              borderRadius: 20,
              alignItems: "center",
            }}>
              <Text style={[ChakraTypography.SmallMedium, {
                textAlign: "center",
                width: "100%",
                alignSelf: "center",
                marginTop: 2,
              }]}>{"Withdrawals"}</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={[0, 0, 0, 0, 0, 0, 0, 0]}
            renderItem={({ item }) => <TouchableOpacity activeOpacity={.7}>
              <View style={{
                borderRadius: 20,
                borderWidth: 2,
                borderColor: colors.pinkLight,
                marginTop: 10,
                padding: 10,
                flexDirection: "row",
              }}>
                <View style={{ flexDirection: "column", flex: 1 }}>
                  <View style={{ flexDirection: "row" }}>
                    <GradiantOval colors={gradiant_colors.greenGradiant} text={"21-03-21"} width={70} />

                  </View>

                  <Text style={[ChakraTypography.SmallMedium, {
                    marginTop: 2,
                    marginEnd: 10,
                  }]}>{"$10 credited for Follow the link and Submit your Process Task"}</Text>
                </View>

              </View>
            </TouchableOpacity>}
          />
          <TouchableOpacity onPress={() => navigation.navigate(WITHDRAW)} activeOpacity={.7}
                            style={{ position: "absolute", right: 20, bottom: 20 }}>
            <View>
              <View style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: colors.pinkLight,
                justifyContent: "center",
                alignItems: "center",
              }}>
                <Image source={images.plus} style={{ resizeMethod: "contain", width: 25, height: 25 }} />
              </View>
              <Text style={ChakraTypography.SmallMedium}>{"Cash Out"}</Text>
            </View>
          </TouchableOpacity>
        </View>
      } />
  );
};

export default Payments;
