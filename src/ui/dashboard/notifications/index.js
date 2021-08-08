import React, { useState } from "react";
import { FlatList, Image, LayoutAnimation, Text, TouchableOpacity, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../AuthContaxt/index";
import { AppStyles } from "../../../theme/styles";
import colors from "../../../theme/colors";
import AppContainer from "../../../core/AppContainer";
import { images } from "../../../assets";
import { ChakraTypography } from "../../../theme/ChakraTypography";
import gradiant_colors from "../../../theme/gradiant_colors";
import { TASK_DETAILS } from "../../../constants/ScreenNames";
import LinearGradient from "react-native-linear-gradient";

const Notifications = ({ navigation }) => {
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
        <View style={[AppStyles.columnContainer, { backgroundColor: "transparent", padding: hp(2) }]}>

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
          <Text style={[ChakraTypography.Normal, { fontSize: 22 }]}>{"Notifications"}</Text>
          <LinearGradient
            colors={gradiant_colors.blueGradiant}
            style={[{
              borderRadius: 15,
              width: "100%",
              justifyContent: "center",
            }]}

          >
            <FlatList
              data={[0, 0, 0, 0, 0, 0, 0, 0]}
              renderItem={({ item }) => <TouchableOpacity activeOpacity={.7}>
                <View style={{
                  borderRadius: 15,
                  margin: 10,
                  backgroundColor: colors.primaryDarkColor,
                  padding: 10,
                  flexDirection: "row",
                }}>
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                      <Text style={ChakraTypography.SmallRegular}>{"21-03-21"}</Text>

                    </View>

                    <Text style={[ChakraTypography.SmallMedium, {
                      marginTop: 2,
                      marginEnd: 10,
                    }]}>{"New Task added in your list."}</Text>
                  </View>

                </View>
              </TouchableOpacity>}
            />


          </LinearGradient>

        </View>
      } />
  );
};

export default Notifications;
