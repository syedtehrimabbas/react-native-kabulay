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
import { TASK_DETAILS } from "../../../constants/ScreenNames";

const Tasks = ({ navigation }) => {
    const state = React.useContext(UserContext);
    const [activeTabSelect, setActiveTabSelect] = useState(true);
    const [completedTabSelect, setCompletedTabSelect] = useState(false);
    React.useEffect(() => {
      return () => {
      };
    }, []);
    const borderColors = [colors.pinkLight, colors.green, colors.orange, colors.blueColor];
  const getRandomColor = (position) => {
    return borderColors[position % borderColors.length];
  };
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
                <Text style={[ChakraTypography.Normal, { fontSize: 22, color: colors.green }]}>{"$ 10.56"}</Text>

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
            <Text style={[ChakraTypography.Normal, { fontSize: 22 }]}>{"Tasks"}</Text>

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
                }]}>{"Active Tasks"}</Text>
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
                }]}>{"Completed Tasks"}</Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={[0, 0, 0, 0, 0, 0, 0, 0]}
              renderItem={({index, item }) => <TouchableOpacity activeOpacity={.7}
                                                          onPress={() => navigation.navigate(TASK_DETAILS)}>
                <View style={{
                  borderRadius: 20,
                  borderWidth: 3,
                  borderColor: getRandomColor(index),
                  marginTop: 10,
                  padding: 10,
                  flexDirection: "row",
                }}>
                  <View style={{ flexDirection: "column", flex: 1 }}>
                    <View style={{ flexDirection: "row" }}>
                      <GradiantOval colors={gradiant_colors.greenGradiant} text={"$10"} width={30} />
                      <GradiantOval colors={gradiant_colors.greenGradiant} text={"12/03/21"} width={70} />

                    </View>

                    <Text style={[ChakraTypography.SmallMedium, {
                      marginTop: 2,
                      marginEnd: 10,
                    }]}>{"Please follow the link and submit your\nprocess."}</Text>
                  </View>
                  <View style={[AppStyles.centerItems, {
                    width: 60,
                    height: 60,
                    borderRadius: 15,
                    backgroundColor: colors.white,
                    alignSelf:'center'
                  }]}>
                    <Image source={images.twitterImg} style={{ width: 60, height: 60, resizeMode: "contain" }} />

                  </View>

                </View>
              </TouchableOpacity>}
            />
          </View>
        } />
    );
  }
;

export default Tasks;
