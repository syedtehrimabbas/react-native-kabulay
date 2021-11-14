import React, { useState } from "react";
import { Text, View } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import UserContext from "../../../../AuthContaxt";
import AppContainer from "../../../../core/AppContainer";
import { AppStyles } from "../../../../theme/styles";
import { BackToolbar } from "../../../../core/BackToolbar";
import { Typography } from "../../../../theme/Typography";
import { ChakraTypography } from "../../../../theme/ChakraTypography";
import colors from "../../../../theme/colors";
import { GradiantButton } from "../../../../core/GradiantButton";
import gradiant_colors from "../../../../theme/gradiant_colors";
import { TASK_DETAILS_START } from "../../../../constants/ScreenNames";
import { images } from "../../../../assets";


const TaskDetails = ({ navigation }) => {
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
      background={images.bg_small_squares}
      children={
        <View style={[AppStyles.columnContainer, {backgroundColor:'transparent', padding: hp(2) }]}>
          <BackToolbar navigation={navigation} />
          <Text style={[Typography.Normal, { marginTop: 10, fontSize: 22 }]}>{"Task Details"}</Text>

          <Text style={[ChakraTypography.Normal, {
            fontSize: 19,
            color: colors.green,
          }]}>{"Please follow the link and submit your process."}</Text>

          <Text style={[ChakraTypography.Normal, {
            fontSize: 15,
            color: colors.white_60,
          }]}>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n" +
          "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."}</Text>

          <Text style={[ChakraTypography.Normal, { fontSize: 19, color: colors.blueColor }]}>{"$   Budget: $10"}</Text>
          <Text style={[ChakraTypography.Normal, {
            fontSize: 19,
            color: colors.blueColor,
          }]}>{"🕐  Remaining Time: 12:15:37"}</Text>

          <GradiantButton
            label="Start task"
            onPress={() => {
              navigation.navigate(TASK_DETAILS_START);
            }}
            styles={{ position: "absolute", marginTop: 10, bottom: 20 }}
            backgroundColor={gradiant_colors.pinkGradiant}
          />


        </View>
      } />
  );
};

export default TaskDetails;
